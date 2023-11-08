const User = require("../models/user");

const getUsers = (req, res) => {
  User.find({})
    .then((user) => {
      res.status(200).send(user);
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
};
const getUser = (req, res) => {
  const { idUser } = req.params;
  User.findById(idUser)
    .then((user) => {
      res.status(200).send(user);
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
};

const createUser = (req, res) => {
  const data = req.body;
  User.create(data)
    .then((user) => {
      res.status(201).send(user);
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
};

const updateUser = (req, res) => {
  const { idUser } = req.params;
  const data = req.body;
  User.findByIdAndUpdate(idUser, data, { new: true, runValidators: true })
    .then((user) => {
      res.status(200).send(user);
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
};

const deleteUser = (req, res) => {
  const { idUser } = req.params;
  User.findByIdAndDelete(idUser)
    .then((user) => {
      res.status(200).send("Done");
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
};

const addBookToUser = (req, res) => {
  const { idUser } = req.params;
  const { idBook } = req.params;
  // const data = req.body;
  User.findByIdAndUpdate(
    idUser,
    { $addToSet: { books: idBook } },
    { new: true, runValidators: true }
  )
    .then((user) => {
      res.status(200).send(user);
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
};

const deleteBookFromUser = (req, res) => {
  const { idUser } = req.params;
  const { idBook } = req.params;
  // const data = req.body;
  User.findByIdAndUpdate(
    idUser,
    { $pullAll: { books: [{ _id: idBook }] } },
    { new: true, runValidators: true }
  )
    .then((user) => {
      res.status(200).send(user);
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  addBookToUser,
  deleteBookFromUser,
};
