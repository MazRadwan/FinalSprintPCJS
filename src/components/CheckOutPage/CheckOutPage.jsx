import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import ListItem from "../ListItem/ListItem";
import CartSummary from "../CartSummary/CartSummary";
import styles from "./CheckOutPage.module.css";

const CheckOutPage = () => {
  const { cartItems, incrementQuantity, decrementQuantity, removeFromCart } =
    useContext(CartContext);
  const navigate = useNavigate();

  const totalItems = cartItems.reduce(
    (count, item) => count + item.quantity,
    0
  );

  // Calculate the total quantity of items
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  useEffect(() => {
    // If the total quantity is zero, navigate to the root page
    if (totalQuantity === 0) {
      navigate("/");
    }
  }, [totalQuantity, navigate]);
  const handleCheckout = () => {
    console.log("Proceed to payment or order confirmation");
    navigate("/confirmation");
  };

  return (
    <div className={styles.checkoutContainer}>
      <h2 className={styles.cartHeader}>Your Cart ({totalItems})</h2>{" "}
      {/* Dynamic cart header */}
      <div className={styles.contentWrapper}>
        <div className={styles.listItemsContainer}>
          {cartItems.map((item) => (
            <ListItem
              key={item.id}
              item={item}
              onIncrement={() => incrementQuantity(item.id)}
              onDecrement={() => decrementQuantity(item.id)}
              onRemove={() => removeFromCart(item.id)}
            />
          ))}
        </div>
        <CartSummary />
      </div>
    </div>
  );
};

export default CheckOutPage;
