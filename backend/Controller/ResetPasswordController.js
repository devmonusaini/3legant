const bcrypt = require("bcrypt");
const User = require("../Models/User");

const ResetPassword = async (req, res) => {
  const { email, otp, newPassword } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found", success: false });
    }

    // Check OTP & expiry
    if (Number(user.resetOTP) !== Number(otp) || Date.now() > user.resetOTPExpiry) {
      return res.status(400).json({ message: "Invalid or expired OTP", success: false });
    }

    // Hash new password before saving
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    user.password = hashedPassword;
    user.resetOTP = null;
    user.resetOTPExpiry = null;
    await user.save();

    res.json({ message: "Password reset successfully", success: true });
  } catch (error) {
    console.error("ResetPassword error:", error);
    res.status(500).json({ message: "Server error", success: false });
  }
};

module.exports = ResetPassword;
