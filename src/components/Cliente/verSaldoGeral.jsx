import React from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { ClienteService } from '../../service/ClienteService/clienteService';
import { ExchangeService } from '../../service/ExchangeService/exchangeService.js';

const clienteService = new ClienteService();
const exchangeService = new ExchangeService();

function VerSaldoGeral() {
  const [cpfCliente, setCpfCliente] = React.useState('')
  const [saldoGeral, setSaldoGeral] = React.useState(0)
  const [saldoGeralEmDolar, setSaldoGeralEmDolar] = React.useState()
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
    const response = await clienteService.getClienteSaldoGeral(cpfCliente)
    setSaldoGeral(response.saldo_total)
    setSaldoGeralEmDolar(response.saldo_total / valorDolarReal)
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
        <FormGroup>
          <Label for="name">Saldo Porquinhos Total em US$ - Cotação Dólar Hoje:<strong style={{ "color": "green" }}> {valorDolarReal}</strong></Label>
          <Input type="text" name="name" id="name" value={saldoGeralEmDolar}

          />
        </FormGroup>
        <Button>Buscar</Button>
      </Form>
    </Container>
  );
}

export { VerSaldoGeral };
