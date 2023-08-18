import React from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { ContaService } from '../../service/ContaService/ContaService.js';
import { BancoService } from '../../service/BancoService/bancoService';

const contaService = new ContaService();
const bancoService = new BancoService();

function AbrirConta() {
  const [cpf, setCpf] = React.useState('')
  const [saldo, setSaldo] = React.useState(0)
  const [numeroConta, setNumeroConta] = React.useState('')
  const [isOk, setIsOk] = React.useState(false)
  const [bancos, setBancos] = React.useState([])
  const [bancoEscolhido, setBancoEscolhido] = React.useState('')

  React.useEffect(() => {
    bancoService.getAllBancos().then(response => {
      if (response) {
        setBancos(response)
      }
    });
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    const idBanco = recuperaIdBanco(bancoEscolhido)
    contaService.abrirConta(cpf, idBanco, saldo, numeroConta)
      .then((response) => {
        if (response === 'OK') {
          setIsOk(true);
        }
      })
      .catch((error) => {
        setIsOk(false);
        console.log(error)
      });

    setBancoEscolhido('')
    setCpf('')
    setSaldo(0)
    setNumeroConta('')
    setIsOk(true)
  }

  function recuperaIdBanco(nomeBanco) {
    const idBanco = bancos.find(banco => banco.nome === nomeBanco).id;
    return idBanco;
  }

  function handleOnChangeCpf(event) {
    setCpf(event.target.value)
  }
  function handleOnChangeSaldo(event) {
    const inputSaldo = event.target.value
    if (isNaN(inputSaldo)) {
      return
    }
    setSaldo(parseFloat(inputSaldo))
  }
  function handleOnChangeConta(event) {
    setNumeroConta(event.target.value)
  }
  function handleSelectChange(event) {
    setBancoEscolhido(event.target.value)
  }

  return (
    <Container>
      <h2>Abrir Conta</h2>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="name">CPF do Cliente</Label>
          <Input type="text" name="name" id="name" value={cpf}
            onChange={handleOnChangeCpf}
            placeholder="Digite o CPF do cliente dono da conta" />
        </FormGroup>
        <FormGroup>
          <Label for="name">Número da conta</Label>
          <Input type="text" name="name" id="name" value={numeroConta}
            onChange={handleOnChangeConta}
            placeholder="Digite o número da conta a registrar" />
        </FormGroup>
        <FormGroup>
          <Label for="name">Saldo da Conta</Label>
          <Input type="text" name="name" id="name" value={saldo}
            onChange={handleOnChangeSaldo}
            placeholder="Digite atual da conta" />
        </FormGroup>
        <FormGroup>
          <Label for="name">Nome do Banco</Label>
          <Input type="select" value={bancoEscolhido} onChange={handleSelectChange}>
            <option>Selecione um banco</option>
            {bancos.length > 0 && bancos.map((banco, i) => (
              <option key={banco.id} value={banco.nome}>{banco.nome}</option>
            ))}
          </Input>
        </FormGroup>
        <Button>Abrir conta</Button>
        {isOk && <p style={{ color: 'green' }}>Conta aberta com sucesso!</p>}

      </Form>
    </Container>
  );
}

export { AbrirConta };
