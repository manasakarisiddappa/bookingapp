import "./Auth.css";
import { validateNumber, validatePassword } from "../../utils";

import { LoginHandler } from "../../services";
import { useDispatch, useSelector } from "react-redux";
import {
  CLEAR_USER_DATA,
  NUMBER,
  PASSWORD,
  SET_ACCESS_TOKEN,
  SET_USER_NAME,
  SHOW_AUTH_MODAL,
} from "../../Slices/auth-slice";
import { useAlert } from "../../context/alert-context";

let isNumberValid, isPasswordValid;

export const AuthLogin = () => {
  const { number, password } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { setAlert } = useAlert();

  const handleMobileChange = (event) => {
    isNumberValid = validateNumber(event.target.value);
    if (isNumberValid) {
      dispatch(NUMBER(event.target.value));
    } else {
      console.log("Invalid Number");
    }
  };

  const handlePasswordChange = (event) => {
    isPasswordValid = validatePassword(event.target.value);
    if (isPasswordValid) {
      dispatch(PASSWORD(event.target.value));
    } else {
      console.log("Invalid password");
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    if (isPasswordValid && isNumberValid) {
      const { accessToken, username } = await LoginHandler(
        number,
        password,
        setAlert
      );
      dispatch(SET_ACCESS_TOKEN(accessToken));
      dispatch(SET_USER_NAME(username));
    }
    dispatch(CLEAR_USER_DATA());
    dispatch(SHOW_AUTH_MODAL());
  };

  const handleTestCredentialsClick = async () => {
    const { accessToken, username } = await LoginHandler(
      9898989898,
      "Abcd$1234",
      setAlert
    );

    dispatch(SET_ACCESS_TOKEN(accessToken));
    dispatch(SET_USER_NAME(username));
    dispatch(CLEAR_USER_DATA());
    dispatch(SHOW_AUTH_MODAL());
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleLoginSubmit}>
        <div className="d-flex direction-column lb-in-container">
          <label className="auth-label">
            Mobile Number<span className="asterisk">*</span>{" "}
          </label>
          <input
            defaultValue={number}
            className="auth-input"
            maxLength="10"
            type="number"
            placeholder="Enter Mobile number"
            required
            onChange={handleMobileChange}
          />
        </div>
        <div className="d-flex direction-column lb-in-container">
          <label className="auth-label">
            Password<span className="asterisk">*</span>{" "}
          </label>
          <input
            defaultValue={password}
            className="auth-input"
            placeholder="Enter Password"
            type="password"
            required
            onChange={handlePasswordChange}
          />
        </div>
        <div>
          <button className="button btn-primary btn-login cursor">Login</button>
        </div>
      </form>
      <div className="cta">
        <button
          className="button btn-outline-primary cursor-pointer"
          onClick={handleTestCredentialsClick}
        >
          Login with Test Credentials
        </button>
      </div>
    </div>
  );
};
