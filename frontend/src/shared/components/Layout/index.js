import { Aside } from '../Aside';
import { Content } from '../Content';
import { MainHeader } from '../MainHeader';

import { GridLayout } from './styles';

export const Layout = ({ children }) => {
  return (
    <GridLayout>
      <Aside />
      <Content>{children}</Content>
      <MainHeader />
    </GridLayout>
  );
};
