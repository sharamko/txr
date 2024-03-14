import React from 'react';
import { AddButton, AddDescription } from './list.styled';

const AddItem = ({ handleFileChange }) => {
  return (
    <>
      <AddButton htmlFor="fileInput">
        Додати
        <input type="file" id="fileInput" hidden onChange={handleFileChange} />
      </AddButton>
      <AddDescription>
        або
        <br />
        перетягніть файл в це поле
      </AddDescription>
    </>
  );
};

export default AddItem;
