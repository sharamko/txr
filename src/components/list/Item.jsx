import React, { useState } from 'react';
import { decode as asn1 } from '@lapo/asn1js';
import { ItemElement } from './list.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveCert, setCerts } from '../../store/slice';

const Item = ({ cert }) => {
  const dispatch = useDispatch();
  const certActive = useSelector((state) => state.reducer.activeCert);
  const certs = useSelector((state) => state.reducer.certs);
  const parsedCertificate = asn1(cert.data);
  const tbsCertificate = parsedCertificate.sub[0];
  const subjectData = tbsCertificate.sub[5].sub;
  const subjectCN = subjectData.filter((el) =>
    el.sub[0].sub[0].content().includes('commonName')
  );
  const commonName = subjectCN[0].sub[0].sub[1].content();

  const handleSetActive = () => {
    dispatch(setActiveCert(cert));
  };
  const handleDelete = () => {
    if (cert?.name === certActive?.name) {
      dispatch(setActiveCert(null));
    }
    const filteredCerts = certs.filter((el) => el.name !== cert.name);
    localStorage.setItem('certificates', JSON.stringify(filteredCerts));
    dispatch(setCerts(filteredCerts));
  };

  return (
    <ItemElement $active={cert?.name == certActive?.name ? 1 : 0}>
      <p onClick={handleSetActive}>{commonName}</p>
      <button onClick={handleDelete}>Видалити</button>
    </ItemElement>
  );
};

export default Item;
