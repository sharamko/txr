import { useEffect } from 'react';
import { Container } from './App.styled';
import Info from './components/info';
import List from './components/list';
import GlobalStyles from './globalStyles';
import { decode } from '@lapo/asn1js/hex';
import { useDispatch } from 'react-redux';
import { setCerts } from './store/slice';
import { decode as asn1 } from '@lapo/asn1js';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const certificates = JSON.parse(localStorage.getItem('certificates')) || [];
    dispatch(setCerts(certificates));
  }, []);

  const readAsArrayBuffer = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => resolve(event.target.result);
      reader.onerror = (error) => reject(error);
      reader.readAsArrayBuffer(file);
    });
  };

  const bufferToHexString = (buffer) => {
    return Array.from(new Uint8Array(buffer), (byte) =>
      byte.toString(16).padStart(2, '0')
    ).join('');
  };

  const decodeFile = async (hexString) => {
    try {
      const decodedData = decode(hexString);
      const parsedCertificate = asn1(decodedData);

      if (parsedCertificate.typeName() !== 'SEQUENCE') {
        throw 'Неправильна структура конверта сертифіката (очікується SEQUENCE)';
      }

      const certificates =
        JSON.parse(localStorage.getItem('certificates')) || [];
      certificates.push({
        name: `Certificate${Date.now()}`,
        data: decodedData,
      });
      localStorage.setItem('certificates', JSON.stringify(certificates));
      dispatch(setCerts(certificates));
    } catch (error) {
      console.error('Error decoding ASN.1 data:', error);
      alert(('Помилка декодування даних ASN.1:', error));
    }
  };

  const handleFileChange = async (file) => {
    if (file) {
      try {
        const buffer = await readAsArrayBuffer(file);
        const hexString = bufferToHexString(buffer);
        decodeFile(hexString);
      } catch (error) {
        console.error('Error reading or decoding file:', error);
      }
    }
  };

  return (
    <Container>
      <List handleFileChange={handleFileChange} />
      <Info />
      <GlobalStyles />
    </Container>
  );
}

export default App;
