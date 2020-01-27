import express from 'express';
import mongoose from 'mongoose';

const router = express.Router();
const API_KEY = '/users';

const usersSchema = new mongoose.Schema({
  _id: mongoose.ObjectId,
  name: String,
  surname: String,
  email: String,
  password: String,
  confirmPassword: String,
});

const UsersModel = mongoose.model('users', usersSchema);

router.get(`${API_KEY}`, function (req, res) {
  UsersModel.find().then(users => res.send(users));
});

router.get(`${API_KEY}/:id`, function (req, res) {
  UsersModel.findById(req.params.id, function (err, user) {
    res.send(user);
  });
});

export default router;
