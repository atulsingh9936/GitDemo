const jwt = require("jsonwebtoken");

// Your secret key (keep this safe and secret)
const secretKey = "ymcchCPbkHEOkfaK23zXnihJEN5O61me";

// Payload: The data you want to store in the token
const payload = {
  userId: "d6be0666-8a20-46dd-9440-8040f888aaf8",
  coin: "ETH",
  amount: 1,
  rewardId: "1002",
};

// Options (optional, but commonly used)
const options = {
  expiresIn: "1h",
};

// Generate the token
const token = jwt.sign(payload, secretKey, options);

console.log("Generated JWT:", token);