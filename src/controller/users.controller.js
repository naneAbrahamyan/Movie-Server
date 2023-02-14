import asyncHandler from "express-async-handler";
import users from "../service/users.service.js";

export const signUp = asyncHandler(async (req, res) => {
  const { body } = req;
  const token = await users.createUser(body);
  res.status(201).json({ token });
});

export const allUsers = asyncHandler(async (req, res) => {
  const result = await users.getUsers();
  res.json(result);
});

export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const token = await users.login(email, password);
  res.send({ token });
});

export const getUser = asyncHandler(async (req, res) => {
  const result = await users.getUser(req.user);
  res.json(result);
});
