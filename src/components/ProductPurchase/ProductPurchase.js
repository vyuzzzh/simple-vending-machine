import React, { forwardRef } from 'react';

const ProductPurchase = forwardRef(({
  products, handleChange
}, ref) => {
  const pattern = products
    .filter((product) => product.available && product.count)
    .map((product) => product.id).join('|');

  return (
    <div className="input-product">
      <form className="form" onSubmit={handleChange}>
        <label htmlFor="product-id" className="cash">
          Enter product id
          <br />
          <input
            ref={ref}
            autoComplete="off"
            className="product-id"
            name="product-id"
            type="text"
            placeholder="enter id"
            pattern={pattern}
            title="This product is not available. Please choose another one."
            required
          />
        </label>
      </form>
    </div>
  );
});

export default ProductPurchase;
