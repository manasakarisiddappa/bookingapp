import { useEffect, useState } from "react";
import axios from "axios";
import { useCategory } from "../../context";
import "./Categories.css";

export const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [numberOfCategoryToShow, setNumberOfCategoryToShow] = useState(0);
  const { hotelCategory, setHotelCategory } = useCategory();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://airbnbtravelapp.cyclic.app/api/category"
        );
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
    setHotelCategory(category);
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
    </section>
  );
};
