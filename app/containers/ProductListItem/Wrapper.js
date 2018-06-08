import styled from 'styled-components';

const Wrapper = styled.button`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: space-between;
  &:hover {
   background-color: red;
   cursor: pointer;
  };
  &:focus {
    background: lime;
  }
  &:active {
    background-color: #111111;
  }
`;

export default Wrapper;
