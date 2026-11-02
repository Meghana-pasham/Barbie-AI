const saveProfile = (req, res) => {
  const profile = req.body;

  console.log("🎀 Profile received:", profile);

  res.json({
    success: true,
    message: "Profile saved successfully 🎀",
    profile,
  });
};

const getProfile = (req, res) => {
  res.json({
    success: true,
    message: "Profile API is working 🎀",
  });
};

module.exports = {
  saveProfile,
  getProfile,
};