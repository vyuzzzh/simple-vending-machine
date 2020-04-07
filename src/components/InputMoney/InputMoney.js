import React, { forwardRef } from 'react';

const InputMoney = forwardRef(({
  handleChange
}, ref) => (
  <div className="money">
    <form onSubmit={handleChange} className="form">
      <label htmlFor="input-money" className="deposit">
        Insert money
        <br />
        <input
          ref={ref}
          autoComplete="off"
          className="input-money"
          name="input-money"
          type="text"
          placeholder="take your money"
          pattern="50|100|200|500|1000"
          title="Available banknotes: 50, 100, 200, 500, or 1000 R."
          required
        />
      </label>
      <span>
        Available banknotes:
        <br />
        50, 100, 200, 500 or 1000 R.
        <br />
        The machine gives change
        <br />
        in 1, 2, 5 and 10 R coins.
      </span>
    </form>
  </div>
));

export default InputMoney;
