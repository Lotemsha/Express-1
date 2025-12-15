const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.use((req, res, next) => {
  console.log("Hello1");
  next();
});

app.use((req, res, next) => {
  console.log("Hello2");
  next();
});

app.get("/users", (req, res) => {
  res.send(`
    <html>
      <body>
        <h1>Users</h1>
      </body>
    </html>`);
});

app.get("/home", (req, res) => {
  res.send(
    `<html>
      <body>
        <h1>Home</h1>
      </body>
    </html>`
  );
});

// Start the server
app.listen(port, () => {
  console.log(`The application is running on port ${port}`);
});
