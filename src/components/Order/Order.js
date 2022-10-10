import React from "react";
import "./Order.css";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProduct";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import { removeFromDb } from "../../utilities/fakedb";
import { Link } from "react-router-dom";

const Order = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);

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
            <Link to="/inventory">
              <button>Proceed Checkout</button>
            </Link>
          </Cart>
        </div>
      </div>
    </div>
  );
};

export default Order;
