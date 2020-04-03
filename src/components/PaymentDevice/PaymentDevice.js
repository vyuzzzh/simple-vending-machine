import React from 'react';
import InputMoney from '../InputMoney/InputMoney';
import ProductPurchase from '../ProductPurchase/ProductPurchase';
import Issuing from '../Issuing/Issuing';
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
}) => (
  <div className="payment-device">
    <span className="deposit-view">
      Your deposit:
      {` ${deposit} `}
      R.
    </span>
    <InputMoney
      deposit={deposit}
      setDeposit={setDeposit}
      quantityChange={quantityChange}
    />
    <ProductPurchase
      products={products}
      quantityChange={quantityChange}
      deposit={deposit}
      setDeposit={setDeposit}
      setPurchaseProduct={setPurchaseProduct}
      giveSurrender={giveSurrender}
    />
    <Issuing
      purchaseProduct={purchaseProduct}
      balance={balance}
      giveSurrender={giveSurrender}
      setPurchaseProduct={setPurchaseProduct}
    />
  </div>
);

export default PaymentDevice;
