import { Link } from 'react-router-dom';
import { Button } from '../';

import { Container } from './styles';

export const FormActions = ({ handleBack }) => {
  return (
    <Container>
      <Button
        style={{
          width: '150px',
        }}
        onclick={handleBack}
      >
        <Link to="/find-assistido">Volta</Link>
      </Button>
    </Container>
  );
};
