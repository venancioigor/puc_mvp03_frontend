import React from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { ClienteService } from '../../service/ClienteService/clienteService';

const clienteService = new ClienteService();

function VerSaldoGeral() {
  const [cpfCliente, setCpfCliente] = React.useState('')
  const [saldoGeral, setSaldoGeral] = React.useState(0)

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await clienteService.getClienteSaldoGeral(cpfCliente)
    setSaldoGeral(response.saldo_total)
  }

  function handleOnChange(event) {
    setCpfCliente(event.target.value)
  }

  return (
    <Container>
      <h2>Saldo Geral</h2>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="name">CPF</Label>
          <Input type="text" name="name" id="name" value={cpfCliente}
            onChange={handleOnChange}
            placeholder="Digite o CPF do cliente" />
        </FormGroup>
        <FormGroup>
          <Label for="name">Saldo Geral em R$</Label>
          <Input type="text" name="name" id="name" value={saldoGeral}

          />
        </FormGroup>
        <Button>Buscar</Button>
      </Form>
    </Container>
  );
}

export { VerSaldoGeral };
