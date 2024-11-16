import { useState } from "react";
import Deposit from "./Deposit";
import Withdraw from "./Withdraw";

const Blockchain = () => {
  const [isDepositEnabled, setDeposit] = useState(true);

  function enableDeposit() {
    setDeposit(true);
  }

  function disableDeposit() {
    setDeposit(false);
  }

  return (
    <div className="container bg-yellow-500 min-h-[500px]">
      <div className="flex justify-end">
        <button>Connect Wallet</button>
      </div>
      <div className="container bg-yellow-500 min-h-[500px] flex items-center justify-center">
        <div className="flex bg-red-500 flex-col min-w-[500px] min-h-[400px] p-10">
          <div>
            <div className="flex flex-row gap-10 items-center justify-center">
              <div className="basis-1/6 bg-red-500 flex bg-yellow-500">
                <button onClick={enableDeposit}>Deposit</button>
              </div>
              <div className="basis-1/6 bg-pink-500">
                <button onClick={disableDeposit}>Withdraw</button>
              </div>
            </div>
            <div className="container bg-teal-500 min-h-[300px] min-w-[400px] flex items-center justify-center">
              {isDepositEnabled ? <Deposit /> : <Withdraw />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blockchain;
