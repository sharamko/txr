import styled from 'styled-components';

export const AddContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  align-items: center;
  width: 100%;
  height: 50%;
  border-radius: 8px;
  border: 1px dashed darkgrey;
  opacity: 0.9;
  padding: 40px;
  &.active {
    border: 3px dashed green;
  }
`;
export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 50%;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;
export const ItemsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 20px;
  background-color: #fff;
  flex-grow: 1;
  border-radius: 8px;
  height: 50%;
  overflow-y: auto;
`;
export const AddButton = styled.label`
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 16px;
  line-height: 16px;
  border: 1px solid darkgrey;
  transition: all 0.1s linear;
  cursor: pointer;
  &:hover {
    background-color: #fff;
  }
`;
export const AddDescription = styled.p`
  font-size: 16px;
  text-align: center;
`;
export const ItemElement = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  border: 1px solid grey;
  font-size: 14px;
  border-radius: 8px;
  cursor: pointer;
  & p {
    padding: 5px;
    height: 100%;
    flex-grow: 1;
  }
  & button {
    height: 24px;
    margin: 4px;
    cursor: pointer;
    padding: 4px;
    border-radius: 4px;
    border: none;
    transition: all 0.1s linear;
    &:hover {
      background: red;
    }
  }
  transition: all 0.1s linear;
  background-color: ${({ active }) =>
    active ? 'wheat !important' : 'transparent'};
  &:hover {
    background-color: lightgrey;
  }
`;
