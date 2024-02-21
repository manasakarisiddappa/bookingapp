import axios from "axios";
import { BASEURL } from "../url";

export const loginHandler = async (number, password) => {
  try {
    const { data } = await axios.post(BASEURL + "/api/auth/login", {
      number: number,
      password: password,
    });
    const accessToken = data.accessToken;
    const username = data.username;
    console.log(accessToken, username);
    return { accessToken, username };
  } catch (err) {
    console.log("unable to login");
  }
};
