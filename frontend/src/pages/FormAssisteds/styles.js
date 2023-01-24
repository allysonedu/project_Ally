import styled from 'styled-components';

export const Container = styled.div``;

export const ActionsButto = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  button {
    svg {
    }
    background: transparent;
    border: 0;
    transition: all 0.2s;
    &:hover {
      transform: scale(1.2);
    }
    svg {
      color: rgb(28, 143, 248, 0.9);
    }
  }
`;
