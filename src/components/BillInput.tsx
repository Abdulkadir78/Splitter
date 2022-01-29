import { ReactComponent as DollarIcon } from "../assets/images/icon-dollar.svg";

interface BillInputProps {
  billAmount: number;
  handleBillAmountChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const BillInput: React.FunctionComponent<BillInputProps> = ({
  billAmount,
  handleBillAmountChange,
}) => {
  return (
    <>
      <h5 className="text-darkGrayish font-semibold text-sm">Bill</h5>
      <div className="relative">
        <input
          type="number"
          placeholder="0"
          min="1"
          className="mt-1 bg-lightGrayish2 text-right font-bold text-veryDark 
          text-2xl outline-none px-3 py-2 w-full"
          value={billAmount || ""}
          onChange={handleBillAmountChange}
        />
        <DollarIcon className="absolute left-3 top-5" />
      </div>
    </>
  );
};

export default BillInput;
