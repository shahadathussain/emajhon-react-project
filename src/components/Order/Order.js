import React from "react";
import "./Order.css";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProduct";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import { removeFromDb } from "../../utilities/fakedb";
import { useNavigate } from "react-router-dom";

const Order = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);

  const navigat = useNavigate();

  const removedProduct = (product) => {
    const rest = cart.filter((p) => p.id !== product.id);
    setCart(rest);
    removeFromDb(product.id);
  };
  return (
    <div>
      <div className="shop-container">
        <div className="review-items-container">
          {cart.map((product) => (
            <ReviewItem key={product.id} product={product} removedProduct={removedProduct} />
          ))}
        </div>
        <div className="cart-container">
          <Cart cart={cart}>
            <button onClick={() => navigat("/shipment")}>Proceed Shipping</button>
          </Cart>
        </div>
      </div>
    </div>
  );
};

export default Order;
