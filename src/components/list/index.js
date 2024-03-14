import React from 'react';
import AddItem from './addItem';
import { AddContainer, ListContainer } from './list.styled';
import Items from './Items';

const List = ({ handleFileChange }) => {
  const handleDragOver = (event) => {
    event.preventDefault();
    event.target.classList.add('active');
  };
  const handleDragLeave = (event) => {
    event.preventDefault();
    event.target.classList.remove('active');
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    handleFileChange(file);
    event.target.classList.remove('active');
  };
  const handleInputAdd = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    handleFileChange(file);
  };
  return (
    <ListContainer>
      <AddContainer
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <AddItem handleFileChange={handleInputAdd} />
      </AddContainer>
      <Items />
    </ListContainer>
  );
};

export default List;
