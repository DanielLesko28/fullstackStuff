import { Box, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const URL = "http://localhost:4200/superheroes";

const AddSuperheroPage = () => {
  const [newHero, setNewHero] = useState({ id: "", name: "" });

  const navigate = useNavigate();

  const handleHeroChange = (e) => {
    setNewHero({ ...newHero, name: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(URL, newHero).then((response) => {
      console.log("POST response in superheroes", response);
    });
    setNewHero({ id: "", name: "" });
    console.log(newHero);
    navigate("/superheroes");
  };

  return (
    <>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Box>
          <input
            value={newHero.name}
            onChange={handleHeroChange}
            style={{ maxWidth: "250px" }}
          />
          <Button colorScheme="blue" onClick={handleSubmit}>
            Add Superhero
          </Button>
        </Box>
        {newHero.name}
      </Box>
    </>
  );
};

export default AddSuperheroPage;
