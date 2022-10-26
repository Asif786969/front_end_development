import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";

export default function Shop() {
  const dispatch = useDispatch();

  const handleDeposit = () => {
    actions.depositMoney(100);
  };

  const handleWithdraw = () => {
    actions.withdrawMoney(100);
  };
  const actions = bindActionCreators(actionCreators, dispatch);
  return (
    <>
      <div className="mt-3">
        <h2>Withdraw/Deposit Money</h2>
        <button className="btn btn-danger" onClick={handleWithdraw}>
          -
        </button>
        <span className="mx-3">Update Balance</span>
        <button className="btn btn-success" onClick={handleDeposit}>
          +
        </button>
      </div>
    </>
  );
}
