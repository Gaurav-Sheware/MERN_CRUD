const mongoose = require("mongoose");
const User = require("../Models/userModel");
const express = require("express");

const router = express.Router();

// Create
router.post("/", async (req, res) => {
  const { name, age, email } = req.body;
  try {
    const UserData = await User.create({
      name: name,
      email: email,
      age: age,
    });
    res.status(201).json(UserData);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get
router.get("/", async (req, res) => {
  try {
    const showAll = await User.find();
    res.status(200).json({ showAll });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get Single Id
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const showOne = await User.findById((_id = id));
    res.status(200).json({ showOne });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//Delete Single Entity
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const showDelete = await User.findByIdAndDelete((_id = id));
    res.status(200).json({ showDelete });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
// Update
router.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, age } = req.body;

    const showUpdate = await User.findByIdAndUpdate((_id = id), req.body, {
      new: true,
    });
    res.status(200).json({ showUpdate });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
