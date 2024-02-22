import axios from "axios";
import { BASEURL } from "../url";

export const loginHandler = async (number, password) => {
  try {
    const {
      data: { accessToken, username },
    } = await axios.post(BASEURL + "/api/auth/login", {
      number: number,
      password: password,
    });
    console.log({ accessToken, username });

    return { accessToken, username };
  } catch (err) {
    console.log("unable to login");
  }
};
