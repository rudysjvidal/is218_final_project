
"use client";
import styles from '../src/app/styles/navbar.component.css';
import Head from 'next/head';
import '../src/app/globals.css';
import Link from 'next/link'

export default function Navbar() {
    return (
        <main id="top">
            <div className="navbar">

                <div className="menu">
                    <div className="logo">
                        <Link href="/#promotion">
                            <img className="nav-img" src="/images/plain-shirts-black.webp" alt="PlainShirts Logo"></img>
                        </Link>
                    </div>

                    <div className='menuitems'>
                        <Link href="/#men">
                            <p>Men</p>
                        </Link>
                        <Link href="/#women">
                            <p>Women</p>
                        </Link>
                        <Link href="/#colored">
                            <p>Shop By Color</p>
                        </Link>
                        <Link href="/#about">
                            <p>About</p>
                        </Link>
                    </div>
                </div>

            </div>
        </main>
    )
}