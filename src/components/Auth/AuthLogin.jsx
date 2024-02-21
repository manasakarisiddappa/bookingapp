import "./Auth.css";
import { validateNumber, validatePassword } from "../../utils";

import { loginHandler } from "../../services";
import { useDispatch, useSelector } from "react-redux";
import { CLEAR_USER_DATA, NUMBER, PASSWORD } from "../../Slices/auth-slice";

let isNumberValid, isPasswordValid;

export const AuthLogin = () => {
  const { number, password } = useSelector((state) => state.auth);
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

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (isPasswordValid && isNumberValid) {
      const { accessToken, username } = loginHandler(number, password);
      // dispatch(SET_ACCESS_TOKEN{
      //   type: "SET_ACCESS_TOKEN",
      // });
      // dispatch(SET_USER_NAME(){
      //   type: "SET_USER_NAME",
      // });
    }
    dispatch(CLEAR_USER_DATA());
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
