import Link from 'next/link'
import { LuHome } from 'react-icons/lu'

export default function DashboardLayout({ children }) {
  return (
    <main>
      <nav className="h-12 w-screen border-b-2 flex justify-between">
        <Link
          className="text-indigo-900 font-bold text-xl flex justify-center items-center mx-10"
          href="#"
        >
          kargakarga
        </Link>
        <Link
          className="mx-10 flex justify-center items-center scale-125 text-indigo-900"
          href="/"
        >
          <LuHome />
        </Link>
      </nav>
      {children}
    </main>
  )
}
