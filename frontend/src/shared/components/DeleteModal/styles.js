import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  svg {
    width: 50px;
  }
`;

export const Content = styled.div`
  background: ${({ theme }) => theme.background};

  border: 1px solid ${({ theme }) => theme.error_title};
  border-radius: 8px;
  box-shadow: 0 0 5px ${({ theme }) => theme.error_title};

  width: 750px;

  padding: 16px;
`;

export const Header = styled.header`
  text-align: center;

  h1 {
    font-size: 24px;
    color: black;
  }

  svg {
    padding-top: 5px;
    height: 50px;
    color: ${({ theme }) => theme.error_title};
  }
`;

export const Description = styled.section`
  margin: 16px 0;
  text-align: center;

  span {
    font-size: 16px;
    color: black;
  }
`;

export const ActionContainer = styled.section`
  margin-top: 24px;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  > button {
    width: 180px;
  }
`;
