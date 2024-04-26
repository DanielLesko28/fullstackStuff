const Animal = require("../models/Animal.js");

const getAllAnimals = async (req, res) => {
  try {
    const animals = await Animal.find({});
    res.json(animals);
  } catch (err) {
    console.error("Something is wrong here");
    console.error("This is error in getting all animals", err);
    res.status(500).send("The Server is down");
  }
};

const addAnimal = async (req, res) => {
  try {
    const { name } = req.body;
    const animal = new Animal({ name });
    await animal.save();
    res.status(201).send("Animal added successfully from controller");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error sending animal to database", err);
  }
};

const deleteAnimal = async (req, res) => {
  try {
    const { _id } = req.params;
    console.log(req.params);
    console.log("this is the ID", _id);
    await Animal.findByIdAndDelete(_id);
    res.status(200).send("Animal deleted successfully");
  } catch (error) {
    console.error("Error in DELETE request", error);
    res.status(500).send("Server Error in delete request");
  }
};

module.exports = { addAnimal, deleteAnimal, getAllAnimals };

//old post method
// app.post("/animals", async (req, res) => {
//   try {
//     const { name } = req.body;
//     const animal = new Animal({ name });
//     await animal.save();
//     res.status(201).send("Animal added successfully");
//   } catch (error) {
//     console.log("Error in POST request", error);
//     res.status(500).send("Server error in post request");
//   }
// });

//old delete method
// try {
//   const { _id } = req.params;
//   console.log(req.params);
//   console.log("this is the ID", _id);
//   await Animal.findByIdAndDelete(_id);
//   res.status(200).send("Animal deleted successfully");
// } catch (error) {
//   console.error("Error in DELETE request", error);
//   res.status(500).send("Server Error in delete request");
// }
// const animalIndex = animals.indexOf(name);
// if (animalIndex !== -1) {
//   animals.splice(animalIndex, 1);
//   res.status(200).send(`Animal '${name}' deleted successfully`);
// } else {
//   res.status(404).send("Animal not found");
// }

//old get method
// app.get("/animals", async (req, res) => {
//   try {
//     const animals = await Animal.find();
//     res.status(200).json(animals);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("The Server is down");
//   }
// });

// const updateUserProfile = asyncHandler(async (req, res) => {
//   const user = await User.findById(req.user._id);

//   // console.log("Stuff in user controller", req.user);

//   if (user) {
//     user.name = req.body.name || user.name;
//     user.email = req.body.email || user.email;
//     user.isAdmin = Boolean(req.body.isAdmin);

//     const updatedUser = await user.save();

//     res.json({
//       _id: updatedUser._id,
//       name: updatedUser.name,
//       email: updatedUser.email,
//       isAdmin: updatedUser.isAdmin,
//     });
//   } else {
//     res.status(404);
//     throw new Error("User not found in here", req.params);
//   }
// });
