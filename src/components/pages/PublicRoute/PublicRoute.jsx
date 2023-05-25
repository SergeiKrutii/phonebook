import { useSelector } from "react-redux";
import authSelectors from "components/redux/auth/authSelectors";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = (props) => {
  const isLoggedIn = useSelector(authSelectors.getIsloggedIn);

  return <>{isLoggedIn ? <Navigate to="/contacts" /> : <Outlet />}</>;
};

export default PublicRoute;
