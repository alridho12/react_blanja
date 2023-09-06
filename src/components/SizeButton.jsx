import React, { useState } from 'react';


const SizeButton = () => {
  const [quantity, setQuantity] = useState(42);

  const handleIncrease = () => {
    if (quantity < 44) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrease = () => {
    if (quantity > 30) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="color-groups row">
      <div
        className="color color-white text-center"
        style={{
          fontSize: 20,
          width: "36px",
          height: "36px",
          borderRadius: "50%",
          backgroundColor: "#D4D4D4",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={handleDecrease}
      >
        -
      </div>

      <input
        type="text"
        className="color color text-center"
        style={{
          borderColor: "transparent",
          width: "70px",
        }}
        placeholder="42"
        name="quantity"
        onChange={handleDecrease}
      />

      <div
        className="color color-white text-center"
        style={{
          fontSize: 20,
          width: "36px",
          height: "36px",
          borderRadius: "50%",
          backgroundColor: "white",
          boxShadow: "0px 0px 4px rgba(142, 142, 142, 0.25)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "black",
        }}
        onClick={handleIncrease}
      >
        +
      </div>
    </div>
  );
};

export default SizeButton;