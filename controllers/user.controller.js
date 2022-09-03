const fs = require("fs");

module.exports.getRandomUser = (req, res) => {
  fs.readFile("./users.json", "utf8", (err, data) => {
    if (err) {
      res.write("failed to write");
    } else {
      const allUser = JSON.parse(data);
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
  const newData = req.body;
  const allUserJson = fs.readFileSync("users.json");
  let allUsers = JSON.parse(allUserJson);
  allUsers.push(newData);

  const allUsersStringfy = JSON.stringify(allUsers);
  fs.writeFile("users.json", allUsersStringfy, (err) => {
    if (err) {
      res.write("Data failed to save");
      res.end();
    } else {
      res.write("save successfully");
      res.end();
    }
  });
};

/* module.exports.updateAUser = (req,res)=>{
   const newData = req.body;
   console.log(newData)
} */