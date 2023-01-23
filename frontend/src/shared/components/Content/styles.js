import styled from 'styled-components';

export const Container = styled.div`
  grid-area: CT;

  background: ${({ theme }) => theme.content};

  color: ${({ theme }) => theme.text};

  background: linear-gradient(
    to left,
    rgb(29, 143, 242, 0.7),
    #08182f,
    rgb(29, 143, 242, 0.5)
  );

  padding: 16px;

  border: 2px solid rgb(29, 143, 242, 0.7);
  border-radius: 8px;
`;
