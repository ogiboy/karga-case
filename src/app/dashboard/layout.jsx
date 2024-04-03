import Link from 'next/link'

export default function DashboardLayout({ children }) {
  return (
    <main>
      <nav className="h-12 w-screen border-b-2 flex justify-between">
        <a href="#">kargakarga</a>
        <Link href="/">Anasayfa</Link>
      </nav>
      {children}
    </main>
  )
}
