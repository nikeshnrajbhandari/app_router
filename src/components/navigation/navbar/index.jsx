import React from "react"
import Link from "next/link"

import Button from "./Button"
import Logo from "./Logo"

const Navbar = () => {
    return (
        <>
            <div className="w-full h-20 bg-white sticky top-0 opacity-100">
                <div className="container mx-auto px-4 h-full">
                    <div className="flex justify-between items-center h-full">
                        <Logo />
                        <ul className="hidden md:flex gap-x-6 text-black">
                            <li>
                                <Link href="/">
                                    <p>Home</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/about">
                                    <p>About Us</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop">
                                    <p>Shop</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact">
                                    <p>Contact</p>
                                </Link>
                            </li>
                        </ul>
                        <Button />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
