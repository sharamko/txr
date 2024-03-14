import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  padding: 40px 60px;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    padding: 20px;
  }
`;
