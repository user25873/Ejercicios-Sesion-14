const express = require("express");
const userSchema = require("../module/user");

const router = express.Router();

//crear pokemonFavorito
router.post("/favorito", (req,res) => {
    res.send("agregar pokemon Favoritos")
})



// get all users
router.get("/users", (req, res) => {
    userSchema
      .find()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });
  
  // get a user
  router.get("/users/:id", (req, res) => {
    const { id } = req.params;
    userSchema
      .findById(id)
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });