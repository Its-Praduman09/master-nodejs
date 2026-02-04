const express = require("express");
const app = express();
const fakeData = require("./MOCK_DATA.json");
const PORT = 4000;

// app.get("/", (req, res) => {
//   // res.send("Welcome Software Engineer.");
//   const allData = fakeData;
//   res.json(allData);
// });

// i want to get all data  present in fakeData.json file
app.get("/users", (req, res) => {
  return res.json(fakeData);
});
// i want to get single user by id present in fakeData.json file
app.get("/user/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = fakeData.find((user) => user.id === id);
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  res.json(user);
});

// i want to create a new user
app.post("/user", express.json(), (req, res) => {
  const newUser = req.body;
  fakeData.push(newUser);
  res.status(201).json(newUser);
});

// i wan to update a user by id
app.put("/user/:id", express.json(), (req, res) => {
  const id = parseInt(req.params.id);
  const updatedUser = req.body;
  const userIndex = fakeData.findIndex((user) => user.id === id);
  if (userIndex === -1) {
    return res.status(404).json({ error: "User not found" });
  }
  fakeData[userIndex] = { ...fakeData[userIndex], ...updatedUser };
  res.json(fakeData[userIndex]);
});

// i want to delete a user by id
app.delete("/user/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const userIndex = fakeData.findIndex((user) => user.id === id);
  if (userIndex === -1) {
    return res.status(404).json({ error: "User not found" });
  }
  const deletedUser = fakeData.splice(userIndex, 1);
  res.json(deletedUser[0]);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
