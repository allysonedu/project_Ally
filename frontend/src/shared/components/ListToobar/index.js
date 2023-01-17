import { useCallback } from 'react';

import { Form } from '@unform/web';

import { FiSearch } from 'react-icons/fi';

import { Input, Button } from '../';

import { Container } from './styles';

export const ListToolbar = () => {
  const handleSubmit = useCallback(() => {
    console.log('handleSubmit');
  }, []);
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input name="search" type="text" icon={FiSearch} />
        <Button type="submit"></Button>
      </Form>
    </Container>
  );
};
