import { Aside } from '../Aside';
import { Content } from '../Content';

import { GridLayout } from './styles';

export const Layout = ({ children }) => {
  return (
    <GridLayout>
      <Aside />
      <Content>{children}</Content>
    </GridLayout>
  );
};
