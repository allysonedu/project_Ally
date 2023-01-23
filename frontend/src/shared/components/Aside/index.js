import icon from '../../../assets/img/icon.png';
import { BiUser, BiHome, BiLogOut } from 'react-icons/bi';
import { GrDocumentConfig } from 'react-icons/gr';
import { FaRegCommentDots } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import {
  Container,
  Header,
  ProfileContent,
  ProfileInfo,
  Content,
  Menu,
  MenuItem,
  Logout,
} from './styles';

export const Aside = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Header>
        <ProfileContent>
          <img src={icon} alt="escudo" />
          <ProfileInfo>
            <h1>my functions</h1>
            <a href="/home">
              <BiHome size={20} />
              Home
            </a>

            <a href="/assistidos" onClick={() => navigate('/home')}>
              <BiUser size={20} />
              Criar Assistido
            </a>

            <a
              href="/find-assistido"
              onClick={() => navigate('/find-assistido')}
            >
              <FiSearch size={18} />
              Encontrar Assistido
            </a>

            <hr />

            <a href="/">
              <GrDocumentConfig size={16} />
              Config
            </a>

            <a href="/">
              <FaRegCommentDots size={16} />
              Duvida
            </a>

            <a href="/sign-up">
              <BiLogOut size={16} />
              Voltar
            </a>
          </ProfileInfo>
        </ProfileContent>
      </Header>

      <Content>
        <Menu>
          <MenuItem></MenuItem>
        </Menu>

        <Logout></Logout>
      </Content>
    </Container>
  );
};
