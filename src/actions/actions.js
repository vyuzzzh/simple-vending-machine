import {
  PRODUCT_CHANGE,
  SET_DEPOSIT,
  SET_PURCHASE_PRODUCT,
  GIVE_SURRENDER
} from './action-types';

export const quantityChange = (products) => ({
  type: PRODUCT_CHANGE,
  products
});

export const setDeposit = (deposit) => ({
  type: SET_DEPOSIT,
  deposit
});

export const setPurchaseProduct = (purchaseProduct) => ({
  type: SET_PURCHASE_PRODUCT,
  purchaseProduct
});

export const giveSurrender = (deposit) => ({
  type: GIVE_SURRENDER,
  deposit
});
