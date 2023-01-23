import { useCallback, useRef } from 'react';

import { FiMail, FiLock, FiArrowLeft } from 'react-icons/fi';

import { useNavigate } from 'react-router-dom';

import * as Yup from 'yup';

import { Form } from '@unform/web';

import logo from '../../assets/logo.png';

import getValidationErrors from '../../shared/utils/getValidationErrors';

import { useAuth } from '../../shared/context/AuthContext';

import { useToast } from '../../shared/context/ToastContext';

import { Button, Input } from '../../shared/components';

import { Container, Content, Background } from './styles';

export const Login = () => {
  const formRef = useRef(null);
  const navigate = useNavigate();
  const { addToast } = useToast();

  const { login } = useAuth();

  const handleSubmit = useCallback(
    async data => {
      try {
        formRef.current.setErrors({});

        console.log(data);

        const schema = Yup.object().shape({
          email: Yup.string()
            .email('Digita um email válido')
            .required('Email é obrigatorio!'),

          password: Yup.string().min(6, 'Minimo de 6 caracteres!'),
        });

        await schema.validate(data, { abortEarly: false });

        const { email, password } = data;

        await login({ email, password });

        navigate('/home');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current.setErrors(errors);
          return;
        }
        addToast({
          type: 'success',
          title: 'Usuário logado com sucesso!',
          description: 'login concluído!',
        });

        addToast({
          type: 'error',
          title: 'Erro no login',
          description: 'Erro ao logar, verificar suas credencias',
        });
      }
    },
    [login, navigate, addToast]
  );

  return (
    <Container>
      <Content>
        <img src={logo} alt="Ally" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu login</h1>

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

          <Button type="submit"> Entrar </Button>
        </Form>

        <a href="/sign-up">
          <FiArrowLeft size={20} />
          Não tenho uma conta
        </a>
      </Content>

      <Background />
    </Container>
  );
};
