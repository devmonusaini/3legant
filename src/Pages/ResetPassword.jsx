import React, { useState } from "react";
import login from "../assets/login.png";
import { TfiClose } from "react-icons/tfi";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FiEye, FiEyeOff } from "react-icons/fi";
import SummaryApi from "../common";

const ResetPassword = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);  
  const [formData, setFormData] = useState({
    email: "",
    otp: "",
    newPassword: "",
    confirmPassword: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const HandleForgotpassword = async (e) => {
    e.preventDefault();
    const { email ,otp , newPassword,confirmPassword} = formData;

    if (!email) {
      return toast.error("Please enter your email");
    }
    if (newPassword !== confirmPassword){
      return toast.error("Your new password and confirm password are not match");
    }

    try {
      const response = await fetch(
        SummaryApi.resetPassword.url,
        {
          method: SummaryApi.resetPassword.method,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email , otp , newPassword }), // ✅ only send email
          credentials: "include",
        }
      );

      const data = await response.json(); // ✅ parse JSON

      if (response.ok && data.success) {
        toast.success("reset password successfully");
        navigate("/sign-in");
      } else {
        toast.error(data.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Reset Password Error:", error);
      toast.error("Server error");
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
          <h3 className="text-xl sm:text-2xl capitalize">Forgot Password</h3>
          <p className="text-xs text-formText">
            Remembered your password?
            <span className="text-brandbg">
              <Link to="/sign-in"> Sign in</Link>
            </span>
          </p>
          <form
            onSubmit={HandleForgotpassword}
            className="w-full flex justify-start items-start flex-col gap-3"
          >
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
              value={formData.email}
              className="w-full text-sm py-2 border-b border-formText outline-none"
            />
            <input
              type="number"
              name="otp"
              placeholder=" enter otp"
              onChange={handleChange}
              value={formData.otp}
              className="w-full text-sm py-2 border-b border-formText outline-none"
            />
            <div className="w-full relative">
              <input
                type={showPassword ? "text" : "password"}
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                placeholder="New Password"
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

            <button
              type="submit"
              className="w-full p-2 bg-black rounded-lg font-light text-sm text-primary capitalize mt-4"
            >
              Reset Password
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

export default ResetPassword;
