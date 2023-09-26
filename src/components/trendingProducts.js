import React from "react";
import "./trendingProducts.css";

export default function TrendingProducts(props) {
  return (
    <div className="t-card">
      <img src={props.img} alt="mens-fashion-image" />
      <p>{props.title}</p>
      <span className="card-price">{`Rs.${props.price} only`}</span>
      <div className="rating-star">
        Rating: {props.rating}
        <img src={props.starImage} alt="star" width="25px" />
      </div>
    </div>
  );
}
