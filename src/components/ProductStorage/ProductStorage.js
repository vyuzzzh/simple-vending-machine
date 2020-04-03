import React from 'react';

const ProductStorage = ({ products }) => (
  <div className="product-storage">
    {
        products.map((product) => (
          <div
            className={`product ${(product.available && product.count) ? 'available' : ''}`}
            key={product.name + product.brand}
          >
            <span className="brand">{product.brand}</span>
            <span>{product.name}</span>
            <span className="price">
              Price:
              {product.price}
              {' '}
              R.
            </span>
            <span>{product.count ? `Residue: ${product.count}` : 'The goods are over.'}</span>
            <span className="id">
              Id:
              {product.id}
            </span>
          </div>
        ))
      }
  </div>
);

export default ProductStorage;
