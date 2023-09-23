import './globals.css'

export const metadata = {
  title: 'Bank landingPage',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className='font-sans font-medium text-lg'>{children}</body>
    </html>
  )
}