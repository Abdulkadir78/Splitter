import { ReactComponent as PersonIcon } from "../assets/images/icon-person.svg";

interface PeopleInputProps {
  numberOfPeople: number;
  handlePeopleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PeopleInput: React.FunctionComponent<PeopleInputProps> = ({
  numberOfPeople,
  handlePeopleChange,
}) => {
  return (
    <div className="mt-7">
      <h5 className="text-darkGrayish font-semibold text-sm">
        Number of People
      </h5>

      <div className="relative">
        <input
          type="number"
          placeholder="0"
          min="1"
          className="mt-1 bg-lightGrayish2 text-right font-bold text-veryDark 
          text-2xl outline-none px-3 py-2 w-full"
          value={numberOfPeople || ""}
          onChange={handlePeopleChange}
        />
        <PersonIcon className="absolute left-3 top-5" />
      </div>
    </div>
  );
};

export default PeopleInput;
