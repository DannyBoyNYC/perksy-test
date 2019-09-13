import styled from 'styled-components';

export const StyledCart = styled.button`
  position: absolute;
  top: 1.5rem;
  left: 1rem;
  display: flex;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 10;

  padding: 0.25rem 0rem;
  font-weight: 800;
  font-size: 1.25rem;
  color: #fff;

  &:focus {
    outline: none;
  }
`;
