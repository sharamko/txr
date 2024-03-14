import React from 'react';
import { ItemsList } from './list.styled';
import Item from './Item';
import { useSelector } from 'react-redux';

const Items = () => {
  const certificates = useSelector((state) => state.reducer.certs);
  return (
    <ItemsList>
      {certificates.length > 0 ? (
        certificates.map((cert, index) => {
          return <Item key={index} cert={cert} />;
        })
      ) : (
        <p>Сертифікатів немає</p>
      )}
    </ItemsList>
  );
};

export default Items;
