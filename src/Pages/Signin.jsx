import React, { useContext, useState } from "react";
import login from "../assets/login.png";
import { TfiClose } from "react-icons/tfi";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { storeContext } from "../context/storeContext";
import SummaryApi from "../common";

const Signin = () => {
  const {fetchUser}=useContext(storeContext)
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const { email, password, remember } = formData;
      if (!remember) {
        return toast.error("You must accept the remember me");
      }
      const response = await fetch(SummaryApi.signIn.url, {
        method: SummaryApi.signIn.method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
        credentials: "include", // <<< important to send cookies
      });
      const dataApi = await response.json();
      if (!response.ok) {
        // Show backend error message
        toast.error(dataApi.message || "Signup failed");
        return;
      }
      if (dataApi.success) {
        toast.success(dataApi.message);
        navigate("/");
        fetchUser();
      } else {
        toast.error(dataApi.message);
      }
    } catch (error) {
      console.error("Error during signin:", error);
      toast.error("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div className="w-screen h-screen fixed top-0 z-50 bg-black/70 flex justify-center items-center py-10 px-4">
      <div className="max-w-[1240px] w-full grid md:grid-cols-2 grid-cols-1 bg-primary rounded-xl overflow-hidden relative top-0">
        <div className="w-full h-full flex justify-center items-center bg-cardbg">
          <img
            className="w-full sm:max-h-[560px] max-h-[300px] object-contain"
            src={login}
            alt="signup"
          />
        </div>

        <div className="w-full flex justify-center items-start flex-col sm:p-20 p-4 gap-3">
          <h3 className="text-xl sm:text-2xl capitalize">Sign In</h3>
          <p className="text-xs text-formText">
            Don't have an account yet?
            <span className="text-brandbg">
              <Link to="/sign-up"> Sign up</Link>
            </span>
          </p>
          <form
            onSubmit={handleSignup}
            className="w-full flex justify-start items-start flex-col gap-3"
          >
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="w-full text-sm py-2 border-b border-formText outline-none"
            />

            <div className="w-full relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                required
                className="w-full text-sm py-2 border-b border-formText outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-2 top-1"
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>

            <div className="w-full flex justify-between items-center">
              <div className="w-full flex justify-start items-center flex-row py-2 gap-2">
                <input
                  type="checkbox"
                  name="remember"
                  checked={formData.remember}
                  onChange={handleChange}
                  className="accent-secondary"
                />
                <p className="text-formText text-xs">Remember Me</p>
              </div>
              <Link
                className="text-sm font-semibold text-nowrap"
                to="/forgot-password"
              >
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full p-2 bg-black rounded-lg font-light text-sm text-primary capitalize mt-4"
            >
              Sign in
            </button>
          </form>
        </div>

        <Link
          to="/"
          className="absolute top-1 right-1 cursor-pointer bg-black text-primary font-semibold rounded-full p-2 text-base"
        >
          <TfiClose />
        </Link>
      </div>
    </div>
  );
};

export default Signin;
