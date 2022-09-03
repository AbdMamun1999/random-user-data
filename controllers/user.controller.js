const fs = require("fs");

/* let allUserJson = () =>
  fs.readFile("./users.json", "utf8", (err, data) => {
    if (err) {
      res.write("failed to read data");
      res.end();
    } else {
      res.write(data);
      res.end();
    }
  }); */

module.exports.getRandomUser = (req, res) => {
  fs.readFile("./users.json", "utf8", (err, data) => {
    if (err) {
      res.write("failed to write");
    } else {
      const allUser = JSON.parse(data);
      // res.write(allUser)
      // res.end()
      const randomUser = allUser[Math.floor(Math.random() * allUser.length)];
      res.send(randomUser);
    }
  });
};

module.exports.getAllUser = (req, res) => {
  fs.readFile("./users.json", "utf8", (err, data) => {
    if (err) {
      res.write("failed to read data");
      res.end();
    } else {
      res.write(data);
      res.end();
    }
  });
};

module.exports.saveAUser = (req, res) => {
  console.log("save a data");
};
