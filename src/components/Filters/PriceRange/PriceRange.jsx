import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useDispatch, useSelector } from "react-redux";
import { MAXIMUM_PRICE, MINIMUM_PRICE } from "../../../Slices/filter-slice";

const minDifference = 500;

function valuetext(value) {
  return `${value}`;
}

export const PriceRange = () => {
  const { priceRange } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  console.log({ priceRange });

  const handlePriceChange = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }
    if (activeThumb === 0) {
      dispatch(
        MINIMUM_PRICE({
          newValue,
          priceRange,
          minDifference,
        })
      );
    } else {
      dispatch(
        MAXIMUM_PRICE({
          newValue,
          priceRange,
          minDifference,
        })
      );
    }
  };

  return (
    <div className="filter-container">
      <span className="filter-label">Price Range</span>
      <Box>
        <Slider
          sx={{ color: "#ff6525" }}
          getAriaLabel={() => "Temperature range"}
          value={priceRange}
          onChange={handlePriceChange}
          valueLabelDisplay="on"
          getAriaValueText={valuetext}
          min={100}
          max={25000}
          disableSwap
        />
      </Box>
    </div>
  );
};
