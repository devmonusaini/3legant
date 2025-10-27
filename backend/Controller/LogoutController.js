
// Logout route
const logout= async (req, res) => {
  try {
    res.clearCookie("token"); // replace "token" with your cookie name
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.error("Logout error:", error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = logout;
