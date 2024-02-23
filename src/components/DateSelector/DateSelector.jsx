import DatePicker from "react-datepicker";
import "./DateSelector.css";
import "react-datepicker/dist/react-datepicker.css";
import { DATE_FOCUS, CHECK_IN, CHECK_OUT } from "../../Slices/date-slice";
import { useSelector, useDispatch } from "react-redux";

export const DateSelector = ({ checkInType }) => {
  const { checkInDate, checkOutDate } = useSelector((state) => state.date);
  const dispatch = useDispatch();

  const handleDateChange = (date) => {
    const type = checkInType === "in" ? CHECK_IN : CHECK_OUT;
    dispatch(type(date));
  };

  const handleDateFocus = () => {
    dispatch(DATE_FOCUS());
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
