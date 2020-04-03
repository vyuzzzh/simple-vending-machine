import React from 'react';
import { makingPurchase } from '../../utils/Helper';

const ProductPurchase = ({
  products, quantityChange, deposit, setDeposit, setPurchaseProduct, giveSurrender
}) => {
  const pattern = products
    .filter((product) => product.available && product.count)
    .map((product) => product.id).join('|');

  const handleChange = (event) => {
    event.preventDefault();
    const target = event.currentTarget.elements[0];
    const id = target.value;
    const purchase = makingPurchase(products, +id);
    target.value = '';
    target.classList.add('disabled');
    const { price } = purchase.purchaseProduct;
    const { purchaseProduct } = purchase;
    setPurchaseProduct(purchaseProduct);
    quantityChange(purchase.products);

    giveSurrender(deposit - price);
    setDeposit(0);
  };

  return (
    <div className="input-product">
      <form className="form" onSubmit={handleChange}>
        <label htmlFor="product-id" className="cash">
          Enter product id
          <br />
          <input
            autoComplete="off"
            className="product-id"
            name="product-id"
            type="text"
            placeholder="enter id"
            pattern={pattern}
            title="This product is not available. Please choose another one."
          />
        </label>
      </form>
    </div>
  );
};

export default ProductPurchase;
