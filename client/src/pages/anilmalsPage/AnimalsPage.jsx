import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./AnimalPage.module.css";
import { Link, useLocation } from "react-router-dom";
import AnimalModal from "../../componnets/modal/AnimalModal";
import { Button, Heading } from "@chakra-ui/react";

const URL = "http://localhost:4200/animals";

const AnimalsPage = () => {
  const [animals, setAnimals] = useState([]);
  const [postData, setPostData] = useState({
    name: "",
  });

  const location = useLocation();

  const handleChange = (e) => {
    setPostData({ ...postData, name: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const animalData = {
      name: postData.name,
    };
    axios.post(URL, animalData).then((response) => {
      console.log(" post response", response);
      fetchAnimals();
      setPostData({ name: "" });
    });
  };

  const handleDelete = (animal) => {
    axios.delete(`${URL}/${animal._id}`).then((response) => {
      console.log("deleting animal", response.data);
      setAnimals(animals.filter((anim) => anim._id !== animal._id));
    });
  };

  useEffect(() => {
    fetchAnimals();
  }, []);
  const fetchAnimals = async () => {
    try {
      const response = await axios.get(URL);
      const { data } = response;

      setAnimals(data);
    } catch (error) {
      console.error("Error fetching animals:", error);
      // alert("Error: ", error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      console.log("this is the click event", e);
      handleSubmit();
    }
  };

  console.log("These are animals in state", animals);

  return (
    <div>
      <div>
        <input value={postData.name} onChange={handleChange} />
        <button
          disabled={postData.name === ""}
          onKeyUp={() => handleKeyPress}
          onClick={handleSubmit}
          className={styles.submitBtn}
        >
          Add animal
        </button>
      </div>
      {animals.length !== 0 ? (
        <div className={styles.bigContainer}>
          {animals?.map((animal) => (
            <div key={animal._id} className={styles.container}>
              {/* <AnimalModal name={animal.name} animalId={animal._id} /> */}
              <Link to={`/animals/${animal._id}`}>
                <Heading fontSize="20px" fontWeight="500" size="lg">
                  {animal.name}
                </Heading>
              </Link>
              <Button
                colorScheme="red"
                my="1rem"
                mx="1rem"
                onClick={() => {
                  handleDelete(animal);
                }}
              >
                X
              </Button>
            </div>
          ))}
        </div>
      ) : (
        <div style={{ marginTop: "4rem", fontSize: "2rem" }}>
          Sorry but There are no animals to show
        </div>
      )}
    </div>
  );
};

export default AnimalsPage;
