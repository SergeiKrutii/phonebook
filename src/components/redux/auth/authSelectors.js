const getIsloggedIn = (state) => state.auth.isLoggedIn;

const getUserName = (state) => state.auth.user?.name;

const isFetchingCurrent = (state) => state.auth.isFetchCurrentUser;

const getError = (state) => state.auth.error;

const authSelectors = {
  getIsloggedIn,
  getUserName,
  isFetchingCurrent,
  getError,
};

export default authSelectors;
