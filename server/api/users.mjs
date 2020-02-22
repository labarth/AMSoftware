import express from 'express';
import mongoose from 'mongoose';
import argon2 from 'argon2';
import jwt from 'jsonwebtoken';

const router = express.Router();
const API_KEY = '/users';

const generateToken = (user) => {
  const data = {
    _id: user._id,
    name: user.name,
    email: user.email
  };

  const signature = 'MySuP3R_z3kr3t';
  const expiration = '1m';

  return jwt.sign({ data }, signature, { expiresIn: expiration });
}

const usersSchema = new mongoose.Schema({
  name: String,
  surname: String,
  email: String,
  password: String,
});

export const UsersModel = mongoose.model('users', usersSchema);

router.get(`${API_KEY}`, function (req, res) {
  UsersModel.find().then(users => res.send(users)).end();
});

router.get(`${API_KEY}/:id`, function (req, res) {
  UsersModel.findById(req.params.id, function (err, user) {
    res.send(user).end();
  });
});

router.post(`/login`,  async (req, res) => {
  try {
    const user = await UsersModel.findOne({ email: req.body.email });

    if (!user) {
      return res.status(200).json('User not found').end();
    }

    const correctPassword = await argon2.verify(user.password, req.body.password);

    if (correctPassword) {
       const data = {
        _id: user._id,
        email: user.email,
        name: user.name,
        surname: user.surname,
      };

       res.json({
        user: data,
        token: generateToken(data),
      }).end();
    }

    return res.status(200).json('incorrect password').end();

  } catch (e) {
    return res.json(e).status(500).end();
  }
});

router.post(`/signUp`, async (req, res) => {
  try {
    const { email, password, confirmPassword, name, surname = null } = req.body;
    const hasUser = await UsersModel.findOne({ email });

    if (hasUser) {
      res.json('a user with that email already exists').end();
    }

    if (password === confirmPassword) {
      const passwordHashed = await argon2.hash(password);

      const userData = {
        name,
        surname,
        email,
        password: passwordHashed,
      };

      await UsersModel.create(userData);
      res.json('User create success').end();
    } else {
      res.json('User create failure').end();
    }
  } catch(e) {
    console.log(e);
  }
});

const isAuth = (req, res, next) => {
  const { token } = req.body;
  const { data: { _id }} = jwt.decode(token);
  req.currentUserId = _id;

  return next();
};

router.post('/login-as', isAuth, async(req, res) => {
  if (req.currentUserId) {
    const user = await UsersModel.findOne({ _id: req.currentUserId });

    if (!user) {
      throw new Error('User not found');
    }

    const userData = {
      name: user.name,
      surname: user.surname,
      email: user.email,
    };

    res.status(200).json({ user: userData }).end();
  }

  res.json('auth failure').status(500).end();
  return;
});

export default router;
