const joi = require("joi");
const jwt = require("jsonwebtoken");

// ✅ Signup Validation
const signupValidation = (req, res, next) => {
  const schema = joi.object({
    name: joi.string().min(3).max(100).required()
      .messages({
        "string.empty": "Name is required",
        "string.min": "Name must be at least 3 characters",
        "string.max": "Name cannot be longer than 100 characters"
      }),
    email: joi.string().email().required()
      .messages({
        "string.empty": "Email is required",
        "string.email": "Invalid email format"
      }),
    password: joi.string().min(8).max(100).required()
      .messages({
        "string.empty": "Password is required",
        "string.min": "Password must be at least 8 characters",
        "string.max": "Password cannot be longer than 100 characters"
      }),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};

// ✅ Login Validation
const loginValidation = (req, res, next) => {
  const schema = joi.object({
    email: joi.string().email().required()
      .messages({
        "string.empty": "Email is required",
        "string.email": "Invalid email format"
      }),
    password: joi.string().min(8).max(100).required()
      .messages({
        "string.empty": "Password is required",
        "string.min": "Password must be at least 8 characters",
        "string.max": "Password cannot be longer than 100 characters"
      }),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};

// ✅ Forgot Password Validation (email only)
const forgotPasswordValidation = (req, res, next) => {
  const schema = joi.object({
    email: joi.string().email().required()
      .messages({
        "string.empty": "Email is required",
        "string.email": "Invalid email format"
      }),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};

// ✅ Reset Password Validation (otp + newPassword)
const resetPasswordValidation = (req, res, next) => {
  const schema = joi.object({
    email: joi.string().email().required()
      .messages({
        "string.empty": "Email is required",
        "string.email": "Invalid email format"
      }),
    otp: joi.number().integer().min(100000).max(999999).required()
      .messages({
        "number.base": "OTP must be a number",
        "number.min": "OTP must be a 6-digit number",
        "number.max": "OTP must be a 6-digit number",
        "any.required": "OTP is required"
      }),
    newPassword: joi.string().min(8).max(100).required()
      .messages({
        "string.empty": "New password is required",
        "string.min": "Password must be at least 8 characters",
        "string.max": "Password cannot be longer than 100 characters"
      }),
    confirmPassword: joi.string().valid(joi.ref("newPassword")).required()
      .messages({
        "any.only": "Passwords do not match",
        "string.empty": "Confirm password is required"
      }),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};
const userDetailsValidation = (req, res, next) => {
  const token = req.cookies?.token; 
  if (!token) {
    return res.status(401).json({ message: "Not authenticated", success: false });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "default secret");
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token", success: false });
  }
};

module.exports = {
  signupValidation,
  loginValidation,
  forgotPasswordValidation,
  resetPasswordValidation,
  userDetailsValidation
};
