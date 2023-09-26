import React from "react";
import "./navbar.css";
import {Link} from "react-scroll";

export default function Navbar() {
  return (
    <div className="nav">
      <h1 className="nav-h1">ShopNow</h1>
      <div className="nav-items">
          <Link className="nav-item">Home</Link>
          <Link className="nav-item">Product</Link>
          <Link className="nav-item">About</Link>
          <Link className="nav-item">Contact</Link>
      </div>
      <button className="nav-button">View Cart</button>
    </div>
  );
}
