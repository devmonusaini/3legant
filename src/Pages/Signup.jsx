import React, { useState } from "react";
import login from "../assets/login.png";
import { TfiClose } from "react-icons/tfi";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import SummaryApi from "../common";
import { toast } from "react-toastify";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    policy: false,
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
      const { name, email, password, confirmPassword, policy } = formData;
      if (!policy) {
        toast.error("You must agree to the Privacy Policy and Terms");
        return;
      }
      if (password === confirmPassword) {
        const response = await fetch(SummaryApi.signUP.url, {
          method: SummaryApi.signUP.method,
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, password }),
        });

        const dataApi = await response.json();
        if (!response.ok) {
          // Show backend error message
          toast.error(dataApi.message || "Signup failed");
          return;
        }
        console.log("Response from server:", dataApi); // For debugging
        if (dataApi.success) {
          toast.success(dataApi.message);
          navigate("/sign-in");
        } else if (dataApi.error) {
          toast.error(dataApi.message);
        }
      } else {
        toast.error("Passwords do not match");
        console.log(
          "Passwords do not match. Please check password and confirm password."
        );
      }
    } catch (error) {
      // Handle errors from the fetch request or JSON parsing
      console.error("Error during signup:", error);
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
          <h3 className="text-xl sm:text-2xl capitalize">Sign up</h3>
          <p className="text-xs text-formText">
            Already have an account?
            <span className="text-brandbg">
              <Link to="/sign-in"> Sign in</Link>
            </span>
          </p>
          <form
            onSubmit={handleSignup}
            className="w-full flex justify-start items-start flex-col gap-3"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full text-sm py-2 border-b border-formText outline-none"
            />

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

            <div className="w-full relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                required
                className="w-full text-sm py-2 border-b border-formText outline-none"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
                className="absolute right-2 top-1"
              >
                {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>

            <div className="w-full flex justify-start items-center flex-row py-2 gap-2">
              <input
                type="checkbox"
                name="policy"
                checked={formData.policy}
                onChange={handleChange}
                required
                className="accent-secondary"
              />
              <p className="text-formText text-xs">
                I agree with{" "}
                <span className="text-secondary">Privacy Policy</span> and{" "}
                <span className="text-secondary">Terms of Use</span>
              </p>
            </div>

            <button
              type="submit"
              className="w-full p-2 bg-black rounded-lg font-light text-sm text-primary capitalize mt-4"
            >
              Sign up
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

export default Signup;
