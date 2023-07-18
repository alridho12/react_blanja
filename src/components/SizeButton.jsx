import React, { useState } from 'react';
import plusIcon from '../assets/image/Ellipse 9.png';
import minusIcon from '../assets/image/Ellipse 9.png';

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
    <div className='row'>
      <button
        style={{ borderStyle: "none", backgroundColor: "white" }}
        onClick={handleDecrease}
      >
        <img src={minusIcon} alt="minus" />
      </button>
      <p>{quantity}</p>
      <button
        style={{ borderStyle: "none", backgroundColor: "white" }}
        onClick={handleIncrease}
      >
        <img src={plusIcon} alt="plus" />
      </button>
    </div>
  );
};

export default SizeButton;