import React, { useEffect } from "react";
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

const ModalWindow = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const signedUser = JSON.parse(localStorage.getItem("signedUser"));

  // console.log("signedUser in modal", signedUser);

  const signOut = () => {
    localStorage.removeItem("signedUser");
    window.location.href = "/";
  };

  const favoriteStore = () => {
    window.location.href = "favoriteStore";
  };

  return (
    <>
      <div onClick={onOpen}>
        {signedUser ? (
          <div className={styles.profile}>
            <Button colorScheme="facebook">
              {signedUser.firstName} {signedUser.lastName}
            </Button>
          </div>
        ) : (
          <Button colorScheme="telegram">
            <Link to="/login">Log In</Link>
          </Button>
        )}
      </div>

      <Modal isOpen={signedUser && isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {signedUser ? (
              <div onClick={onClose}>
                {" "}
                <Link to={`/profile/${signedUser.id}`}>
                  {signedUser.firstName} {signedUser.lastName}
                </Link>
              </div>
            ) : (
              <div>No Name</div>
            )}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {signedUser ? (
              <div className={styles.modalWrapper}>
                <div className={styles.imgStyle}>
                  <img alt={signedUser.username} src={signedUser.image} />
                </div>
                <div>
                  <h1>{signedUser.email}</h1>
                  <h1>{signedUser.address.address}</h1>
                  <h1>{signedUser.address.city}</h1>
                </div>
              </div>
            ) : (
              <div>No User signed in</div>
            )}
          </ModalBody>

          <ModalFooter
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Button colorScheme="gray" onClick={favoriteStore}>
              Favourites
            </Button>
            <Button colorScheme="red" onClick={signOut}>
              Sign Out
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalWindow;
