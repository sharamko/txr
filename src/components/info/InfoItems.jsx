import React from 'react';
import { InfoList } from './info.styled';

const InfoItems = ({ getData }) => {
  return (
    <InfoList>
      <p>
        <b>Common Name:</b> {getData('subject', 'commonName')}
      </p>
      <p>
        <b>Issuer CN:</b> {getData('issuer', 'commonName')}
      </p>
      <p>
        <b>Valid from:</b> {getData('date', 'before')}
      </p>
      <p>
        <b>Valid to:</b> {getData('date', 'after')}
      </p>
    </InfoList>
  );
};

export default InfoItems;
