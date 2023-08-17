import React from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { PorquinhoService } from '../../service/PorquinhoService/porquinhoService';
import { Porquinho } from './Porquinho';
import { ListaPorquinhos } from './ListaPorquinhos';

const porquinhoService = new PorquinhoService();

function VerPorquinho() {
  const [cpfCliente, setCpfCliente] = React.useState('')
  const [porquinhosCliente, setPorquinhosCliente] = React.useState([])

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await porquinhoService.getAllPorquinhos(cpfCliente)
    console.log(response)
    setPorquinhosCliente(response)
  }

  console.log(porquinhosCliente)

  function handleOnChange(event) {
    setCpfCliente(event.target.value)
  }

  return (
    <Container>
      <h2>Ver Porquinhos</h2>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="name">CPF</Label>
          <Input type="text" name="name" id="name" value={cpfCliente}
            onChange={handleOnChange}
            placeholder="Digite o CPF do dono do porquinho" />
        </FormGroup>
        <Button>Ver porquinhos</Button>
      </Form>
      {porquinhosCliente.length >= 1 &&
        <div>
          <h3>Lista de porquinhos:</h3>
          <ListaPorquinhos porquinhos={porquinhosCliente} />
        </div>}
      {/* {porquinhosCliente.length < 2 && porquinhosCliente.length > 0 &&
        <div>
          <h3>Porquinho:</h3>
          <Porquinho porquinhos={porquinhosCliente} />
        </div>} */}
    </Container>
  );
}

export { VerPorquinho };
