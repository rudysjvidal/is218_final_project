import styles from '../src/app/styles/mensclothing.component.css';


export default function MensClothing() {
    return (
        <main id="men">


            <div className="shop-men">
                <h3>men</h3>
            </div>


            <div className="cards">
                <div className="card1">
                    <img src="/images/8.webp" alt="Image of tshirt" loading="lazy"></img>
                    <div>
                        <p>Oversized Fit</p>
                        <p>PlainShirts Tee</p>
                    </div>
                </div>
                <div className="card1">
                    <img src="/images/5.webp" alt="Image of tshirt" loading="lazy"></img>
                    <div>

                        <p>Crew Neck</p>
                        <p>PlainShirts Tee</p>
                    </div>
                </div>
                <div className="card1">
                    <img src="/images/6.webp" alt="Image of tshirt" loading="lazy"></img>
                    <div>

                        <p>V-Neck</p>
                        <p>PlainShirts Tee</p>
                    </div>
                </div>
                <div className="card1">
                    <img src="/images/7.webp" alt="Image of tshirt" loading="lazy"></img>
                    <div>

                        <p>Long Sleeve</p>
                        <p>PlainShirts Tee</p>
                    </div>
                </div>
            </div>

        </main>
    )
}