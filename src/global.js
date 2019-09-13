// global.js
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: ${({ theme }) => theme.blue};
  color: ${({ theme }) => theme.red};
}

button {
    font-size: 1rem;
    padding: 0.5rem;
    border-radius: 3px;
    background: ${({ theme }) => theme.orange};
    color: #fff;
    margin-right: 1rem;
    border-color: ${({ theme }) => theme.red}
  }

ul {
  padding: 0;
  list-style: none;
}

.app-main {
  display: flex;
  flex-wrap: wrap;
}


#modal {
    background-color: rgba(0, 0, 0, 0.9);
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: 11;
    display: flex;
    justify-content: center;
    align-items: center;
    .ordered {
      font-size: 1.25rem;
      margin: 0.5 0;
      font-weight: bold;
    }
    h1 {
      margin: 0;
    }
  }

  #modal:empty {
    display: none;
  }

  #modal > div {
    background-color: #fff;
    max-width: 32rem;
    padding: 1rem;
    border-radius: 3px;
    text-align: center;
  }
`;
