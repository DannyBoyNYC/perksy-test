import styled from 'styled-components';

export const StyledProduct = styled.div`
  padding: 1rem;
  margin: 1rem;
  min-width: 10rem;
  max-width: 15rem;
  background: #fff;
  border-radius: 6px;
  img {
    width: 100%;
    float: left;
  }

  @media (min-width: 480px) {
    .product {
      display: flex;
    }
  }
`;
