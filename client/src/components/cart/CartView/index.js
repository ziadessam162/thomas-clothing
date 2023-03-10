import React from "react";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import PageLoading from "../../UI/PageLoading";

import Assistance from "./Assistance";
import CartCheckout from "./CartCheckout";
import CartProducts from "./CartProducts";

import classes from "./CartView.module.css";

const CartView = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div className={classes.cart_view_wrapper}>
      <div className={classes.cart_view}>
        {cart.loading && !cart.items.length >= 1 && <PageLoading />}
        {!cart.loading && cart.items.length === 0 && (
          <div className={classes.empty_cart}>
            <div className={classes.actions}>
              <p>Your have 0 items in your cart</p>
              <div className={classes.link_wrapper}>
                <Link className="btn-primary" to="/">
                  Continue shopping
                </Link>
              </div>
            </div>
            <div className={classes.assistance_wrapper}>
              <Assistance />
            </div>
          </div>
        )}
        {cart.items.length >= 1 && (
          <div className={classes.cart_details}>
            <div>
              <CartProducts items={cart.items} />
              <div className={classes.cart_actions}>
                <Link to="/">Continue Shopping</Link>
                <div className={classes.checkout}>
                  <Link to="/checkout" className="btn-primary">
                    Secure Checkout
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <CartCheckout totalPrice={cart.totalPrice} />
              <Assistance />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartView;
