import React from "react";
import "./ProductStyle.css";

function Product({ id, title, price, rating, image }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <div className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </div>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map(() => (
              <span className="product__ratingStar">⭐</span>
            ))}
        </div>
      </div>
      <img src={image} alt="Product Image" />
      <button title="Add to Basket">Add to Basket</button>
    </div>
  );
}

export default Product;
