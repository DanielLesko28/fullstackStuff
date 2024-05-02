import React from "react";
import { useParams } from "react-router-dom";

const AddAnimalPage = () => {
  const { id } = useParams();

  console.log("animal id", id);

  return <div>{id}</div>;
};

export default AddAnimalPage;
