import styled from 'styled-components';

export const Container = styled.div`
  background: linear-gradient(to left, #040f15, #08182f, #112955);

  border: transparent;

  border-radius: 8px;

  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 4em;

  position: relative;
  background-position: top center;
  background-repeat: no-repeat;

  padding-top: 5px !important;

  .home-content {
    color: black;
    text-align: center;
    background: transparent;
  }
  .imgAlly {
    width: 300px;
    display: flex;
  }
`;

export const Row = styled.div`
  .imgAlly {
    width: 350px;
    display: flex;
    margin: 2em 0;
  }

  .intro {
    align-items: center;
    padding: 16px;
  }
`;

export const Col = styled.div`
  Button {
    width: 250px;
    > a {
      color: ${({ theme }) => theme.primary};

      display: block;
      margin-top: 5px;
      text-decoration: none;
      text-align: center;
    }
  }

  > a {
    display: block;
    margin-top: 5px;
    text-decoration: none;
  }
  .home-header {
    padding-top: 80px !important;
    align-items: center;

    > a {
      display: block;
      margin-top: 5px;
      text-decoration: none;
    }
  }

  span {
    animation-name: wave-animation;
    animation-duration: 2.1s;
    animation-iteration-count: infinite;
    transform-origin: 70% 70%;
    padding: 10px;
  }

  @keyframes wave-animation {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(14deg);
    }
    20% {
      transform: rotate(-8deg);
    }
    30% {
      transform: rotate(14deg);
    }
    40% {
      transform: rotate(-4deg);
    }
    50% {
      transform: rotate(10deg);
    }
    60% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  h2 {
    color: rgb(29, 143, 242, 0.7);
    padding-left: 20px;
    margin-bottom: 10px;
    margin-right: 20px;
    display: flex;
  }

  h1 {
    font-size: 2.4em !important;
    padding-left: 50px !important;
    display: flex;
  }
`;
