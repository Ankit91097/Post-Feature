require('dotenv').config()
const app = require("./src/app");
const connectDb = require("./src/db/Db");

connectDb();
app.listen(process.env.PORT, () => {
  console.log("server running on port 3000");
});
