import { useSelector } from "react-redux";
import authSelectors from "components/redux/auth/authSelectors";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = (props) => {
  const isLoggedIn = useSelector(authSelectors.getIsloggedIn);

  return <>{isLoggedIn ? <Outlet /> : <Navigate to="/signin" />}</>;
};

export default PrivateRoute;
