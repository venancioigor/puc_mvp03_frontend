import React from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { ContaService } from '../../service/ContaService/ContaService.js';

const contaService = new ContaService();

function TransferirValorEntreContas() {
  const [cpfCliente, setCpfCliente] = React.useState('')
  const [contasClienteOrigem, setContasClienteOrigem] = React.useState([])
  const [contasClienteDestino, setContasClienteDestino] = React.useState([])
  const [contaOrigemEscolhida, setContaOrigemEscolhida] = React.useState('')
  const [contaDestinoEscolhida, setContaDestinoEscolhida] = React.useState('')
  const [valorTransferido, setValorTransferido] = React.useState(0)
  const [isOk, setIsOk] = React.useState(false)

  function handleSubmit(event) {
    event.preventDefault();
    const idContaOrigem = recuperaIdConta(contaOrigemEscolhida, contasClienteOrigem)
    const idContaDestino = recuperaIdConta(contaDestinoEscolhida, contasClienteDestino)
    contaService.transferirValorEntreContas(idContaOrigem, idContaDestino, cpfCliente, valorTransferido)
    setIsOk(true)
    limparInputs();
  }

  function limparInputs() {
    setCpfCliente('')
    setContasClienteOrigem([])
    setContasClienteDestino([])
    setContaOrigemEscolhida('')
    setContaDestinoEscolhida('')
    setValorTransferido(0)
  }

  function handleOnChangeCpf(event) {
    setCpfCliente(event.target.value)
  }

  function recuperaIdConta(numeroConta, contasCliente) {
    const idConta = contasCliente.find(conta => conta.conta === numeroConta).id;
    return idConta;
  }

  async function handleBuscarContas() {
    const response = await contaService.getContasPorCliente(cpfCliente)
    console.log(response)
    setContasClienteOrigem(response)
  }

  function handleSelectChangeOrigem(event) {
    setContaOrigemEscolhida(event.target.value)
  }

  function handleOnClickSelectDestino() {
    const novasContas = contasClienteOrigem.filter(conta => conta.conta !== contaOrigemEscolhida)
    setContasClienteDestino(novasContas)
  }

  function handleSelectChangeDestino(event) {
    setContaDestinoEscolhida(event.target.value);
  }

  function handleOnChangeValorTransferido(event) {
    setValorTransferido(parseFloat(event.target.value));
  }

  return (
    <Container>
      <h2>Transferir Valor Entre Contas</h2>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="name">CPF</Label>
          <Input type="text" name="name" id="name" value={cpfCliente}
            onChange={handleOnChangeCpf}
            placeholder="Digite o CPF do cliente" />
        </FormGroup>
        <Button onClick={handleBuscarContas}>Buscar contas</Button>
        <FormGroup>
          <Label for="name">Conta Origem</Label>
          <Input type="select" onChange={handleSelectChangeOrigem} value={contaOrigemEscolhida}>
            <option>Selecione a conta origem</option>
            {contasClienteOrigem.length > 0 && contasClienteOrigem.map((conta) => (
              <option key={conta.id} value={conta.nome}>{conta.conta}</option>
            ))}
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="name">Conta Destino</Label>
          <Input type="select" onChange={handleSelectChangeDestino} onClick={handleOnClickSelectDestino} value={contaDestinoEscolhida}>
            <option>Selecione a conta destino</option>
            {contasClienteDestino.length > 0 && contasClienteDestino.map((conta) => (
              <option key={conta.id} value={conta.nome}>{conta.conta}</option>
            ))}
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="name">Valor em R$</Label>
          <Input type="text" name="name" id="name" value={valorTransferido}
            onChange={handleOnChangeValorTransferido}
            placeholder="Digite o valor a ser transferido" />
        </FormGroup>
        <Button>Realizar transferência</Button>
      </Form>
      {isOk && <p style={{ color: 'green' }}>Transferência realizada com sucesso</p>}
    </Container>
  );
}

export { TransferirValorEntreContas };
