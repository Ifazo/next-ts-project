import Footer from '@/components/Footer'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import { Providers } from './providers'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/authOptions'
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: [ 'latin' ] })

export const metadata: Metadata = {
  title: 'Ifaz Next App',
  description: 'Created by ifaz',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions);
  console.log(session)
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
            <Header session={session} />
            <Toaster />
            {children}
            <Footer />
        </Providers>
      </body>
    </html>
  )
}
