import express from 'express';
import mongoose from 'mongoose'

const router = express.Router();
const API_KEY = '/users';

const usersSchema = new mongoose.Schema({
  _id: String,
  name: String,
  surname: String,
  email: String,
  password: String,
  confirmPassword: String,
});

const Users = mongoose.model('users', usersSchema);

router.get(API_KEY, function (req, res) {
  Users.find((err, users) => {
    console.log(users, '@@@@@@@@@');
    res.send(users);
  });
});

export default router;
