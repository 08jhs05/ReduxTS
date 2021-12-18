import React, { useState } from 'react';
import { store } from './state';
import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "./state";

function App() {
  
  const dispatch = useDispatch();
  
  const { depositMoney, withdrawMoney, bankrupt } = bindActionCreators(actionCreators, dispatch);
  const money = useSelector((state: State) => state.bank)

  return (
    <div className="App">
      <div className='moneyCounter'>
        <h1 className='money'>{money}</h1>
        <div className='buttons'>
          <button onClick={() => depositMoney(1000)}>Deposit</button>
          <button onClick={() => withdrawMoney(500)}>Withdrawal</button>
          <button onClick={bankrupt}>Bankrupt</button>
        </div>
      </div>
    </div>
  );
}

export default App;