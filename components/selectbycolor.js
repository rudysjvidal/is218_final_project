'use client';

import React, { useState } from 'react';
//import styles from '../src/app/styles/color.component.css';

export default function Color() {

    return (

        <main id="colored">
            <div className="shop-color">
                <h3>shop by color</h3>
            </div>
            <div className="cardss" id="colorcards">
                <div className="card1">
                    <img src="/images/Green_Blue_W.webp" alt="image of color wheel" loading="lazy"></img>
                    <p>Green/Blue</p>
                </div>
                <div className="card1">
                    <img src="/images/Neutral_Brown_W.webp" alt="image of color wheel" loading="lazy"></img>
                    <p>Neutral/Brown</p>
                </div>
                <div className="card1">
                    <img src="/images/Orange_Yellow_W.webp" alt="image of color wheel" loading="lazy"></img>
                    <p>Yellow/Orange/Red</p>
                </div>
                <div className="card1">
                    <img src="/images/Purple_Violet_W.webp" alt="image of color wheel" loading="lazy"></img>
                    <p>Pink/Purple</p>
                </div>
                <div className="card1">
                    <img src="/images/White_Grey_Black_W.webp" alt="image of color wheel" loading="lazy"></img>
                    <p>White/Grey/Black</p>
                </div>
            </div>

        </main>

    );

}
