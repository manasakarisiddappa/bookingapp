import axios from "axios";
import { BASEURL } from "../url";

export const SignupHandler = async (
  username,
  number,
  email,
  password,
  setAlert
) => {
  try {
    const data = await axios.post(BASEURL + "/api/auth/register", {
      username: username,
      number: number,
      email: email,
      password: password,
    });

    setAlert({
      open: true,
      message: `Account Created:: username - ${username}`,
      type: "success",
    });
  } catch (err) {
    console.log("error adding user to database");
  }
};
