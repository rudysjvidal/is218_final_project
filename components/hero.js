import styles from '../src/app/styles/hero.component.css';
import React from "react";



export default function Hero() {
    return (
        <main>
            <div className="hero">
                <div className="hero-image">
                    <img className="hero-image-img" src="/images/twogreyshirts2.webp" alt="image of two people in plain shirts" loading="lazy"></img>
                    <img className="hero-image-mobile-img" src="/images/twogreyshirtsvertical.webp" alt="image of two people in plain shirts" loading="lazy"></img>
                </div>
                <div className="hero-content">
                    <div className="hero-text">
                        <h1>ELEVATE YOUR ESSENTIALS</h1>
                        <h3>EARN 30% OFF WHEN YOU SIGN UP</h3>
                    </div>
                </div>
            </div>
        </main>
    )
}