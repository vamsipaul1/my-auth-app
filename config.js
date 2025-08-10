// Environment Variables Configuration
// Create a .env.local file in the root directory with these variables:

export const config = {
  // Google OAuth Configuration
  googleClientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || 'your_google_client_id_here',
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET || 'your_google_client_secret_here',
  
  // Next.js Configuration
  nextAuthUrl: process.env.NEXTAUTH_URL || 'http://localhost:3000',
  nextAuthSecret: process.env.NEXTAUTH_SECRET || 'your_nextauth_secret_here',
  
  // Database Configuration (if needed)
  databaseUrl: process.env.DATABASE_URL || 'your_database_url_here',
  
  // API Keys
  apiUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
}

// Required Environment Variables:
// NEXT_PUBLIC_GOOGLE_CLIENT_ID=your_google_client_id_here
// GOOGLE_CLIENT_SECRET=your_google_client_secret_here
// NEXTAUTH_URL=http://localhost:3000
// NEXTAUTH_SECRET=your_nextauth_secret_here
// DATABASE_URL=your_database_url_here
// NEXT_PUBLIC_API_URL=http://localhost:3000/api 