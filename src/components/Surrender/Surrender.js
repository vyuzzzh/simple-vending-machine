import React from 'react';

const Surrender = ({
  balance
}) => (
  <div className="surrender">
    <span>{balance[10] ? `10R: ${balance[10]} coins` : ''}</span>
    <span>{balance[5] ? `5R: ${balance[5]} coins` : ''}</span>
    <span>{balance[2] ? `2R: ${balance[2]} coins` : ''}</span>
    <span>{balance[1] ? `1R: ${balance[1]} coins` : ''}</span>
  </div>
);

export default Surrender;
