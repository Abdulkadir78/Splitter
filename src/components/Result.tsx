import { useMemo } from "react";

import Card from "./UI/Card";

interface ResultProps {
  billAmount: number;
  tipPercent: number;
  numberOfPeople: number;
  handleReset: () => void;
}

const Result: React.FunctionComponent<ResultProps> = ({
  billAmount,
  tipPercent,
  numberOfPeople,
  handleReset,
}) => {
  const { finalTipAmountPerPerson, finalTotalPerPerson, isResetDisabled } =
    useMemo(() => {
      const tipAmount = (tipPercent / 100) * billAmount;
      let finalTipAmountPerPerson = tipAmount / numberOfPeople;
      let finalTotalPerPerson = (billAmount + tipAmount) / numberOfPeople;

      finalTipAmountPerPerson = isFinite(finalTipAmountPerPerson)
        ? finalTipAmountPerPerson
        : 0;

      finalTotalPerPerson = isFinite(finalTotalPerPerson)
        ? finalTotalPerPerson
        : 0;

      const isResetDisabled = !billAmount && !tipPercent && !numberOfPeople;

      return { finalTipAmountPerPerson, finalTotalPerPerson, isResetDisabled };
    }, [billAmount, tipPercent, numberOfPeople]);

  return (
    <Card className="bg-veryDark flex flex-col text-white h-[93%] px-5 py-7 mt-7 font-semibold">
      <div className="flex justify-between">
        <div>
          <h5 className="text-sm">Tip Amount</h5>
          <span className="text-xs text-darkGrayish2 ">/ person</span>
        </div>

        <h3 className="text-primary font-bold text-2xl md:text-3xl">
          ${finalTipAmountPerPerson.toFixed(2)}
        </h3>
      </div>

      <div className="flex justify-between mt-5">
        <div>
          <h5 className="text-sm">Total</h5>
          <span className="text-xs text-darkGrayish2 ">/ person</span>
        </div>

        <h3 className="text-primary font-bold text-2xl md:text-3xl">
          ${finalTotalPerPerson.toFixed(2)}
        </h3>
      </div>

      <div className="flex-1" />
      <button
        disabled={isResetDisabled}
        className={`w-full mt-10 rounded-lg font-bold uppercase py-2 ${
          isResetDisabled
            ? "bg-darkGrayish text-veryDark"
            : "bg-primary text-veryDark "
        }`}
        onClick={handleReset}
      >
        Reset
      </button>
    </Card>
  );
};

export default Result;
