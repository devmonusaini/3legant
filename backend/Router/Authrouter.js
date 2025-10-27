const { signup, login } = require('../Controller/AuthController');
const Forgotpassword = require('../Controller/ForgotPasswordController');
const logout = require('../Controller/LogoutController');
const ResetPassword = require('../Controller/ResetPasswordController');
const userDetails = require('../Controller/UserDetails');
const { signupValidation, loginValidation, userDetailsValidation, forgotPasswordValidation, resetPasswordValidation } = require('../Middleware/authMiddleware');

const router = require('express').Router();

// login route


// signup route
router.post('/signup', signupValidation, signup);
router.post('/login', loginValidation, login);
router.get('/user-details',userDetailsValidation , userDetails);
router.get('/logout',logout);
router.post('/forgot-password',forgotPasswordValidation,Forgotpassword);
router.post('/reset-password',ResetPassword);

module.exports = router;
