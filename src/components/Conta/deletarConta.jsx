import React from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { ContaService } from '../../service/ContaService/contaService';

const contaService = new ContaService();

function DeletarConta() {
  const [cpfCliente, setCpfCliente] = React.useState('')
  const [contasCliente, setContasCliente] = React.useState([])
  const [contaEscolhida, setContaEscolhida] = React.useState('')
  const [isOk, setIsOk] = React.useState(false)

  function handleSubmit(event) {
    event.preventDefault();
    const idConta = recuperaIdConta(contaEscolhida)
    contaService.deletarConta(cpfCliente, idConta)
    setIsOk(true)
    setCpfCliente('')
    setContasCliente([])
  }

  function handleOnChangeCpf(event) {
    setCpfCliente(event.target.value)
  }

  function recuperaIdConta(numeroConta) {
    const idConta = contasCliente.find(conta => conta.conta === numeroConta).id;
    return idConta;
  }

  async function handleBuscarContas() {
    const response = await contaService.getContasPorCliente(cpfCliente)
    console.log(response)
    setContasCliente(response)
  }

  function handleSelectChange(event) {
    setContaEscolhida(event.target.value);
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
        <Button onClick={handleBuscarContas}>Buscar contas</Button>
        <FormGroup>
          <Label for="name">Conta do cliente</Label>
          <Input type="select" onChange={handleSelectChange} value={contaEscolhida}>
            <option>Selecione uma conta</option>
            {contasCliente.length > 0 && contasCliente.map((conta) => (
              <option key={conta.id} value={conta.nome}>{conta.conta}</option>
            ))}
          </Input>
        </FormGroup>
        <Button>Deletar</Button>
      </Form>
      {isOk && <p style={{ color: 'red' }}>Conta deletada!</p>}
    </Container>
  );
}

export { DeletarConta };
