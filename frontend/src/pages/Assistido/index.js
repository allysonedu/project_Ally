import { ContentBaseLayout } from '../../shared/layouts/ContentBaseLayout';

import { Container } from './styles';

import { ListToolbar } from '../../shared/components';

export const Assistido = () => {
  return (
    <Container>
      <ContentBaseLayout
        title="Cadastro de Assistido"
        toolbar={<ListToolbar />}
      >
        {/*children*/}
        <span>Aqui é o children</span>
      </ContentBaseLayout>
    </Container>
  );
};
