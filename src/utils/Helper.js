export const makingPurchase = (products, id) => {
  const purchase = {
    products: []
  };
  purchase.products = products.map((product) => {
    if (product.id === id) {
      product.count -= 1;
      purchase.purchaseProduct = product;
    }
    return product;
  });
  return purchase;
};

export const getAvailableProduct = (products = [], deposit) => products.map((product) => {
  if (product.price <= deposit) {
    product.available = true;
  } else {
    product.available = false;
  }
  return product;
});

export const giveSurrender = (deposit) => {
  if (deposit) {
    const balance = {
      1: 0,
      2: 0,
      5: 0,
      10: 0
    };
    const valArr = [10, 5, 2, 1];
    valArr.forEach((val) => {
      while (deposit >= val) {
        deposit -= val;
        balance[val] += 1;
      }
    });
    return balance;
  }
};
