import React from "react";
import AuthNav from "./AuthNav/AuthNav";
import AuthUser from "./AuthUser/AuthUser";
import authSelectors from "components/redux/auth/authSelectors";
import { useSelector } from "react-redux";
import { StyledHeader } from "./StyledAppBar";
import UserNav from "./UserNav/UserNav";

const AppBar = () => {
  const isUserLoggedIn = useSelector(authSelectors.getIsloggedIn);

  return (
    <StyledHeader isLoggedin={isUserLoggedIn}>
      {isUserLoggedIn ? (
        <>
          <UserNav />
          <AuthUser />
        </>
      ) : (
        <AuthNav />
      )}
    </StyledHeader>
  );
};

export default AppBar;
