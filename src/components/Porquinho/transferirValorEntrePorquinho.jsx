import React from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { PorquinhoService } from '../../service/PorquinhoService/porquinhoService';

const porquinhoService = new PorquinhoService();

function TransferirValorEntrePorquinho() {
  const [cpfCliente, setCpfCliente] = React.useState('')
  const [porquinhosClienteOrigem, setPorquinhosClienteOrigem] = React.useState([])
  const [porquinhosClienteDestino, setPorquinhosClienteDestino] = React.useState([])
  const [porquinhoOrigemEscolhida, setPorquinhoOrigemEscolhida] = React.useState('')
  const [porquinhoDestinoEscolhida, setPorquinhoDestinoEscolhida] = React.useState('')
  const [valorTransferido, setValorTransferido] = React.useState(0)
  const [isOk, setIsOk] = React.useState(false)

  function handleSubmit(event) {
    event.preventDefault();
    const idContaOrigem = recuperaIdConta(porquinhoOrigemEscolhida, porquinhosClienteOrigem)
    const idContaDestino = recuperaIdConta(porquinhoDestinoEscolhida, porquinhosClienteDestino)
    porquinhoService.transferirValorEntrePorquinho(idContaOrigem, idContaDestino, cpfCliente, valorTransferido)
    setIsOk(true)
    limparInputs();
  }

  function limparInputs() {
    setCpfCliente('')
    setPorquinhosClienteOrigem([])
    setPorquinhosClienteDestino([])
    setPorquinhoOrigemEscolhida('')
    setPorquinhoDestinoEscolhida('')
    setValorTransferido(0)
  }

  function handleOnChangeCpf(event) {
    setCpfCliente(event.target.value)
  }

  function recuperaIdConta(objetivoPorquinho, porquinhosCliente) {
    const idPorquinho = porquinhosCliente.find(porquinho => porquinho.objetivo === objetivoPorquinho).id;
    return idPorquinho;
  }

  async function handleBuscarPorquinhos() {
    const response = await porquinhoService.getAllPorquinhos(cpfCliente)
    console.log(response)
    setPorquinhosClienteOrigem(response)
  }

  function handleSelectChangeOrigem(event) {
    setPorquinhoOrigemEscolhida(event.target.value)
  }

  function handleOnClickSelectDestino() {
    const novosPorquinhos = porquinhosClienteOrigem.filter(porquinho => porquinho.objetivo !== porquinhoOrigemEscolhida)
    setPorquinhosClienteDestino(novosPorquinhos)
  }

  function handleSelectChangeDestino(event) {
    setPorquinhoDestinoEscolhida(event.target.value);
  }

  function handleOnChangeValorTransferido(event) {
    setValorTransferido(parseFloat(event.target.value));
  }

  return (
    <Container>
      <h2>Transferir Valor Entre Porquinhos</h2>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="name">CPF</Label>
          <Input type="text" name="name" id="name" value={cpfCliente}
            onChange={handleOnChangeCpf}
            placeholder="Digite o CPF do cliente" />
        </FormGroup>
        <Button onClick={handleBuscarPorquinhos}>Buscar Porquinhos</Button>
        <FormGroup>
          <Label for="name">Porquinho Origem</Label>
          <Input type="select" onChange={handleSelectChangeOrigem} value={porquinhoOrigemEscolhida}>
            <option>Selecione o porquinho origem</option>
            {porquinhosClienteOrigem.length > 0 && porquinhosClienteOrigem.map((porquinho) => (
              <option key={porquinho.id} value={porquinho.objetivo}>{porquinho.objetivo}</option>
            ))}
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="name">Porquinho Destino</Label>
          <Input type="select" onChange={handleSelectChangeDestino} onClick={handleOnClickSelectDestino} value={porquinhoDestinoEscolhida}>
            <option>Selecione o porquinho destino</option>
            {porquinhosClienteDestino.length > 0 && porquinhosClienteDestino.map((porquinho) => (
              <option key={porquinho.id} value={porquinho.objetivo}>{porquinho.objetivo}</option>
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

export { TransferirValorEntrePorquinho };
