import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'KetoKompanion - Your Keto Meal Tracker',
  description: 'Track keto meals, find restaurant options, manage weight, and plan grocery shopping on a budget',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
