const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

// Routes
app.get("/", (req, res) => res.render("auth"));

app.post("/login", (req, res) => {
  console.log("Login attempt:", req.body);
  res.send("✅ Login attempt received");
});

app.post("/register", (req, res) => {
  console.log("Register attempt:", req.body);
  res.send("✅ Register attempt received");
});

app.listen(PORT, () =>
  console.log(`🚀 Server running at http://localhost:${PORT}`)
);
