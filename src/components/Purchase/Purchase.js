/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import './Purchase.scss';

const Purchase = ({
  purchaseProduct, giveSurrender, setPurchaseProduct
}) => {
  const handleClick = () => {
    giveSurrender();
    setPurchaseProduct({});
    const inputMoney = document.querySelector('.input-money');
    const inputProduct = document.querySelector('.product-id');
    inputMoney.classList.remove('disabled');
    inputProduct.classList.remove('disabled');
  };

  return (
    <div className="purchase">
      <div
        className={`${purchaseProduct.brand ? 'purchase-product' : ''}`}
        onClick={() => handleClick()}
        role="button"
        tabIndex="0"
      >
        <span>{purchaseProduct.brand}</span>
        <span>{purchaseProduct.name}</span>
      </div>
    </div>
  );
};

export default Purchase;
