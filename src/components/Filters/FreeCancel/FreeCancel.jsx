import "./FreeCancel.css";
import { useDispatch, useSelector } from "react-redux";
import { CANCELABLE } from "../../../Slices/filter-slice";

export const FreeCancel = () => {
  const { isCancelable } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const handleCancelChange = (event) => {
    dispatch(CANCELABLE(event.target.checked));
  };

  return (
    <div className="filter-container">
      <div className="d-flex align-center gap-larger">
        <span className="filter-label">Free Cancelation</span>
        <label className="slide">
          <input
            type="checkbox"
            onChange={handleCancelChange}
            value={isCancelable}
            checked={isCancelable}
          />
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  );
};
