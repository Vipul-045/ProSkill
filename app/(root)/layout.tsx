import React, { ReactNode } from 'react'
import Link from 'next/link'

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <nav>
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.svg" alt="Logo" width={38} height={32} />
          <h2 className="text-primary-100">ProSkill</h2>
        </Link>
      </nav>

      {children}
    </div>
  )
}

export default RootLayout