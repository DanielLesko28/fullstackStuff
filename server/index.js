const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./db.js");

const {
  addAnimal,
  deleteAnimal,
  getAllAnimals,
} = require("./controllers/animalControllers.js");
const Animal = require("./models/Animal.js");

const productsRoutes = require("./routes/products");
const {
  getAllSuperheroes,
  addSuperhero,
} = require("./controllers/superheroesControllers.js");

// const animals = ["spider", "monkey", "horse", "rabbit"];
const port = 4200;

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/products", productsRoutes);

//For getting, posting, deleting all animals
app.get("/animals", getAllAnimals);
app.post("/animals", addAnimal);
app.delete("/animals/:_id", deleteAnimal);

//For updating animal
app.put("/animals/:_id", async (req, res) => {
  console.log(req.params._id);
  const animal = await Animal.findById(req.params._id);

  console.log(animal);

  if (animal) {
    animal.name = req.body.name || animal.name;
    const updatedAnimal = await animal.save();

    res.json({
      _id: updatedAnimal._id,
      name: updatedAnimal.name,
    });
  } else {
    res.status(500).send("Error in PUT request on BE");
  }

  // try {
  //   const { _id } = req.params;
  //   const { name } = req.body;
  //   const updatedAnimal = await Animal.findByIdAndUpdate(
  //     _id,
  //     { name },
  //     { new: true }
  //   );
  //   res.status(200).json(updatedAnimal);
  // } catch (error) {
  //   console.error(error);
  //   res.status(500).send("Server Error");
  // }
});

//For getting all superheroes
app.get("/superheroes", getAllSuperheroes);

app.post("/superheroes", addSuperhero);

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
