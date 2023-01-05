import styled, { css } from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.primary_light};
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.primary_light};
  padding: 14px;
  width: 100%;
  font-weight: bold;
  margin: 5px;
  color: black;

  display: flex;
  align-items: center;

  svg {
    margin-right: 16px;
  }

  ${props =>
    props.isFocused &&
    css`
      color: rgb(41, 199, 255, 0.9);
      border-color: rgb(41, 199, 255, 0.9);
    `}

  ${props =>
    props.isFilled &&
    css`
      color: rgb(41, 199, 255, 0.9);
    `}

  input {
    background: transparent;
    flex: 1;
    border: 0;
    font-size: 14px;

    &::placeholder {
      color: rgb(41, 199, 255, 0.9);
    }

    & + input {
      margin-top: 8px;
    }
  }
`;
