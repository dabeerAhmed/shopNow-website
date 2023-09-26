import React from "react";
import "./trending.css";
import {Link} from "react-scroll";

export default function Trending() {
  return (
    <div className="trending-div">
      <h1 className="trending-h1">Trending This Week</h1>
      <div className="trending-items">
        <Link className="trending-item">Men</Link>
        <Link className="trending-item">Women</Link>
        <Link className="trending-item">Accessories</Link>
      </div>
    </div>
  );
}
