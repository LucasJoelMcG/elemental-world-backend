const express = require("express");
const app = express();
const routes = require("./routes/routes.js");

//---- Router and trace method disabling -----

app.disable("trace");
app.use(routes);

//----------- Nodemon mode for dev -----------

app.listen(3000, () => {
  console.log(`Server listening on port 3000`);
});