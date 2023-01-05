import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to right, #040f15, #08182f, #112955, #040f15);
  height: 100%;

  width: 100%;
  max-width: 100%;

  img {
    width: 200px;
  }

  form {
    display: flex;
    flex-direction: column;

    margin: 16px 0;

    width: 300px;

    text-align: center;
  }

  button {
    margin-top: 17px;
  }

  h1 {
    margin-bottom: 10px;
  }

  > a {
    color: ${({ theme }) => theme.primary};
    display: block;
    margin-top: 24px;
    text-decoration: none;

    transition: all 0.2;

    display: flex;
    align-items: center;

    svg {
      margin-right: 10px;
    }

    &:hover {
      transform: scale(1.02);
    }
  }
`;

export const Background = styled.div`
  flex: 1;
`;
