import { useCallback, useRef, useEffect, useState } from 'react';

import { FiEdit } from 'react-icons/fi';

import * as Yup from 'yup';

import { Form } from '@unform/web';

import getValidationErrors from '../../shared/utils/getValidationErrors';

import { useNavigate, useParams, useLocation } from 'react-router-dom';

import { ContentBaseLayout } from '../../shared/layouts/ContentBaseLayout';

import { FormActions, Input, Select, Button } from '../../shared/components';

import { useToast } from '../../shared/context/ToastContext';

import {
  createAssisted,
  getOneAssisteds,
  editAssisteds,
} from '../../api/allyApi';

import { Container, FormContent } from './styles';

export const AssistedsDetails = () => {
  const formRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { option } = location.state;
  const [assisted, setAssisteds] = useState();

  const { addToast } = useToast;

  const handleBack = useCallback(() => {
    navigate('/find-assistido');
  }, [navigate]);

  const handleSubmit = useCallback(
    async data => {
      console.log(data);
      try {
        formRef.current.setErrors({});

        const schema = Yup.object().shape({
          age: Yup.string().required('Idade é obrigatoria'),
          name: Yup.string().required('Nome é obrigatorio'),
          whatsapp: Yup.string().required('Numero é obrigatorio'),
          profession: Yup.string().required('Profissão é obrigatorio'),
          district: Yup.string().required('Onde mora é obrigatorio'),
          maritalStatus: Yup.string().required(
            'Casado ou Solteiro é obrigatorio'
          ),
        });

        await schema.validate(data, { abortEarly: false });

        let assisted;

        switch (option) {
          case 1: {
            assisted = await createAssisted(data);
            break;
          }

          case 2: {
            Object.assign(data, { id });
            assisted = await editAssisteds(data);
            break;
          }

          default:
        }

        console.log(assisted);
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
    [addToast, option, id]
  );

  const handleGetAssistedsDetails = useCallback(async () => {
    const result = await getOneAssisteds(id);

    console.log(result);

    setAssisteds(result);
  }, [id]);

  useEffect(() => {
    if (id !== 'new') {
      handleGetAssistedsDetails();
    }
  }, [handleGetAssistedsDetails, id]);

  return (
    <ContentBaseLayout
      title={
        option === 1 ? 'Cadastro de um novo assistido' : 'Detalhe do assistido'
      }
      toolbar={<FormActions handleBack={handleBack} />}
    >
      <Container>
        <h1>Formulário de cadastro</h1>

        <FormContent>
          <Form ref={formRef} onSubmit={handleSubmit} initialData={assisted}>
            <Input
              name="name"
              icon={FiEdit}
              type="text"
              placeholder="Digite o nome do  Assistido"
              disabled={option === 4 ? true : false}
            />
            <Input
              name="age"
              icon={FiEdit}
              type="number"
              placeholder="Digite a idade do  Assistido"
              disabled={option === 4 ? true : false}
            />
            <Input
              name="whatsapp"
              icon={FiEdit}
              type="number"
              placeholder="Digite o numero do  Assistido"
              disabled={option === 4 ? true : false}
            />
            <Input
              name="profession"
              icon={FiEdit}
              type="text"
              placeholder="Digite qual a profissão do  Assistido"
              disabled={option === 4 ? true : false}
            />
            <Input
              name="district"
              icon={FiEdit}
              type="text"
              placeholder="Digite onde mora o  Assistido"
              disabled={option === 4 ? true : false}
            />
            {option !== 4 ? (
              <Select
                name="maritalStatus"
                placeholder="Estado civil"
                options={[
                  { value: true, label: 'Casado' },
                  { value: false, label: 'Solteiro' },
                ]}
              />
            ) : (
              <Input
                name="maritalStatus"
                icon={FiEdit}
                type="text"
                value={assisted?.maritalStatus.value ? ' Casado' : 'Solteiro'}
                placeholder="Digite onde mora o  Assistido"
                disabled={option === 4 ? true : false}
              />
            )}

            <Button type="submit" style={{ marginTop: '16px' }}>
              Salvar
            </Button>
          </Form>
        </FormContent>
      </Container>
    </ContentBaseLayout>
  );
};
