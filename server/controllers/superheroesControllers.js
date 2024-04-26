const superheroes = require("../localDb.js");

const getAllSuperheroes = (req, res) => {
  console.log("superheroes from BE", superheroes);
  res.status(201).json(superheroes);
};

const addSuperhero = (req, res) => {
  const { name } = req.body;

  let newHero = {
    id: superheroes.length + 1,
    name: name,
  };
  superheroes.push(newHero);

  console.log("New Superhero added", newHero);
  res.status(201).send(superheroes);
};

module.exports = { getAllSuperheroes, addSuperhero };
