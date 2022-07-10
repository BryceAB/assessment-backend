const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const {
  getCompliment,
  getFortune,
  getUsers,
  deleteUser,
  createUser,
  updateUser,
} = require("./controller");

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);

app.get("/api/users", getUsers);
app.delete("/api/users/:id", deleteUser);
app.post("/api/users", createUser);
app.put("/api/users/:id", updateUser);

app.listen(4000, () => console.log("Server running on 4000"));
