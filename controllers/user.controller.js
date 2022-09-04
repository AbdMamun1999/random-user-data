const fs = require("fs");

// update multiple user functionality
function findUserTwoArray(ids, allUsers) {
  ids.map((user) => {
    allUsers.map((user2) => {
      if (user.id == user2.id) {
        user?.name ? (user2.name = user?.name) : user2?.name;
        user?.gender ? (user2.gender = user?.gender) : user2?.gender;
        user?.contact ? (user2.contact = user?.contact) : user2?.contact;
        user?.address ? (user2.address = user?.address) : user2?.address;
        user?.photoUrl ? (user2.photoUrl = user?.photoUrl) : user2.photoUrl;
      } else {
        console.log(`${user.id} is not found`);
      }
    });
  });
  // console.log(allUsers);
  return allUsers;
}

// get random user api
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

// get all user api
module.exports.getAllUser = (req, res) => {
  const { limit } = req?.query;

  const allUserJson = fs.readFileSync("users.json");
  let allUsers = JSON.parse(allUserJson);
  const limitUser = allUsers.slice(0, limit);
  res.send(limitUser);
};

// save a user in json file api
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
      res.write(allUsersStringfy);
      res.end();
    }
  });
};

// update a user api
module.exports.updateAUser = (req, res) => {
  const { id } = req.params;
  const { name, gender, contact, address, photoUrl } = req?.body;

  const allUserJson = fs.readFileSync("users.json");
  let allUsers = JSON.parse(allUserJson);

  const idExits = allUsers.some((userExits) => userExits.id === Number(id));
  if (idExits) {
    let findUser = allUsers.find((user) => user.id === Number(id));
    if (findUser) {
      name ? (findUser.name = name) : findUser?.name;
      gender ? (findUser.gender = gender) : findUser?.gender;
      contact ? (findUser.contact = contact) : findUser?.contact;
      address ? (findUser.address = address) : findUser?.address;
      photoUrl ? (findUser.photoUrl = photoUrl) : findUser?.photoUrl;
    }

    const allUsersStringfy = JSON.stringify(allUsers);

    fs.writeFile("users.json", allUsersStringfy, (err) => {
      if (err) {
        res.write(err);
        res.end();
      } else {
        res.write(allUsersStringfy);
        res.end();
      }
    });
  } else {
    res.send(`The ${id} id is not found`);
  }

  //   res.send();
};

// multiple user update
module.exports.multipleUpdate = (req, res) => {
  const ids = req.body;

  const allUserJson = fs.readFileSync("users.json");
  let allUsers = JSON.parse(allUserJson);

  const updateMultipleUser = findUserTwoArray(ids, allUsers);

  const allUsersStringfy = JSON.stringify(updateMultipleUser);

  fs.writeFile("users.json", allUsersStringfy, (err) => {
    if (err) {
      res.write(err);
      res.end();
    } else {
      res.write(allUsersStringfy);
      res.end();
    }
  });

  // res.send(updateMultipleUser);
};

// delete user api
module.exports.deleteAUser = (req, res) => {
  const { id } = req.params;

  const allUserJson = fs.readFileSync("users.json");
  let allUsers = JSON.parse(allUserJson);

  const idExits = allUsers.some((userExits) => userExits.id === Number(id));
  if (idExits) {
    let deleteUser = allUsers.filter((user) => user.id !== Number(id));
    const allUsersStringfy = JSON.stringify(deleteUser);

    fs.writeFile("users.json", allUsersStringfy, (err) => {
      if (err) {
        res.write(err);
        res.end();
      } else {
        res.write(allUsersStringfy);
        res.end();
      }
    });
  } else {
    res.send(`${id} id not found`);
  }

  //   res.send("delete a user");
};
