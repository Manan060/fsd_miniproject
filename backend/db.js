const mongoose = require("mongoose");

const url =
  "mongodb://20cs060:7s8Q9zyLn6AMWTzl@ac-era3vsz-shard-00-00.oijxmox.mongodb.net:27017,ac-era3vsz-shard-00-01.oijxmox.mongodb.net:27017,ac-era3vsz-shard-00-02.oijxmox.mongodb.net:27017/?ssl=true&replicaSet=atlas-vhds3q-shard-0&authSource=admin&retryWrites=true&w=majority";
module.exports.connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      // useFindAndModify: false,
      useUnifiedTopology: true,
      // useCreateIndex: true,
    })
    .then(() => console.log("MongoDB is connected successfully"))
    .catch((err) => console.log("Error: ", err));
};