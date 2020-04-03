import React from 'react';

const InputMoney = ({
  setDeposit
}) => {
  const handleChange = (event) => {
    event.preventDefault();
    const target = event.currentTarget.elements[0];
    const nextInput = document.querySelector('.product-id');
    const deposit = target.value;
    setDeposit(+deposit);
    target.classList.add('disabled');
    target.value = '';
    nextInput.focus();
  };

  return (
    <div className="money">
      <form onSubmit={handleChange} className="form">
        <label htmlFor="input-money" className="deposit">
          Insert money
          <br />
          <input
            autoComplete="off"
            className="input-money"
            name="input-money"
            type="text"
            placeholder="take your money"
            pattern="50|100|200|500|1000"
            title="Available banknotes: 50, 100, 200, 500, or 1000 R."
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
  );
};

export default InputMoney;
