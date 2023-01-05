import styled from 'styled-components';

export const Container = styled.div`
  grid-area: CT;

  background: ${({ theme }) => theme.content};

  color: ${({ theme }) => theme.text};

  background: rgba(13, 13, 13, 0.5);
`;
