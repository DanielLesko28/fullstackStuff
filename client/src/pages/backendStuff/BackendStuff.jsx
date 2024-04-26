import { useState, useEffect } from "react";

const URL = "http://localhost:4200/animals";

const BackendStuff = () => {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    fetchAnimals();
  }, []);

  const fetchAnimals = async () => {
    try {
      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setAnimals(data);
    } catch (error) {
      console.error("Error fetching animals:", error);
    }
  };

  return (
    <div>
      {animals !== 0 &&
        animals.map((animal, index) => <h1 key={index}>{animal}</h1>)}
    </div>
  );
};

export default BackendStuff;
