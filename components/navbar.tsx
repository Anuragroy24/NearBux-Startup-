"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, ShoppingCart, Wallet, User } from "lucide-react"

export default function Navbar() {
  const pathname = usePathname()

  const navItems = [
    { href: "/", icon: Home, label: "Home" },
    { href: "/cart", icon: ShoppingCart, label: "Cart" },
    { href: "/wallet", icon: Wallet, label: "Wallet" },
    { href: "/profile", icon: User, label: "Profile" },
  ]

  return (
    <header className="bg-blue-500 text-white p-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="bg-blue-700 p-1 rounded">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="3" width="18" height="18" rx="2" fill="white" />
            <path
              d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
              fill="#1E40AF"
            />
          </svg>
        </div>
        <span className="font-bold text-lg">NearBux</span>
      </div>
      <div className="flex items-center gap-4">
        {navItems.map(({ href, icon: Icon, label }) => {
          const isActive = pathname === href
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center ${isActive ? "text-orange-400" : "text-white"} hover:text-orange-300 transition-colors`}
              title={label}
            >
              <Icon className="w-5 h-5" />
            </Link>
          )
        })}
      </div>
    </header>
  )
}
