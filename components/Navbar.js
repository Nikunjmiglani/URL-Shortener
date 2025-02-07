import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center h-16 bg-black text-white shadow-sm font-geist-sans" role="navigation">
        <div className="">
           <Link href="/"> <h2 className="px-3 font-extrabold text-2xl">ShortLinks</h2></Link>
        </div>
        <ul className="flex gap-5 py-2 px-3">
            <Link href="/home"><li className="cursor-pointer hover:font-bold">Home</li></Link>
            <Link href="/about"><li className="cursor-pointer hover:font-bold">About Us</li></Link>
            <Link href="/contact"><li className="cursor-pointer hover:font-bold">Contact</li></Link>
        </ul>
    </nav>
  )
}

export default Navbar
