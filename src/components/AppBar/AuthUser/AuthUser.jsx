import { useDispatch, useSelector } from "react-redux";
import authSelectors from "components/redux/auth/authSelectors";
import authOperations from "components/redux/auth/authOperations";
import { StyledAuthUser } from "./StyledAuthUser";
import { Avatar } from "@mui/material";

function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function stringAvatar(name) {
  const firstLetter = name[0]?.toUpperCase();
  const lastLetter = name.charAt(name.length - 1).toUpperCase();

  return {
    sx: {
      bgcolor: getRandomColor(),
    },
    children: `${firstLetter}${lastLetter}`,
  };
}

const AuthUser = () => {
  const userName = useSelector(authSelectors.getUserName);

  const dispatch = useDispatch();

  return (
    <>
      <StyledAuthUser>
        <Avatar {...stringAvatar(userName)} />

        <button
          className="btngrad"
          type="button"
          onClick={() => dispatch(authOperations.logOut())}
        >
          Log out
        </button>
      </StyledAuthUser>
    </>
  );
};

export default AuthUser;
