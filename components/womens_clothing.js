import styles from '../src/app/styles/womensclothing.component.css';


export default function WomensClothing() {
    return (
        <main id="women">


            <div className="shop-women">
                <h3>Women</h3>
            </div>


            <div className="cards">
                <div className="card1">
                    <img src="/images/2.webp" alt="Image of woman tshirt" loading="lazy"></img>
                    <p>Women’s Scoop Neck</p>
                    <p>PlainShirts Tee</p>
                </div>
                <div className="card1">
                    <img src="/images/1.webp" alt="Image of woman tshirt" loading="lazy"></img>
                    <p>Women’s Long Sleeve</p>
                    <p>PlainShirts Tee</p>
                </div>
                <div className="card1">
                    <img src="/images/3.webp" alt="Image of woman tshirt" loading="lazy"></img>
                    <p>Women’s V-Neck</p>
                    <p>PlainShirts Tee</p>
                </div>
                <div className="card1">
                    <img src="/images/4.webp" alt="Image of woman tshirt" loading="lazy"></img>
                    <p>Women’s Crew Neck </p>
                    <p>PlainShirts Tee</p>
                </div>
            </div>

        </main>
    )
}