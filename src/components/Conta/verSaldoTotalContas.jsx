import React from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { ContaService } from '../../service/ContaService/ContaService.js';
import { ExchangeService } from '../../service/ExchangeService/exchangeService.js';

const contaService = new ContaService();
const exchangeService = new ExchangeService();

function VerSaldoTotalContas() {
  const [cpfCliente, setCpfCliente] = React.useState('')
  const [saldoContasTotal, setSaldoContasTotal] = React.useState(0)
  const [saldoContasTotalEmDolar, setSaldoContasTotalEmDolar] = React.useState()
  const [valorDolarReal, setValorDolarReal] = React.useState(0)

  React.useEffect(() => {
    exchangeService.getValorDolarReal().then(response => {
      if (response) {
        setValorDolarReal(response["conversion_rates"].BRL)
      }
    }, [])
  });


  async function handleSubmit(event) {
    event.preventDefault();
    const response = await contaService.getSaldoTotalContas(cpfCliente)
    setSaldoContasTotal(response.saldo)
    setSaldoContasTotalEmDolar(response.saldo_total / valorDolarReal)
  }

  async function handleOnChange(event) {
    const valorDolarReal = await exchangeService.getValorDolarReal()
    console.log(valorDolarReal["conversion_rates"].BRL)
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
        <FormGroup>
          <Label for="name">Saldo Porquinhos Total em US$ - Cotação Dólar Hoje:<strong style={{ "color": "green" }}> {valorDolarReal}</strong></Label>
          <Input type="text" name="name" id="name" value={saldoContasTotal}
            onChange={handleOnChange} />
        </FormGroup>
        <Button>Buscar</Button>
      </Form>
    </Container>
  );
}

export { VerSaldoTotalContas };
