import React, { useEffect, useState } from "react";
import styles from "./Modal.module.css";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import axios from "axios";

const AnimalModal = ({ name, animalId }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [animalName, setAnimalName] = useState("");
  const [newData, setNewData] = useState({
    _id: animalId,
    name: "",
  });

  useEffect(() => {
    setNewData({
      _id: animalId,
      name: animalName,
    });
  }, [animalName, animalId]);

  const submitAnimal = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`/animals/${animalId}`, newData);
      if (response.status >= 200 && response.status < 300) {
        setAnimalName(""); // Clear the input field
        onClose(); // Close the modal
      } else {
        throw new Error("Failed to update animal name on FE");
      }
    } catch (error) {
      console.log("Error in put request", error);
    }
  };

  const closeModal = () => {
    onClose();
    setAnimalName("");
  };

  // console.log("PUT request", name);
  // console.log("PUT request animalID", animalId);
  console.log("animalName", animalName);

  return (
    <>
      <div onClick={onOpen}>
        <div className={styles.profile}>
          <Button colorScheme="teal" variant="outline">
            {name}
          </Button>
        </div>
      </div>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <h1>{name}</h1>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <label htmlFor="animalName">New animal name:</label>
            <input
              name="animalName"
              type="text"
              value={animalName}
              onChange={(e) => setAnimalName(e.target.value)}
            />
          </ModalBody>

          <ModalFooter
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Button colorScheme="red" onClick={closeModal}>
              Close
            </Button>
            <Button colorScheme="green" onClick={submitAnimal}>
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AnimalModal;
