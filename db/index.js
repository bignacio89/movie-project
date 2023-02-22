const mongoose = require("mongoose");

const MONGO_URI =
  process.env.MONGODB_URI || "mongodb+srv://alvmorsie:1234567890@cluster0.y79xtzv.mongodb.net/usuarios-cine";

mongoose
  .set('strictQuery', true)
  .connect(MONGO_URI)
  .then((x) => {
    const databaseName = x.connections[0].name;
    console.log(`Connected to Mongo! Database name: "${databaseName}"`);
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });
