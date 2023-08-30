const app = require("./app");

app.listen(8000, function (err) {
  if (err) console.log(err);
  console.log(`listening to port 8000`);
});