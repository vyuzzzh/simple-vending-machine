import React, { useRef } from 'react';

import InputMoney from '../InputMoney/InputMoney';
import ProductPurchase from '../ProductPurchase/ProductPurchase';
import Issuing from '../Issuing/Issuing';
import { makingPurchase } from '../../utils/Helper';
import './PaymentDevice.scss';

const PaymentDevice = ({
  deposit,
  setDeposit,
  products,
  quantityChange,
  setPurchaseProduct,
  purchaseProduct,
  balance,
  giveSurrender
}) => {
  const inputMoney = useRef(null);
  const inputProduct = useRef(null);

  const handleChangeMoney = (event) => {
    event.preventDefault();
    const { current, current: { value } } = inputMoney;
    setDeposit(+value);
    current.classList.add('disabled');
    current.value = '';
    inputProduct.current.focus();
  };

  const handleChangeProduct = (event) => {
    event.preventDefault();
    const {
      current,
      current: { value: id }
    } = inputProduct;
    const purchase = makingPurchase(products, +id);
    const {
      purchaseProduct: purchaseGoods,
      purchaseProduct: { price },
      products: modifiedProducts
    } = purchase;
    current.value = '';
    current.classList.add('disabled');
    current.blur();
    setPurchaseProduct(purchaseGoods);
    quantityChange(modifiedProducts);
    giveSurrender(deposit - price);
    setDeposit(0);
  };

  return (
    <div className="payment-device">
      <span className="deposit-view">
        Your deposit:
        {` ${deposit} `}
        R.
      </span>
      <InputMoney
        ref={inputMoney}
        handleChange={handleChangeMoney}
      />
      <ProductPurchase
        ref={inputProduct}
        products={products}
        handleChange={handleChangeProduct}
      />
      <Issuing
        purchaseProduct={purchaseProduct}
        balance={balance}
        giveSurrender={giveSurrender}
        setPurchaseProduct={setPurchaseProduct}
      />
    </div>
  );
};

export default PaymentDevice;
