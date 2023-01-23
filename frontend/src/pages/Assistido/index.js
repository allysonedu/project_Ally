import { useCallback, useRef } from 'react';

import { FiEdit } from 'react-icons/fi';

import * as Yup from 'yup';

import { Form } from '@unform/web';

import getValidationErrors from '../../shared/utils/getValidationErrors';

import { useNavigate } from 'react-router-dom';

import { ContentBaseLayout } from '../../shared/layouts/ContentBaseLayout';

import { FormActions, Input, Select, Button } from '../../shared/components';

import { useToast } from '../../shared/context/ToastContext';

import { createAssisted } from '../../api/allyApi';

import { Container, FormContent } from './styles';

export const Assistido = () => {
  const formRef = useRef(null);
  const navigate = useNavigate();
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

        const assisted = await createAssisted(data);

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
    [addToast]
  );
  return (
    <ContentBaseLayout
      title=" Formulário do Assistido"
      toolbar={<FormActions handleBack={handleBack} />}
    >
      <Container>
        <h1>Formulário de cadastro</h1>

        <FormContent>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input
              name="name"
              icon={FiEdit}
              type="text"
              placeholder="Digite o nome do Assistido"
            />

            <Input
              name="age"
              icon={FiEdit}
              type="number"
              placeholder="Digite a idade do Assistido"
            />

            <Input
              name="whatsapp"
              icon={FiEdit}
              type="number"
              placeholder="Digite o numero do Assistido"
            />

            <Input
              name="profession"
              icon={FiEdit}
              type="text"
              placeholder="Digite qual a profissão do Assistido"
            />

            <Input
              name="district"
              icon={FiEdit}
              type="text"
              placeholder="Digite onde mora o Assistido"
            />

            <Select
              name="maritalStatus"
              placeholder="Estado civil"
              options={[
                { value: true, label: 'Casado' },
                { value: false, label: 'Solteiro' },
              ]}
            />

            <Button type="submit" style={{ marginTop: '16px' }}>
              Salvar
            </Button>
          </Form>
        </FormContent>
      </Container>
    </ContentBaseLayout>
  );
};
