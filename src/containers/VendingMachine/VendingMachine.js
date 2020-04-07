import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  quantityChange,
  setDeposit,
  setPurchaseProduct,
  giveSurrender
} from '../../actions/actions';
import ProductStorage from '../../components/ProductStorage/ProductStorage';
import PaymentDevice from '../../components/PaymentDevice/PaymentDevice';
import './VendingMachine.scss';

const VendingMachine = (props) => {
  const {
    products, deposit, purchaseProduct, balance
  } = props;

  return (
    <div className="vending-machine">
      <ProductStorage products={products} />
      <PaymentDevice
        deposit={deposit}
        setDeposit={props.setDeposit}
        quantityChange={props.quantityChange}
        setPurchaseProduct={props.setPurchaseProduct}
        purchaseProduct={purchaseProduct}
        products={products}
        balance={balance}
        giveSurrender={props.giveSurrender}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.changeReducer.products,
  deposit: state.changeReducer.deposit,
  balance: state.changeReducer.balance,
  purchaseProduct: state.changeReducer.purchaseProduct
});

const mapDispatchToProps = (dispatch) => ({
  quantityChange: (products) => dispatch(quantityChange(products)),
  setDeposit: (deposit) => dispatch(setDeposit(deposit)),
  giveSurrender: (deposit) => dispatch(giveSurrender(deposit)),
  setPurchaseProduct: (purchaseProduct) => dispatch(setPurchaseProduct(purchaseProduct))
});

VendingMachine.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  deposit: PropTypes.number.isRequired,
  purchaseProduct: PropTypes.object.isRequired,
  balance: PropTypes.object.isRequired,
  giveSurrender: PropTypes.func.isRequired,
  setDeposit: PropTypes.func.isRequired,
  quantityChange: PropTypes.func.isRequired,
  setPurchaseProduct: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(VendingMachine);
