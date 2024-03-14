import React from 'react';
import { InfoContainer } from './info.styled';
import { useSelector } from 'react-redux';
import { decode as asn1 } from '@lapo/asn1js';
import InfoItems from './InfoItems';

const Info = () => {
  const cert = useSelector((state) => state.reducer.activeCert);
  const getData = (field, subfield) => {
    let fieldSelector;
    switch (field) {
      case 'subject':
        fieldSelector = 5;
        break;
      case 'issuer':
        fieldSelector = 3;
        break;
      case 'date':
        fieldSelector = 4;
        break;
      default:
        break;
    }
    if (!field) {
      return 'error';
    }
    const parsedCertificate = asn1(cert.data);
    if (field === 'date') {
      const subjectDate =
        parsedCertificate.sub[0].sub[fieldSelector].sub[
          subfield === 'before' ? 0 : 1
        ].content();
      return subjectDate;
    }
    const subjectData = parsedCertificate.sub[0].sub[fieldSelector].sub;
    const selectedData = subjectData.filter((el) =>
      el.sub[0].sub[0].content().includes(subfield)
    );
    const data = selectedData[0].sub[0].sub[1].content();
    return data;
  };

  return (
    <InfoContainer>
      <p>Дані сертифіката:</p>
      {cert ? <InfoItems getData={getData} /> : '(Оберіть сертифікат)'}
    </InfoContainer>
  );
};

export default Info;
