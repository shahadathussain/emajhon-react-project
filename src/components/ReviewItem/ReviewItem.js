import React from "react";
import "./ReviewItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const ReviewItem = ({ product, removedProduct }) => {
  const { img, name, price, shipping, quantity } = product;
  return (
    <div className="review-item">
      <div className="images">
        <img src={img} alt="" />
      </div>
      <div className="review-content">
        <div className="review-info">
          <p className="product-name" title={name}>
            {name.length > 20 ? name.slice(0, 22) + "..." : name}
          </p>
          <p>Price: ${price}</p>
          <p>
            <small>Shipping Charge : ${shipping}</small>
          </p>
          <p>
            <small>Quantity: {quantity}</small>
          </p>
        </div>
        <div className="delete-btn">
          <button onClick={() => removedProduct(product)}>
            <FontAwesomeIcon className="icon" icon={faTrashAlt} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
