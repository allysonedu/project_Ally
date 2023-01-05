import styled from 'styled-components';

export const GridLayout = styled.div`
  display: grid;

  grid-template-columns: 250px, 100px auto;
  grid-template-rows: 700px auto;

  grid-template-areas: 'AS MH CT';
  height: 100vh;
`;
