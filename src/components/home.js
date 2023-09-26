import React from "react";
import "./home.css";

export default function Home() {
  return (
    <div className="img-container">
      <img src="1.jpg" alt="home-img" className="home-img" />
      <h1 className="image-h1">Browse our virtual aisles, explore with delight</h1>
      {/* <p className="image-p">
        Welcome to ShopNow, your one-stop destination for all your shopping
        needs. <br />
        Step into our virtual aisles and embark on a delightful journey <br />
        of discovery. Explore an extensive collection of gadgets, trendy
        clothing, <br />
        fashion accessories, sports gear, and so much more—all carefully <br />
        curated to cater to your diverse tastes and desires.
      </p> */}
      <button className="home-button">Shop Now</button>
    </div>
  );
}
