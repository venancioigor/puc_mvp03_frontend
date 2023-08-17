import React from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { ContaService } from '../../service/ContaService/contaService';

const contaService = new ContaService();

function VerSaldoTotalContas() {
  const [cpfCliente, setCpfCliente] = React.useState('')
  const [saldoContasTotal, setSaldoContasTotal] = React.useState(0)

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await contaService.getSaldoTotalContas(cpfCliente)
    setSaldoContasTotal(response.saldo)
  }

  function handleOnChange(event) {
    setCpfCliente(event.target.value)
  }

  return (
    <Container>
      <h2>Ver Saldo Total Contas</h2>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="name">CPF</Label>
          <Input type="text" name="name" id="name" value={cpfCliente}
            onChange={handleOnChange}
            placeholder="Digite o CPF do cliente" />
        </FormGroup>
        <FormGroup>
          <Label for="name">Saldo Contas Total em R$</Label>
          <Input type="text" name="name" id="name" value={saldoContasTotal}
            onChange={handleOnChange} />
        </FormGroup>
        <Button>Buscar</Button>
      </Form>
    </Container>
  );
}

export { VerSaldoTotalContas };
