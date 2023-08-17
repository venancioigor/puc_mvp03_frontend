import React from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { BancoService } from '../../service/BancoService/bancoService';

const bancoService = new BancoService();

function CadastraBancoForm() {
  const [nomeBanco, setNomeBanco] = React.useState('')
  const [isOk, setIsOk] = React.useState(false)

  function handleSubmit(event) {
    event.preventDefault();
    bancoService.cadastrarBanco(nomeBanco)
    setNomeBanco('')
    setIsOk(true)
  }

  function handleOnChange(event) {
    setNomeBanco(event.target.value)
  }

  return (
    <Container>
      <h2>Registrar Banco</h2>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="name">Nome</Label>
          <Input type="text" name="name" id="name" value={nomeBanco}
            onChange={handleOnChange}
            placeholder="Digite o nome do banco" />
        </FormGroup>
        <Button>Registrar</Button>
        {isOk && <p style={{ color: 'green' }}>Banco registrado com sucesso!</p>}
      </Form>
    </Container>
  );
}

export { CadastraBancoForm };
