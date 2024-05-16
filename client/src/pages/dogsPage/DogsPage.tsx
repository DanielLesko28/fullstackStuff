import React, { useEffect, useState } from "react";
import Pagination from "../../componnets/pagination/Pagination";

const URL = "https://dog.ceo/api/breeds/list/all";

const DogsPage = () => {
  const [dogs, setDogs] = useState({});
  const [currentPage, setCurrentPage] = useState(
    parseInt(sessionStorage.getItem("currentPage")) || 1
  );
  const [expandedBreed, setExpandedBreed] = useState(null);
  const dogsPerPage = 5;

  useEffect(() => {
    fetchDogs();
  }, []);

  useEffect(() => {
    sessionStorage.setItem("currentPage", currentPage);
  }, [currentPage]);

  const fetchDogs = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    const { message } = data;
    setDogs(message);
  };

  const toggleSubBreeds = (breed) => {
    setExpandedBreed((prevBreed) => (prevBreed === breed ? null : breed));
  };

  const renderBreeds = () => {
    const dogBreeds = Object.keys(dogs);
    const startIndex = (currentPage - 1) * dogsPerPage;
    const endIndex = startIndex + dogsPerPage;
    const breedsToShow = dogBreeds.slice(startIndex, endIndex);

    return (
      <ul>
        {breedsToShow.map((breed) => {
          const subBreeds = dogs[breed];
          return (
            <li key={breed}>
              <span
                style={{ color: "red", cursor: "pointer" }}
                onClick={() => toggleSubBreeds(breed)}
              >
                {breed} {subBreeds.length > 0 && `(${subBreeds.length})`}
              </span>
              {expandedBreed === breed && (
                <ul>
                  {subBreeds.map((subBreed) => (
                    <li key={`${breed}-${subBreed}`}>
                      {subBreed} {breed}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    );
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div>
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(Object.keys(dogs).length / dogsPerPage)}
          onPageChange={handlePageChange}
        />
      </div>
      <div>{renderBreeds()}</div>
    </div>
  );
};

export default DogsPage;
