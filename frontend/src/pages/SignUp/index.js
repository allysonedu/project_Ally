import { useCallback } from 'react';

import { FiMail, FiLock, FiArrowLeft } from 'react-icons/fi';

import { BiUser } from 'react-icons/bi';

import logo from '../../assets/logo.png';

import { Form } from '@unform/web';

import { Container, Content, Background } from './styles';

import { Button, Input } from '../../shared/components';

import { api } from '../../shared/services';

export const SignUp = () => {
  const handleSubmit = useCallback(async data => {
    const response = await api.post('/users', data);

    console.log(response);
  }, []);

  return (
    <Container>
      <Content>
        <img src={logo} alt="Ally" />

        <Form onSubmit={handleSubmit}>
          <h1>Cadastra-se</h1>

          <Input
            name="name"
            icon={BiUser}
            type="text"
            placeholder="Digite seu nome"
          />

          <Input
            name="email"
            icon={FiMail}
            type="email"
            placeholder="Digite seu email"
          />

          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Digite sua senha"
          />

          <Button type="submit"> Cadastrar </Button>
        </Form>

        <a href="/">
          <FiArrowLeft size={20} />
          Ja tenho Cadastro...
        </a>
      </Content>

      <Background />
    </Container>
  );
};
