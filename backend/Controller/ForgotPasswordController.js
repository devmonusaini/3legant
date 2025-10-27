const User = require("../Models/User");
const nodemailer = require("nodemailer");

const Forgotpassword= async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found", success: false });
    }

    // Generate OTP
    const otp = Math.floor(100000 + Math.random() * 900000); // 6 digit OTP

    // Save OTP and expiry in user model
    user.resetOTP = otp;
    user.resetOTPExpiry = Date.now() + 10 * 60 * 1000; // 10 min expiry
    await user.save();

    res.json({ message: "OTP sent to email", success: true });
    sendOtpMail(email, otp);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", success: false });
  }
};

async function sendOtpMail(email, otp) {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Your OTP Code",
      text: `Your OTP is: ${otp}`,
    });

    console.log("OTP email sent ✅");
  } catch (err) {
    console.error("Email send failed ❌", err);
  }
}

module.exports = Forgotpassword;
