import { useCallback, useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import {
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

import { BiEditAlt, BiShowAlt, BiXCircle } from 'react-icons/bi';

import { ContentBaseLayout } from '../../shared/layouts/ContentBaseLayout';

import { ListToolbar, DeleteModal } from '../../shared/components';

import { getAssisteds, deleteAssisteds } from '../../api/allyApi';

import { useToast } from '../../shared/context/ToastContext';

import { Container, ActionsButto } from './styles';

export const FindAssistido = () => {
  const { addToast } = useToast();
  const [assisteds, setAssisteds] = useState([]);
  const [assistedId, setAssistedId] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const navigate = useNavigate();

  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const handleSearch = useCallback(() => {
    console.log(' ASSISTIDOS - handleSearch');
  }, []);

  const handleAssistidos = useCallback(
    (id, option) => {
      navigate(`/assisteds/${id}`, { state: { option } });
    },
    [navigate]
  );

  const getAllAssisteds = useCallback(async () => {
    const result = await getAssisteds();

    const formatedResult = result.map(item => {
      return {
        ...item,
        maritalStatus: item.maritalStatus ? 'Casado' : 'Solteiro',
      };
    });

    setAssisteds(formatedResult);
    setRefresh(false);
  }, []);

  const hadleDeleteAssisteds = useCallback(async () => {
    await deleteAssisteds(assistedId);

    setRefresh(true);
    setAssistedId(null);
    setOpenDeleteModal(false);

    addToast({
      type: 'success',
      title: 'Assistido Excluido',
      description: 'Assistido excluido com sucesso',
    });
  }, [assistedId, addToast]);

  const hadleCancelDelete = useCallback(() => {
    setOpenDeleteModal(false);
  }, []);

  const hadleOpenModal = useCallback(id => {
    setAssistedId(id);
    setOpenDeleteModal(true);
  }, []);

  useEffect(() => {
    getAllAssisteds();
  }, [getAllAssisteds, refresh]);

  return (
    <ContentBaseLayout
      title="Formulário do Assistido"
      toolbar={
        <ListToolbar handleSearch={handleSearch} handleNew={handleAssistidos} />
      }
    >
      <Container>
        {/* children */}
        {openDeleteModal && (
          <DeleteModal
            title="Exclusão do Assistido"
            description="O Assistido será excluído permanentemente, tem certeza de que deseja continuar ? "
            handleDelete={hadleDeleteAssisteds}
            handleCancel={hadleCancelDelete}
          />
        )}

        <TableContainer component={Paper}>
          <Table sx={{ winWidth: '100%' }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Ações</TableCell>
                <TableCell align="left">ID</TableCell>
                <TableCell align="left">Nome</TableCell>
                <TableCell align="left">Idade</TableCell>
                <TableCell align="left">Numero</TableCell>
                <TableCell align="left">Profissão</TableCell>
                <TableCell align="left">Localização</TableCell>
                <TableCell align="left">Estado civil</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {assisteds.map(assisted => (
                <TableRow key={assisted.id}>
                  <TableCell align="left">
                    <ActionsButto>
                      <button
                        type="button"
                        onClick={() => handleAssistidos(assisted.id, 2)}
                      >
                        <BiEditAlt size={20} />
                      </button>

                      <button
                        type="button"
                        onClick={() => handleAssistidos(assisted.id, 4)}
                      >
                        <BiShowAlt size={20} />
                      </button>

                      <button onClick={() => hadleOpenModal(assisted.id)}>
                        <BiXCircle size={20} />
                      </button>
                    </ActionsButto>
                  </TableCell>
                  <TableCell align="left">{assisted.id}</TableCell>
                  <TableCell align="left">{assisted.name}</TableCell>
                  <TableCell align="left">{assisted.age}</TableCell>
                  <TableCell align="left">{assisted.whatsapp}</TableCell>
                  <TableCell align="left">{assisted.profession}</TableCell>
                  <TableCell align="left">{assisted.district}</TableCell>
                  <TableCell align="left">{assisted.maritalStatus}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </ContentBaseLayout>
  );
};
