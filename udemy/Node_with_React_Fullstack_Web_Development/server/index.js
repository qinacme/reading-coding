const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
// We just want to run passport file. So only require it.
require("./services/passport");

mongoose.connect(keys.mongoURI);

const app = express();

require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
