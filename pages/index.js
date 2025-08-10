import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>My Auth App</title>
        <meta name="description" content="Authentication app with Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Welcome to My Auth App
          </h1>
          <div className="space-y-4">
            <Link 
              href="/login" 
              className="block w-full bg-purple-600 text-white py-3 px-6 rounded-lg text-center hover:bg-purple-700 transition-colors"
            >
              Go to Login Page
            </Link>
            <Link 
              href="/register" 
              className="block w-full bg-blue-600 text-white py-3 px-6 rounded-lg text-center hover:bg-blue-700 transition-colors"
            >
              Go to Register Page
            </Link>
            <Link 
              href="/dashboard" 
              className="block w-full bg-green-600 text-white py-3 px-6 rounded-lg text-center hover:bg-green-700 transition-colors"
            >
              Go to Dashboard
            </Link>
          </div>
        </div>
      </main>
    </>
  )
} 