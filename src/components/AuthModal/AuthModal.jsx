import { AuthLogin } from "../Auth/AuthLogin";
import { AuthSignup } from "../Auth/AuthSignup";
import "./AuthModal.css";
import { useDispatch, useSelector } from "react-redux";
import {
  SET_TO_LOGIN,
  SET_TO_SIGNUP,
  SHOW_AUTH_MODAL,
} from "../../Slices/auth-slice";

export const AuthModal = () => {
  const { selectedTab } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLoginClick = () => {
    dispatch(SET_TO_LOGIN());
  };

  const handleSignupClick = () => {
    dispatch(SET_TO_SIGNUP());
  };

  const handleModalCloseClick = () => {
    dispatch(SHOW_AUTH_MODAL());
  };

  return (
    <div className="auth-modal-container fixed">
      <div className="auth-modal absolute shadow right-0">
        <div className="d-flex align-center shadow">
          <button
            className={`button btn-auth grow-shrink-basis cursor-pointer ${
              selectedTab === "login" && "btn-auth-selected"
            }`}
            onClick={handleLoginClick}
          >
            Login
          </button>
          <button
            className={`button btn-auth grow-shrink-basis cursor-pointer ${
              selectedTab === "signup" && "btn-auth-selected"
            }`}
            onClick={handleSignupClick}
          >
            Signup
          </button>
          <button
            className="button btn-auth btn-close d-flex align-center justify-center cursor-pointer"
            onClick={handleModalCloseClick}
          >
            <span className="material-icons-outlined">close</span>
          </button>
        </div>
        <div>
          {selectedTab === "login" ? (
            <AuthLogin />
          ) : selectedTab === "signup" ? (
            <AuthSignup />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};
