import { useEffect, useState } from "react";
import axios from "axios";
import "./Categories.css";
import { useSelector, useDispatch } from "react-redux";
import { setHotelCategory } from "../../Slices/category-slice";
import { BASEURL } from "../../url";
import { SHOW_FILTER_MODAL } from "../../Slices/filter-slice";

export const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [numberOfCategoryToShow, setNumberOfCategoryToShow] = useState(0);
  const hotelCategory = useSelector((state) => state.category.hotelCategory);

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(BASEURL + "/api/category");
        setCategories(data);
        const categoriesToShow = data.slice(
          numberOfCategoryToShow + 10 > data.length
            ? data.length - 10
            : numberOfCategoryToShow,
          numberOfCategoryToShow + 10 > data.length
            ? data.length
            : numberOfCategoryToShow + 10
        );
        setCategories(categoriesToShow);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [numberOfCategoryToShow]);

  const handleshowMoreRightClick = () => {
    setNumberOfCategoryToShow((num) => num + 10);
  };

  const handleshowMoreLeftClick = () => {
    setNumberOfCategoryToShow((num) => num - 10);
  };

  const handleCategoryClick = (category) => {
    dispatch(setHotelCategory(category));
  };

  const handleFilterClick = () => {
    console.log("filter clicked");
    dispatch(SHOW_FILTER_MODAL());
  };

  console.log(hotelCategory);
  return (
    <section className="d-flex align-center gap-large cursor-pointer categories">
      {numberOfCategoryToShow >= 10 && (
        <button
          onClick={handleshowMoreLeftClick}
          className="button btn-category btn-left fixed cursor-pointer"
        >
          <span class="material-icons-outlined">chevron_left</span>
        </button>
      )}

      {categories &&
        categories.map(({ _id, category }) => (
          <span
            className={`${category === hotelCategory ? "border-bottom" : ""}`}
            key={_id}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </span>
        ))}
      {categories.length > numberOfCategoryToShow - 10 && (
        <button
          className="button btn-category btn-right fixed cursor-pointer"
          onClick={handleshowMoreRightClick}
        >
          <span class="material-icons-outlined">chevron_right</span>
        </button>
      )}
      <button
        className="button btn-filter d-flex align-center gap-small cursor-pointer fixed"
        onClick={handleFilterClick}
      >
        <span className="material-icons-outlined">filter_alt</span>
        <span>Filter</span>
      </button>
    </section>
  );
};
