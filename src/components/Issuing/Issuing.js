import React from 'react';

import Surrender from '../Surrender/Surrender';
import Purchase from '../Purchase/Purchase';
import './Issuing.scss';

const Issuing = ({
  purchaseProduct, balance, giveSurrender, setPurchaseProduct
}) => (
  <div className="issuing">
    <Surrender
      balance={balance}
    />
    <Purchase
      purchaseProduct={purchaseProduct}
      giveSurrender={giveSurrender}
      setPurchaseProduct={setPurchaseProduct}
    />
  </div>
);

export default Issuing;
