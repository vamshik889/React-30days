import React, { useState } from "react";

import styles from "./BankAccount.module.css";
import { useAccountContext } from "./AccountContext";
const BankAccount = () => {
  const [input, setInput] = useState({
    withdraw: null,
    deposit: null,
  });

  const { state, dispatch } = useAccountContext();
  const handleChange = (e) => {
    const { name, value } = e.target;

    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleWithdraw = (e) => {
    e.preventDefault();
    dispatch({ type: "withdraw", payload: input.withdraw });
    setInput((prev)=>({...prev,withdraw:""}))
  };
  const handleDeposit = (e) => {
    e.preventDefault();
    dispatch({ type: "deposit", payload: input.deposit });
    setInput((prev)=>({...prev,deposit:""}))

  };
  return (
    <form className={styles.form}>
      <h1>Savings Account</h1>
      <h4>Available Balance: $ {state.balance.toFixed(2)}</h4>
      <div className={styles.inputGroup}>
        <label htmlFor="withdraw">Enter amount to Withdraw:</label>
        <input
          type="text"
          id="withdraw"
          name="withdraw"
          onChange={handleChange}
          value={input.withdraw}
        />
        <button className={styles.btn} onClick={handleWithdraw}
        disabled={!input.withdraw || input.withdraw>state.balance || isNaN(input.withdraw)}
        >
          Withdraw
        </button>
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="deposit">Enter amount to deposit:</label>
        <input
          type="text"
          id="deposit"
          name="deposit"
          onChange={handleChange}
          value={input.deposit}
        />
        <button className={styles.btn} onClick={handleDeposit}
                disabled={!input.deposit || isNaN(input.deposit)}

        >
          Deposit
        </button>
      </div>
    </form>
  );
};

export default BankAccount;
