const UserModel = require("../Models/User");

const userDetails = async (req, res) => {
  try {
    const user = await UserModel.findById(req.user.id).select("-password"); // exclude password
    if (!user) {
      return res.status(404).json({ message: "User not found", success: false });
    }
    res.json({ success: true, user });
  } catch (error) {
    res.status(500).json({ success: false, error: "Server error" });
  }
};

module.exports = userDetails;
