const express = require("express");
const app = express();
const cors = require("cors");
const userRoutes = require("./routes/v1/user.route");

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// api
app.use('/user',userRoutes)

// home api
app.get("/", (req, res) => {
  res.send("Server is running");
});

// no route found
app.get('*',(req,res)=>{
    res.send('No Route Found')
})

app.listen(port, () => {
  console.log(`random user data listening on port ${port}`);
});
