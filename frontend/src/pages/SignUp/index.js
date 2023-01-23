import { useCallback, useRef } from 'react';

import { FiMail, FiLock, FiArrowRight } from 'react-icons/fi';

import { BiUser } from 'react-icons/bi';

import { useNavigate } from 'react-router-dom';

import * as Yup from 'yup';

import { Form } from '@unform/web';

import logo from '../../assets/logo.png';

import getValidationErrors from '../../shared/utils/getValidationErrors';

import { Button, Input } from '../../shared/components';

import { useToast } from '../../shared/context/ToastContext';

import { createUser } from '../../api/allyApi';

import { Container, Content, Background } from './styles';

export const SignUp = () => {
  const formRef = useRef(null);

  const navigate = useNavigate();

  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async data => {
      try {
        formRef.current.setErrors({});

        console.log(data);

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome Obrigatorio!'),
          email: Yup.string()
            .email('Digita um email válido')
            .required('Email é obrigatorio!'),

          password: Yup.string().min(6, 'Minimo de 6 caracteres!'),
        });

        await schema.validate(data, { abortEarly: false });

        await createUser(data);

        addToast({
          type: 'success',
          title: 'Usuario criado com sucesso',
          description: 'Cadastro realizado, pode fazer seu logon ',
        });

        navigate('/login');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current.setErrors(errors);
          return;
        }

        addToast({
          type: 'error',
          title: 'Erro ao cadastrar',
          description: 'Erro no cadastro, verifique seus dados',
        });
      }
    },
    [navigate, addToast]
  );

  return (
    <Container>
      <Content>
        <img src={logo} alt="Ally" />

        <Form ref={formRef} onSubmit={handleSubmit}>
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

        <a href="/login">
          <FiArrowRight size={20} />
          Já tenho uma conta, fazer login
        </a>
      </Content>

      <Background />
    </Container>
  );
};
