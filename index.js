const jwt = require("jsonwebtoken");
let jsonToken = jwt.sign(
  {
    userid: "c0752efd-1429-49d1-98b3-27bf69abbdda",
  },
  "qmcuvCPbkHEOkfaK24zXnihJEN5O61me",
  { expiresIn: "30d" }
);
console.dir(jsonToken);