import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import ListItem from "../ListItem/ListItem";
import CartSummary from "../CartSummary/CartSummary";
import styles from "./CheckOutPage.module.css";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";

const CheckOutPage = () => {
  const { cartItems, incrementQuantity, decrementQuantity, removeFromCart, clearCart } =
    useContext(CartContext);

  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [isCheckoutInProgress, setIsCheckoutInProgress] = useState(false);

  const totalItems = cartItems.reduce(
    (count, item) => count + item.quantity,
    0
  );

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  useEffect(() => {
    if (totalQuantity === 0) {
      navigate("/");
    }
  }, [totalQuantity, navigate]);

  const handleCheckout = () => {
    setIsCheckoutInProgress(true);

    setTimeout(() => {
      setShowModal(true);

      setTimeout(() => {
        setShowModal(false);
        clearCart();
        navigate("/");
      }, 3000);
    }, 1000);
  };

  return (
    <div className={styles.checkoutContainer}>
      <h2 className={styles.cartHeader}>Your Cart ({totalItems})</h2>{" "}
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
        <CartSummary
          onCheckout={handleCheckout}
          isCheckoutInProgress={isCheckoutInProgress}
        />
        {showModal && <ConfirmationModal />}
      </div>
    </div>
  );
};

export default CheckOutPage;
