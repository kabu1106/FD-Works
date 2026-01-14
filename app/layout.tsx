import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FD-Works 勤怠管理システム',
  description: '消防署の勤怠管理システム',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}