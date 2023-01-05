import logo from '../../assets/logo.png';

import { Container, Content, Background } from './styles';

import { Button } from '../../shared/components';

import { Link } from 'react-router-dom';

export const SignIn = () => {
  return (
    <Container>
      <Content>
        <img src={logo} alt="Ally" />

        <form>
          <h1>Faça seu logon</h1>

          <Button type="button"> Admin </Button>

          <Button>
            <Link to="/sign-up"> Secretaria</Link>
          </Button>

          <Button type="button"> Financeiro </Button>
        </form>
      </Content>

      <Background />
    </Container>
  );
};
