import { useEffect } from "react";
import axios from "axios";

export const Categories = () => {
  useEffect(() => {
    (async () => {
      try {
        const data = await axios.get(
          "https://airbnbtravelapp.cyclic.app/api/category"
        );
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return <></>;
};
