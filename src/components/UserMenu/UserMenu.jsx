// import { useAuth } from "../../hooks/useAuth";
import { UserMenuButton, UserMenuStyled, WelcomeText } from "./UserMenu.styled";
import { useDispatch } from "react-redux";
import { logOutFetch } from "../../redux/auth/authOperations";
import LogoutIcon from "@mui/icons-material/Logout";

export const UserMenu = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logOutFetch());
  };

  // const { user } = useAuth();
  return (
    <UserMenuStyled>
      <WelcomeText>Welcome, User</WelcomeText>
      <UserMenuButton variant="contained" onClick={handleClick}>
        <LogoutIcon style={{ width: "20px", marginRight: "5px" }} /> Logout{" "}
      </UserMenuButton>
    </UserMenuStyled>
  );
};
