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

router.post(`/login`, function (req, res) {
  UsersModel.findOne({ email: req.body.email }, function (err, user) {
    if (!user) {
      res.send(JSON.stringify('User not found'));
    } else if (user && user.password === req.body.password) {
      res.send(JSON.stringify('Login success'));
    } else {
      res.send(JSON.stringify('incorrect password'));
    }
  });
});

export default router;
