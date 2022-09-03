const users = [
  {
    id: 1,
    name: "Hablu1",
    gender: "male",
    constact: "0257165266",
    address: "Dhaka",
    photoUrl: "",
  },
  {
    id: 2,
    name: "Hablu1",
    gender: "male",
    constact: "0257165266",
    address: "Dhaka",
    photoUrl: "",
  },
  {
    id: 3,
    name: "Hablu1",
    gender: "male",
    constact: "0257165266",
    address: "Dhaka",
    photoUrl: "",
  },
  {
    id: 4,
    name: "Hablu1",
    gender: "male",
    constact: "0257165266",
    address: "Dhaka",
    photoUrl: "",
  },
  {
    id: 5,
    name: "Hablu1",
    gender: "male",
    constact: "0257165266",
    address: "Dhaka",
    photoUrl: "",
  },
];

module.exports.getRandomUser = (req, res) => {
  const user = users[Math.floor(Math.random() * users.length)];
  res.send(user);
};

module.exports.getAllUser = (req, res) => {
  const { query } = req;
  const limit = query?.limit;
  if (query) {
    const limitedData = users.slice(0, limit);
    res.send(limitedData);
  } else {
    res.send(users);
  }
};
