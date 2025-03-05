const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString =
  "mongodb+srv://mfdev98:O9M8VpGPnK7QOuD2@cluster0.qgciezs.mongodb.net/";

mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },

  (err, client) => {
    if (err) console.log("ERROR on connection MongoDB");
    else {
      console.log("MongoDB connection succeed");
      // console.log(client);
      module.exports = client;
      const app = require("./app");
      const server = http.createServer(app);
      // let PORT = 3000;
      let PORT = process.env.PORT || 3000;
      server.listen(PORT, function () {
        console.log(`The server is running successfully on port: ${PORT}`);
      });
    }
  }
);
