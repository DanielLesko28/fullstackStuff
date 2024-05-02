import { Button, Heading } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URL = "http://localhost:4200/animals";

const AddAnimalPage = () => {
  const { id } = useParams();

  const [animalName, setAnimalName] = useState("");
  const [oldData, setOldData] = useState({});

  useEffect(() => {
    fetchAnimal();
  }, []);

  const fetchAnimal = async () => {
    try {
      const response = await axios.get(`${URL}/${id}`);
      const { data } = response;
      //   console.log("data", data);
      setOldData(data);
    } catch (e) {
      console.log("Error in edit animal page");
    }
  };

  const updateAnimal = async () => {
    try {
      await axios.put(`${URL}/${id}`, { name: animalName });

      fetchAnimal();
      navigateBack();
    } catch (error) {
      console.error("Error updating animal:", error);
    }
  };

  const navigate = useNavigate();

  const navigateBack = () => {
    navigate(-1);
  };

  console.log("oldData", oldData);

  return (
    <>
      <Button onClick={navigateBack}>Back</Button>
      <Heading fontSize="25px" p={4}>
        {oldData.name}
      </Heading>
      <div>
        <label htmlFor="animalName">New animal name:</label>
        <input
          name="animalName"
          type="text"
          value={animalName}
          onChange={(e) => setAnimalName(e.target.value)}
        />
        <Button onClick={updateAnimal}>Update</Button>
      </div>
    </>
  );
};

export default AddAnimalPage;
