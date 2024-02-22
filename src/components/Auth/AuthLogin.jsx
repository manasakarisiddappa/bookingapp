import "./Auth.css";
import { validateNumber, validatePassword } from "../../utils";

import { loginHandler } from "../../services";
import { useDispatch, useSelector } from "react-redux";
import {
  CLEAR_USER_DATA,
  NUMBER,
  PASSWORD,
  SET_ACCESS_TOKEN,
  SET_USER_NAME,
  SHOW_AUTH_MODAL,
} from "../../Slices/auth-slice";

let isNumberValid, isPasswordValid;

export const AuthLogin = () => {
  const { number, password, isAuthModalOpen } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();

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
  console.log({ isNumberValid, isPasswordValid });

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    if (isPasswordValid && isNumberValid) {
      const { accessToken, username } = await loginHandler(number, password);
      dispatch(SET_ACCESS_TOKEN(accessToken));
      dispatch(SET_USER_NAME(username));

      dispatch(CLEAR_USER_DATA());
      dispatch(SHOW_AUTH_MODAL());

      console.log(
        "inside auth login modal",
        accessToken,
        username,
        isAuthModalOpen
      );
    }
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
        <button className="button btn-outline-primary cursor-pointer">
          Login with Test Credentials
        </button>
      </div>
    </div>
  );
};
