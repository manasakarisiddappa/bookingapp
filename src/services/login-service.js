import axios from "axios";
import { BASEURL } from "../url";

export const LoginHandler = async (number, password, setAlert) => {
  try {
    const {
      data: { accessToken, username },
    } = await axios.post(BASEURL + "/api/auth/login", {
      number: number,
      password: password,
    });

    localStorage.setItem("token", accessToken);
    localStorage.setItem("username", username);
    setAlert({
      open: true,
      message: "Login Successful!",
      type: "success",
    });

    return { accessToken, username };
  } catch (err) {
    console.log("unable to login");
  }
};
