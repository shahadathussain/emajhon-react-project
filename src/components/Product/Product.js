import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const Product = ({ product, addToCart }) => {
  const { name, img, seller, price, ratings } = product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <p className="product-name">Name : {name}</p>
        <p>Price : ${price}</p>
        <p>
          <small>Seller : {seller}</small>
        </p>
        <p>
          <small>Ratings : {ratings}</small>
        </p>
      </div>
      <button onClick={() => addToCart(product)} className="btn-grup">
        <p>Add to Cart</p>
        <FontAwesomeIcon style={{ fontSize: "18px" }} icon={faCartPlus} />
      </button>
    </div>
  );
};

export default Product;
