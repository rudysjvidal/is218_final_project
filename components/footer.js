import styles from '../src/app/styles/footer.component.css';


import React from 'react';
import Link from 'next/link'


export default function Footer() {
    return (
        <main className="footer">
            <div className="footertop">
                <div className="column">
                    <img src="/images/plain-shirts-black.webp" alt="Plain Shirts Logo" loading="lazy" />
                </div>
                <div className="column">
                    <p className="heading">Company</p>
                    <Link href="/#about">
                        <p>About Us</p>
                    </Link>
                </div>
                <div className="column">
                    <p className="heading">Customer Service</p>
                    <Link href="/terms">
                        <p>Cookie Consent Info</p>
                    </Link>

                    <Link href="/privacy">
                        <p>Privacy Policy</p>
                    </Link>
                </div>
                <div className="column">
                    <p className="heading">Stay Connected</p>
                    <div className="social-icons">
                        <Link href="https://www.twitter.com">
                            <img src="/images/x.webp" alt="Social Icon X" loading="lazy" />
                        </Link>
                        <Link href="https://www.linkedin.com">
                            <img src="/images/linkedin.webp" alt="Social Icon LinkedIn" loading="lazy" />
                        </Link>
                        <Link href="https://www.youtube.com">
                            <img src="/images/youtube.webp" alt="Social Icon YouTube" loading="lazy" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="footermid">
                <p>+1(555)-555-5555</p>
                <p>support@plainshirts.com</p>
            </div>
            <div className="footerbottom">
                <p>© 2023, PlainShirts</p>
                <p>
                    <a href="#promotion">Back to top ↑</a>
                </p>
            </div>
        </main >
    );
}
