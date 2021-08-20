import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  display: block;
  height: 100%;
  background: #F4F8FA;
  font-family: sans-serif;
}

root {
  display: flex;
  align-items: center;
  justify-content: center;
}
`;
