import React from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { PorquinhoService } from '../../service/PorquinhoService/porquinhoService';

const porquinhoService = new PorquinhoService();

function DeletarPorquinho() {
  const [cpfCliente, setCpfCliente] = React.useState('')
  const [porquinhosCliente, setPorquinhosCliente] = React.useState([])
  const [porquinhoEscolhido, setPorquinhoEscolhido] = React.useState('')
  const [isOk, setIsOk] = React.useState(false)

  function handleSubmit(event) {
    event.preventDefault();
    const idPorquinho = recuperarIdPorquinho(porquinhoEscolhido)
    porquinhoService.deletarPorquinho(cpfCliente, idPorquinho)
    setIsOk(true)
    setCpfCliente('')
    setPorquinhosCliente([])

  }

  function handleOnChangeCpf(event) {
    setCpfCliente(event.target.value)
  }

  function recuperarIdPorquinho(objetivoPorquinho) {
    const idPorquinho = porquinhosCliente.find(porquinho => porquinho.objetivo === objetivoPorquinho).id;
    return idPorquinho;
  }

  async function handleBuscarPorquinhos() {
    const response = await porquinhoService.getAllPorquinhos(cpfCliente)
    setPorquinhosCliente(response)
  }

  function handleSelectChange(event) {
    setPorquinhoEscolhido(event.target.value);
  }

  return (
    <Container>
      <h2>Deletar Conta</h2>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="name">CPF do cliente</Label>
          <Input type="text" name="name" id="name" value={cpfCliente}
            onChange={handleOnChangeCpf}
            placeholder="Digite o CPF do cliente" />
        </FormGroup>
        <Button onClick={handleBuscarPorquinhos}>Buscar Porquinhos</Button>
        <FormGroup>
          <Label for="name">Porquinhos do cliente</Label>
          <Input type="select" onChange={handleSelectChange} value={porquinhoEscolhido}>
            <option>Selecione um porquinho</option>
            {porquinhosCliente.length > 0 && porquinhosCliente.map((porquinho) => (
              <option key={porquinho.id} value={porquinho.objetivo}>{porquinho.objetivo}</option>
            ))}
          </Input>
        </FormGroup>
        <Button>Deletar</Button>
      </Form>
      {isOk && <p style={{ color: 'red' }}>Porquinho quebrado!</p>}
    </Container>
  );
}

export { DeletarPorquinho };
