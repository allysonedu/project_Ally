import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body, #root {
  height: 100vh;
  font-family: 'Raleway';
}

*, button, input {
  border: 0;
  outline: 0;
}

button {
  cursor: pointer;
}

ul {
  list-style: none;
}

`;