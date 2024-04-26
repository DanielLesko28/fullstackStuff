import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Button, Card, CardBody, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import styles from "./Superheroes.module.css";

const Superheroes = () => {
  const [superheroes, setSuperheroes] = useState([]);

  const URL = "http://localhost:4200/superheroes";

  const fetchSuperheroes = async () => {
    try {
      const response = await axios.get(URL);
      const { data } = response;

      console.log("superheroes data", data);

      setSuperheroes(data);
      //   console.log("superheroes response", response);
    } catch (error) {
      console.log("This is error in superheroes FE", error);
    }
  };

  useEffect(() => {
    fetchSuperheroes();
  }, []);

  return (
    <>
      <Box display="flex" justifyContent="space-between" p="5px 20px">
        <h2>Superheroes</h2>
        <Link to="/addSuperhero">
          <Button>+ Add Superhero</Button>
        </Link>
      </Box>
      <div className={styles.container}>
        {superheroes.length > 0 ? (
          superheroes.map((hero) => (
            <Card key={hero.id} border="2px solid blue" margin="10px 30px">
              <CardBody>
                <Text>{hero.name}</Text>
              </CardBody>
            </Card>
          ))
        ) : (
          <h1
            style={{
              fontSize: "28px",
              color: "red",
              fontWeight: "600",
              padding: "20px 30px",
            }}
          >
            No Data to show
          </h1>
        )}
      </div>
      {/* <div>
        <button
          onClick={fetchSuperheroes}
          style={{
            background: "violet",
            color: "white",
            padding: "2px 4px",
            borderRadius: "5px",
          }}
        >
          Click me
        </button>
      </div> */}
    </>
  );
};

export default Superheroes;
