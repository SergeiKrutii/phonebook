const getIsloggedIn = (state) => state.auth.isLoggedIn;

const getUserName = (state) => state.auth.user.name;

const isFetchingCurrent = (state) => state.auth.isFetchCurrentUser;

const authSelectors = {
  getIsloggedIn,
  getUserName,
  isFetchingCurrent,
};

export default authSelectors;
