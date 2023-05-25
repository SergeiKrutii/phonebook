import { Routes, Route } from "react-router-dom";
import Container from "./Container/Container";
import AppBar from "./AppBar/AppBar";
import { useDispatch, useSelector } from "react-redux";
import { Suspense, lazy, useEffect } from "react";
import authOperations from "./redux/auth/authOperations";
import PrivateRoute from "./pages/PrivateRoute/PrivateRoute";
import PublicRoute from "./pages/PublicRoute/PublicRoute";
import authSelectors from "./redux/auth/authSelectors";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));
const SignupPage = lazy(() => import("./pages/SignupPage/SignupPage"));
const SigninPage = lazy(() => import("./pages/SigninPage/SigninPage"));

const theme = createTheme({
  palette: {
    white: {
      main: "#68707b",
      contrastText: "#fff",
    },

    text: {
      secondary: "#ffffffs34",
    },
  },
});

const App = (props) => {
  const isFetchingCurrent = useSelector(authSelectors.isFetchingCurrent);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        {isFetchingCurrent ? (
          <Skeleton count={5} />
        ) : (
          <>
            <AppBar />
            <Suspense>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route element={<PrivateRoute />}>
                  <Route path="contacts" element={<ContactsPage />} />
                </Route>
                <Route element={<PublicRoute />}>
                  <Route path="signin" element={<SigninPage />} />
                </Route>
                <Route element={<PublicRoute />}>
                  <Route path="signup" element={<SignupPage />} />
                </Route>
              </Routes>
            </Suspense>
          </>
        )}
      </Container>
    </ThemeProvider>
  );
};
// tytrewq11@gmail.com
// zaazaa111@gmail.com
export default App;
