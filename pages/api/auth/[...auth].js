import nextConnect from 'next-connect';
import passport from 'passport';
import session from 'express-session';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

// Setup passport session serialization
passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((obj, done) => done(null, obj));

// Google OAuth Strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/google/callback`,
    },
    (accessToken, refreshToken, profile, done) => {
      const user = {
        id: profile.id,
        displayName: profile.displayName,
        email: profile.emails?.[0]?.value || '',
        picture: profile.photos?.[0]?.value || '',
        provider: 'google',
      };
      console.log('Google OAuth successful for:', user.email);
      return done(null, user);
    }
  )
);

const handler = nextConnect();

// Session middleware
handler.use(
  session({
    secret: process.env.SESSION_SECRET || 'your_secret',
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: process.env.NODE_ENV === 'production',
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    },
  })
);

handler.use(passport.initialize());
handler.use(passport.session());

// API routes
handler.get('/api/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

handler.get(
  '/api/auth/google/callback',
  passport.authenticate('google', { failureRedirect: `${process.env.NEXT_PUBLIC_BASE_URL}/register` }),
  (req, res) => {
    res.redirect(`${process.env.NEXT_PUBLIC_BASE_URL}/dashboard`);
  }
);

handler.get('/api/auth/me', (req, res) => {
  if (req.isAuthenticated?.()) {
    res.json(req.user);
  } else {
    res.json(null);
  }
});

handler.post('/api/auth/logout', (req, res) => {
  req.logout(err => {
    if (err) {
      console.error('Logout error:', err);
      return res.status(500).json({ error: 'Logout failed' });
    }
    res.json({ message: 'Logged out successfully' });
  });
});

export default handler;
