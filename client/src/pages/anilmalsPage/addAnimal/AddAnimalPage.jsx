import { Button } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URL = "http://localhost:4200/animals";

const AddAnimalPage = () => {
  const { id } = useParams();

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

  const navigate = useNavigate();

  const navigateBack = () => {
    navigate(-1);
  };

  console.log("oldData", oldData);

  return (
    <>
      <Button onClick={navigateBack}>Back</Button>
      <h1>{id}</h1>
    </>
  );
};

export default AddAnimalPage;
