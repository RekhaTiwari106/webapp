const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <h1>Deployment Successful 🎉</h1>
    <p>My Node.js app is running on Azure Web App</p>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});