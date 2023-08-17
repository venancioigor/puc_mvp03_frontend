import React from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { PorquinhoService } from '../../service/PorquinhoService/porquinhoService';
const porquinhoService = new PorquinhoService();

function RegistrarPorquinho() {
  const [objetivo, setObjetivo] = React.useState('')
  const [cpf, setCpf] = React.useState('')
  const [saldo, setSaldo] = React.useState(0)
  const [isOk, setIsOk] = React.useState(false)

  function handleSubmit(event) {
    event.preventDefault();
    porquinhoService.cadastrarPorquinho(cpf, objetivo, saldo)
      .then((response) => {
        if (response === 'OK') {
          setIsOk(true);
        }
      })
      .catch((error) => {
        setIsOk(false);
        console.log(error)
      });

    limpaInputs()
    setIsOk(true)
  }

  function limpaInputs() {
    setCpf('')
    setSaldo(0)
    setObjetivo('')
  }

  function handleOnChangeObjetivo(event) {
    setObjetivo(event.target.value)
  }
  function handleOnChangeCpf(event) {
    setCpf(event.target.value)
  }
  function handleOnChangeSaldo(event) {
    setSaldo(parseFloat(event.target.value))
  }

  return (
    <Container>
      <h2>Registrar Porquinho</h2>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="name">CPF do Cliente</Label>
          <Input type="text" name="name" id="name" value={cpf}
            onChange={handleOnChangeCpf}
            placeholder="Digite o CPF do cliente dono da conta" />
        </FormGroup>
        <FormGroup>
          <Label for="name">Objetivo do porquinho</Label>
          <Input type="text" name="name" id="name" value={objetivo}
            onChange={handleOnChangeObjetivo}
            placeholder="Digite o objetivo desse porquinho" />
        </FormGroup>
        <FormGroup>
          <Label for="name">Saldo do Porquinho</Label>
          <Input type="text" name="name" id="name" value={saldo}
            onChange={handleOnChangeSaldo}
            placeholder="Digite o saldo atual do porquinho" />
        </FormGroup>
        <Button>Registrar porquinho</Button>
        {isOk && <p style={{ color: 'green' }}>Porquinho registrado com sucesso!</p>}
      </Form>
    </Container>
  );
}

export { RegistrarPorquinho };
