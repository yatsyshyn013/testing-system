import { useAuth } from "../../hooks/useAuth";
import { UserMenuButton, UserMenuStyled, WelcomeText } from "./UserMenu.styled";
import { useDispatch } from "react-redux";
import { logOutFetch } from "../../redux/auth/authOperations";
import LogoutIcon from "@mui/icons-material/Logout";
// import { toast, ToastContainer } from "react-toastify";

export const UserMenu = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logOutFetch());
  };

  const { user } = useAuth();

  return (
    <UserMenuStyled>
      {user === undefined ? (
        <WelcomeText>Please, verify your email</WelcomeText>
      ) : (
        <WelcomeText>Welcome, {user.email}</WelcomeText>
      )}

      <UserMenuButton variant="contained" onClick={handleClick}>
        <LogoutIcon style={{ width: "20px", marginRight: "5px" }} /> Logout{" "}
      </UserMenuButton>
      {/* <ToastContainer autoClose={3000} position="top-center" theme="colored" /> */}
    </UserMenuStyled>
  );
};
