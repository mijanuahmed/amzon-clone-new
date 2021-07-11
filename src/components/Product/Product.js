import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import "./Product.css";

const Product = ({ product }) => {
  const { id, title, image, rating, price } = product;

  const { addToBasket } = useContext(GlobalContext);
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />
      <button onClick={() => addToBasket(product)}>Add to basket</button>
    </div>
  );
};

export default Product;
