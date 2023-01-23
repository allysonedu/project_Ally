import { Form } from '@unform/web';

import { FiSearch, FiCheck } from 'react-icons/fi';

import { BiUserPlus } from 'react-icons/bi';

import { Input, Button } from '../';

import { Container } from './styles';

export const ListToolbar = ({ handleSearch, handleNew }) => {
  return (
    <Container>
      <Form onSubmit={handleSearch}>
        <Input name="search" type="text" icon={FiSearch} />
        <Button type="submit">
          <FiCheck />
        </Button>
      </Form>
      <Button type="button" onClick={() => handleNew('new', 1)}>
        <BiUserPlus size={24} styles={{ marginRight: '10px' }} />
        Novo Assistido
      </Button>
    </Container>
  );
};
