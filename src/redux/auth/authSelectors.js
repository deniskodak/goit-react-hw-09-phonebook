const isAuthenticated = state => state.auth.isLogin;
const getUser = state => state.auth.user;

const authSelectors = { isAuthenticated, getUser };

export default authSelectors;
