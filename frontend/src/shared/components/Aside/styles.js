import styled from 'styled-components';

export const Container = styled.div`
  grid-area: AS;

  background: rgb(29, 143, 242, 0.5);
  border: 4px solid rgb(29, 143, 242, 0.9);
  border-radius: 8px;

  color: ${({ theme }) => theme.text};

  hr {
    margin: 35px auto;
    height: 1px;
    width: 100%;
    background-color: black;
    opacity: 0.2;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
`;
export const ProfileContent = styled.div`
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    padding-right: 5px;
  }
`;
export const ProfileInfo = styled.div`
  h1 {
    font-size: 20px;
    text-align: right;
    margin-top: -40px;
    margin-right: 50px;
    color: black;
  }
  > a {
    color: black;
    display: block;
    margin-top: 30px;
    text-align: center;
    margin-left: 10px;
    text-decoration: none;

    transition: all 0.2;

    display: flex;
    align-items: center;

    svg {
      margin-right: 10px;
    }

    transition: all 0.3s;

    &:hover {
      transform: translateX(15px);
    }
  }
`;
export const Content = styled.div``;
export const Menu = styled.div``;
export const MenuItem = styled.div``;
export const Logout = styled.div``;
