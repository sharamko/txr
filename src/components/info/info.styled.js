import styled from 'styled-components';

export const InfoContainer = styled.div`
  background-color: #ffffff;
  width: 50%;
  border-radius: 8px;
  padding: 20px;
  min-height: 400px;
  height: 100%;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;
export const InfoList = styled.div`
  margin-top: 20px;
  & p {
    font-size: 18px;
    & b {
      font-size: 20px;
    }
    &:not(:last-child) {
      margin-bottom: 4px;
    }
  }
`;
