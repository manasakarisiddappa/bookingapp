import axios from "axios";
import { BASEURL } from "../url";

export const signupHandler = async (username, number, email, password) => {
  try {
    const data = await axios.post(BASEURL + "/api/auth/register", {
      username: username,
      number: number,
      email: email,
      password: password,
    });
    console.log(data);
  } catch (err) {
    console.log("error adding user to database");
  }
};
