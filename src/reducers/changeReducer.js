import {
  PRODUCT_CHANGE, SET_DEPOSIT, SET_PURCHASE_PRODUCT, GIVE_SURRENDER
} from '../actions/action-types';
import { getAvailableProduct, giveSurrender } from '../utils/Helper';

const initialState = {
  products: [
    {
      name: 'Banana',
      brand: 'Ecuador',
      price: 150,
      count: 2,
      id: 1,
      available: false
    },
    {
      name: 'Energy bars',
      brand: 'Sport',
      price: 782,
      count: 5,
      id: 2,
      available: false
    },
    {
      name: 'Сhocolate',
      brand: 'Snickers',
      price: 46,
      count: 10,
      id: 3,
      available: false
    },
    {
      name: 'Soda',
      brand: 'Coca-cola',
      price: 85,
      count: 6,
      id: 4,
      available: false
    },
    {
      name: 'Chips',
      brand: 'Lays',
      price: 54,
      count: 7,
      id: 5,
      available: false
    },
    {
      name: 'Сhocolate',
      brand: 'Nesquik',
      price: 92,
      count: 10,
      id: 6,
      available: false
    },
    {
      name: 'Coffee',
      brand: 'Starbuks',
      price: 177,
      count: 50,
      id: 7,
      available: false
    }
  ],
  deposit: 0,
  purchaseProduct: {},
  balance: {}
};

export default (state = initialState, action) => {
  const {
    products, deposit, purchaseProduct
  } = action;

  switch (action.type) {
    case PRODUCT_CHANGE:
      return {
        ...state,
        products
      };
    case SET_DEPOSIT:
      return {
        ...state,
        products: getAvailableProduct(state.products, deposit),
        deposit
      };
    case SET_PURCHASE_PRODUCT:
      return {
        ...state,
        purchaseProduct
      };
    case GIVE_SURRENDER:
      return {
        ...state,
        balance: deposit ? giveSurrender(deposit) : {}
      };
    default:
      return state;
  }
};
