import "./Auth.css";
import { SignupHandler } from "../../services";
import {
  validateEmail,
  validateName,
  validateNumber,
  validatePassword,
} from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import {
  CLEAR_USER_DATA,
  CONFIRM_PASSWORD,
  EMAIL,
  NAME,
  NUMBER,
  PASSWORD,
} from "../../Slices/auth-slice";
import { useAlert } from "../../context/alert-context";

let isNumberValid,
  isNameValid,
  isEmailValid,
  isPasswordValid,
  isConfirmPasswordValid;

export const AuthSignup = () => {
  const { username, email, password, number, confirmPassword } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const { setAlert } = useAlert();

  console.log({ username, email, password, number, confirmPassword });
  console.log({
    isNumberValid,
    isNameValid,
    isEmailValid,
    isPasswordValid,
    isConfirmPasswordValid,
  });

  const handleNumberChange = (event) => {
    isNumberValid = validateNumber(event.target.value);
    if (isNumberValid) {
      dispatch(NUMBER(event.target.value));
    } else {
      console.log("Invalid Number");
    }
  };

  const handleNameChange = (event) => {
    isNameValid = validateName(event.target.value);
    if (isNameValid) {
      dispatch(NAME(event.target.value));
    } else {
      console.log("Invalid name");
    }
  };

  const handleEmailChange = (event) => {
    isEmailValid = validateEmail(event.target.value);
    if (isEmailValid) {
      dispatch(EMAIL(event.target.value));
    } else {
      console.log("Invalid email");
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

  const handleConfirmPasswordChange = (event) => {
    isConfirmPasswordValid = validatePassword(event.target.value);
    if (isConfirmPasswordValid) {
      dispatch(CONFIRM_PASSWORD(event.target.value));
    } else {
      console.log("Invalid password");
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (
      isEmailValid &&
      isNameValid &&
      isConfirmPasswordValid &&
      isPasswordValid &&
      isNumberValid
    ) {
      SignupHandler(username, number, email, password, setAlert);
    }
    dispatch(CLEAR_USER_DATA());
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleFormSubmit}>
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
            onChange={handleNumberChange}
          />
        </div>
        <div className="d-flex direction-column lb-in-container">
          <label className="auth-label">
            Name<span className="asterisk">*</span>{" "}
          </label>
          <input
            defaultValue={username}
            className="auth-input"
            placeholder="Enter Name"
            required
            onChange={handleNameChange}
          />
        </div>
        <div className="d-flex direction-column lb-in-container">
          <label className="auth-label">
            Email<span className="asterisk">*</span>{" "}
          </label>
          <input
            defaultValue={email}
            className="auth-input"
            placeholder="Enter Email"
            type="email"
            required
            onChange={handleEmailChange}
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
        <div className="d-flex direction-column lb-in-container">
          <label className="auth-label">
            Confirm Password<span className="asterisk">*</span>{" "}
          </label>
          <input
            defaultValue={confirmPassword}
            className="auth-input"
            placeholder="Enter Password"
            type="password"
            required
            onChange={handleConfirmPasswordChange}
          />
        </div>
        <div>
          <button className="button btn-primary btn-login cursor">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
