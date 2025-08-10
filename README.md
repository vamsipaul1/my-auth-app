# My Auth App

A beautiful Next.js authentication application with a modern signup form and Google OAuth integration.

## Features

- 🎨 Modern, responsive UI with Tailwind CSS
- 📝 Form validation with real-time error feedback
- 🔐 Password confirmation validation
- 🌐 Google OAuth integration (ready for implementation)
- ⚡ Fast development with Next.js
- 📱 Mobile-friendly design

## Getting Started

### Prerequisites

- Node.js 14.0 or later
- npm or yarn
- Google Cloud Project with OAuth 2.0 credentials

### Installation

1. Navigate to the project directory:
   ```bash
   cd my-auth-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up Google OAuth credentials:
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select existing one
   - Enable Google+ API
   - Go to Credentials → Create Credentials → OAuth 2.0 Client ID
   - Set Authorized redirect URIs to: `http://localhost:3000/auth/google/callback`
   - Copy your Client ID and Client Secret

4. Update your `.env.local` file with your Google credentials:
   ```bash
   GOOGLE_CLIENT_ID=your_actual_google_client_id
   GOOGLE_CLIENT_SECRET=your_actual_google_client_secret
   NEXTAUTH_SECRET=your_random_secret_string
   ```

5. Run both servers (auth server + frontend):
   ```bash
   npm run dev:all
   ```

6. Open [http://localhost:3001](http://localhost:3001) in your browser.

7. Navigate to [http://localhost:3001/register](http://localhost:3001/register) to see the signup page.

## Project Structure

```
my-auth-app/
├── pages/
│   ├── _app.js          # Main app component
│   ├── index.js         # Home page
│   └── register.js      # Registration page
├── styles/
│   └── globals.css      # Global styles with Tailwind
├── package.json         # Dependencies and scripts
├── tailwind.config.js   # Tailwind configuration
├── next.config.js       # Next.js configuration
└── README.md           # This file
```

## Features Explained

### Registration Form
- **First Name & Last Name**: Required fields with validation
- **Email**: Required with email format validation
- **Password**: Minimum 6 characters required
- **Confirm Password**: Must match the password field
- **Real-time Validation**: Errors appear as you type
- **Loading States**: Visual feedback during form submission

### Google OAuth
- **Google Sign-in Button**: Styled with official Google colors
- **Loading States**: Visual feedback during authentication
- **Ready for Integration**: Placeholder for actual Google OAuth implementation

### UI/UX Features
- **Gradient Background**: Beautiful blue gradient background
- **Responsive Design**: Works on all screen sizes
- **Focus States**: Clear focus indicators for accessibility
- **Hover Effects**: Smooth transitions and hover states
- **Error Handling**: Clear error messages with red borders

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```bash
# Google OAuth Configuration
NEXT_PUBLIC_GOOGLE_CLIENT_ID=987092385556-75klskmvv92csooh3286v0r5vkurt508.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=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
# Next.js Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret_here

# Database Configuration (if needed)
DATABASE_URL=your_database_url_here

# API Keys
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

## Next Steps

To implement real Google OAuth:

1. Set up a Google Cloud Project
2. Enable Google+ API
3. Create OAuth 2.0 credentials
4. Install Firebase Auth or Google OAuth library
5. Replace the mock `handleGoogleSignup` function with real implementation
6. Add your Google OAuth credentials to the `.env.local` file

## Technologies Used

- **Next.js**: React framework for production
- **React**: UI library
- **Tailwind CSS**: Utility-first CSS framework
- **ESLint**: Code linting
- **PostCSS**: CSS processing

## Available Scripts

- `npm run dev` - Start Next.js frontend on port 3001
- `npm run auth-server` - Start authentication server on port 3000
- `npm run dev:all` - Start both servers simultaneously
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## How It Works

1. **Frontend (Port 3001)**: Next.js application with beautiful UI
2. **Backend (Port 3000)**: Express.js server with Passport.js Google OAuth
3. **Authentication Flow**:
   - User clicks "Sign up with Google" on register page
   - Frontend redirects to `http://localhost:3000/auth/google`
   - Backend handles Google OAuth flow
   - After successful authentication, user is redirected to dashboard
   - Dashboard fetches user info from `/me` endpoint

## Testing the Setup

1. Start both servers: `npm run dev:all`
2. Visit: http://localhost:3001/register
3. Click "Sign up with Google"
4. Complete Google OAuth flow
5. You should be redirected to the dashboard with your user info

## Contributing

Feel free to submit issues and enhancement requests! 