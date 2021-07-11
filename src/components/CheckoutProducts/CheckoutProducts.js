import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import "./CheckoutProducts.css";

const CheckoutProducts = ({ item }) => {
  const { id, title, image, price, rating } = item;
  const { removeFromBasket } = useContext(GlobalContext);
  return (
    <div className="checkoutProducts">
      <img className="checkoutProducts__image" src={image} alt="" />
      <div className="checkoutProducts__info">
        <p className="checkoutProducts__title">{title}</p>
        <p className="checkoutProducts__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProducts__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
        <button
          onClick={() => removeFromBasket(id)}
          className="checkoutProducts__button"
        >
          Remove from basket
        </button>
      </div>
    </div>
  );
};

export default CheckoutProducts;
