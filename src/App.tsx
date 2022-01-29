import { useState } from "react";

import Card from "./components/UI/Card";
import Header from "./components/Header";
import Result from "./components/Result";
import BillInput from "./components/BillInput";
import SelectTip from "./components/SelectTip";
import PeopleInput from "./components/PeopleInput";

function App() {
  const [billAmount, setBillAmount] = useState(0);
  const [tipPercent, setTipPercent] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState(0);

  const handleBillAmountChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setBillAmount(Number(e.target.value));
  };

  const handleTipChange = (newTipPercent: number) => {
    setTipPercent(newTipPercent);
  };

  const handlePeopleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setNumberOfPeople(Number(e.target.value));
  };

  const handleReset = () => {
    setBillAmount(0);
    setTipPercent(0);
    setNumberOfPeople(0);
  };

  return (
    <div className="min-h-screen bg-lightGrayish md:pb-20">
      <div className="container pt-[15%] md:pt-[5%]">
        <Header />
      </div>

      <div className="flex justify-center">
        <Card className="bg-white mt-16 p-6 w-full lg:w-[70%] xl:w-[50%] rounded-t-2xl rounded-b-none md:rounded-b-2xl">
          <div className="md:flex gap-10">
            <div className="flex-1">
              <BillInput
                billAmount={billAmount}
                handleBillAmountChange={handleBillAmountChange}
              />
              <SelectTip
                tipPercent={tipPercent}
                handleTipChange={handleTipChange}
              />
              <PeopleInput
                numberOfPeople={numberOfPeople}
                handlePeopleChange={handlePeopleChange}
              />
            </div>
            <div className="flex-1">
              <Result
                billAmount={billAmount}
                tipPercent={tipPercent}
                numberOfPeople={numberOfPeople}
                handleReset={handleReset}
              />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default App;
