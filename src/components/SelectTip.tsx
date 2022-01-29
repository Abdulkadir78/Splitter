import { useState } from "react";

interface TipInputProps {
  tipPercent: number;
  handleTipChange: (newTip: number) => void;
}

const tipPercents = [5, 10, 15, 25, 50];

const SelectTip: React.FunctionComponent<TipInputProps> = ({
  tipPercent,
  handleTipChange,
}) => {
  const [isCustomTip, setIsCustomTip] = useState(false);

  const handleTipPercentChange = (newTipPercent: number) => {
    setIsCustomTip(false);
    handleTipChange(newTipPercent);
  };

  const handleCustomTipPercent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsCustomTip(true);
    handleTipChange(Number(e.target.value));
  };

  return (
    <div className="mt-7">
      <h5 className="text-darkGrayish font-semibold text-sm">Select Tip %</h5>

      <div className="mt-3 flex flex-wrap gap-3 justify-between">
        {tipPercents.map((percent, index) => (
          <button
            key={index}
            className={`bg-veryDark text-white flex-[35%] md:flex-[30%]
            py-2 rounded-md text-xl font-semibold ${
              tipPercent === percent && "bg-primary text-black"
            }`}
            onClick={() => handleTipPercentChange(percent)}
          >
            {percent}%
          </button>
        ))}

        <input
          type="number"
          placeholder="Custom"
          min="0"
          className="bg-lightGrayish2 px-2 text-right flex-[35%] md:flex-[30%]
          py-2 rounded-md text-xl font-semibold text-veryDark outline-none w-full"
          value={isCustomTip && tipPercent !== 0 ? tipPercent : ""}
          onChange={handleCustomTipPercent}
        />
      </div>
    </div>
  );
};

export default SelectTip;
