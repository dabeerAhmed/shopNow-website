import React from "react";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Cards from "./components/cards";
import Nav2 from "./components/nav2";
import data from "./data1.js";
import Sale from "./components/sale";
import Trending from "./components/trending";
import TrendingProducts from "./components/trendingProducts";
import data2 from "./data2";
// import MensProducts from "./components/mensProducts";
// import { Link } from "react-router-dom";
// import { Route, Routes } from "react-router-dom";

function App() {
  const trendingCards = data2.map((item) => {
    return item.istrending ? (
      <TrendingProducts
        key={item.id}
        img={item.img}
        title={item.title}
        price={item.price}
        rating={item.rating}
        starImage={item.starImage}
        istrending={item.istrending}
      />
    ) : null;
  });
  const cards = data.map((item) => {
    return <Cards img={item.img} title={item.title} />;
  });
  return (
    <div>
      {/* <Routes>
        <Route path="/mensProducts" element={<MensProducts />} />
      </Routes> */}

      <Navbar />
      <Nav2 />
      <Home />
      <Sale />
      <div className="container">{cards}</div>
      <Trending />
      <div className="tp">{trendingCards}</div>
      {/* <Link to="/mensProducts">Go to Mens Products</Link> */}
    </div>
  );
}

export default App;
