import DatePicker from "react-datepicker";
import "./DateSelector.css";
import "react-datepicker/dist/react-datepicker.css";
import { useDate } from "../../context";

export const DateSelector = ({ checkInType }) => {
  const { checkInDate, checkOutDate, dateDispatch } = useDate();

  const handleDateChange = (date) => {
    dateDispatch({
      type: checkInType === "in" ? "CHECK_IN" : "CHECK_OUT",
      payload: date,
    });
  };

  const handleDateFocus = () => {
    dateDispatch({
      type: "DATE_FOCUS",
    });
  };

  return (
    <DatePicker
      selected={checkInType === "in" ? checkInDate : checkOutDate}
      onChange={(date) => handleDateChange(date)}
      onFocus={handleDateFocus}
      className="search-dest input"
      dateFormat="dd/MM/yyyy"
      placeholderText="Add Dates"
      closeOnScroll={true}
    />
  );
};
