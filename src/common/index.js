

const backendDomain = import.meta.env.VITE_REACT_APP_API;

const SummaryApi = {
  signUP: {
    url: `${backendDomain}/auth/signup`,
    method: "POST",
  },
  signIn: {
    url: `${backendDomain}/auth/login`,
    method: "POST",
  },
  forgotPassword: {
    url: `${backendDomain}/auth/forgot-password`,
    method: "POST",
  },
  resetPassword: {
    url: `${backendDomain}/auth/reset-password`,
    method: "POST",
  },
  Logout : {
	url: `${backendDomain}/auth/logout`,
	method: "GET",
  },
  userDetail : {
	url: `${backendDomain}/auth/user-details`,
    method: "GET",
  }
};

export default SummaryApi;
