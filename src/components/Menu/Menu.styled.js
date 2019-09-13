import styled from 'styled-components';

export const StyledMenu = styled.nav.attrs(props => ({
  order: props.order || 3
}))`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.yellow};
  height: 100vh;
  max-width: 15rem;
  min-width: 12rem;
  padding: 1rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }

  ul {
    display: flex;
    flex-direction: column;
  }

  h2 {
    font-size: 1.5rem;
    padding: 3rem 0 0 0;
    margin-bottom: 0;
    font-weight: bold;
    color: ${({ theme }) => theme.red};

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }
  }
  h4 {
    font-size: 1.25rem;
  }
  button i {
    font-size: 1rem;
    padding-right: 0.25rem;
    margin-left: -0.5rem;
  }
`;

export const ListItem = styled.li`
  color: #000;
  font-size: 1.25rem;
  p {
    font-weight: bold;
    margin-bottom: 0;
  }
  span {
    font-size: 1rem;
  }
`;
