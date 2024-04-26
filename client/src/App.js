import { Route, Routes } from "react-router-dom";
import "./App.css";
import { longestWord } from "./functions/Functions";
import ProductsPage from "./pages/productsPage/ProductsPage";
import ProductPage from "./pages/singleProductPage/ProductPage";
import { UserProvider } from "./context/UserContext";
import UsersPage from "./pages/usersPage/UsersPage";
import Homepage from "./pages/homePage/Homepage";
import LoginPage from "./pages/loginPage/LoginPage";
import Navbar from "./componnets/navbar/Navbar";
import UserPage from "./pages/userPage/UserPage";
import BackendStuff from "./pages/backendStuff/BackendStuff";
import AnimalsPage from "./pages/anilmalsPage/AnimalsPage";
import DogsPage from "./pages/dogsPage/DogsPage.tsx";
import Superheroes from "./pages/superheroesPage/Superheroes.jsx";
import AddSuperheroPage from "./pages/addSuperheroPage/AddSuperheroPage.jsx";

function App() {
  const localCategories = JSON.parse(localStorage.getItem("categories"));

  // console.log("localCategoriesss", localCategories);

  return (
    <div className="App">
      <UserProvider>
        {" "}
        <Navbar />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/backend" element={<BackendStuff />} />
          <Route path="/animals" element={<AnimalsPage />} />
          <Route path="/dogs" element={<DogsPage />} />
          <Route path="/superheroes" element={<Superheroes />} />
          {/* <Route path="/users" element={<UsersPage />} /> */}
          <Route path="/profile/:id" element={<UserPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/addSuperhero" element={<AddSuperheroPage />} />
        </Routes>
      </UserProvider>

      {/* <h1>{ longestWord("I see tommorowLand as great deal for meeeeeeeeeeeeee")}</h1> */}
    </div>
  );
}

export default App;