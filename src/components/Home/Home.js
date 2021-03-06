import React, { useContext } from "react";
import Product from "../Product/Product";
import "./Home.css";
import {
  productsList1,
  productsList2,
  productsList3,
} from "../../data/ProductLists";
import { GlobalContext } from "../Context/GlobalState";

const Home = () => {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      <div className="home__row1">
        {productsList1.map((product) => (
          <Product product={product} id={product.id}></Product>
        ))}
      </div>
      <div className="home__row2">
        {productsList2.map((product) => (
          <Product product={product} id={product.id}></Product>
        ))}
      </div>
      <div className="home__row3">
        {productsList3.map((product) => (
          <Product product={product} id={product.id}></Product>
        ))}
      </div>
    </div>
  );
};

export default Home;
