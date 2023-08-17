import React from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { PorquinhoService } from '../../service/PorquinhoService/porquinhoService';

const porquinhoService = new PorquinhoService();

function VerSaldoTotalPorquinho() {
    const [cpfCliente, setCpfCliente] = React.useState('')
    const [saldoTotalPorquinhos, setSaldoTotalPorquinhos] = React.useState(0)

    async function handleSubmit(event) {
        event.preventDefault();
        const response = await porquinhoService.getSaldoTotalPorquinhos(cpfCliente)
        setSaldoTotalPorquinhos(response.saldo)
    }

    function handleOnChange(event) {
        setCpfCliente(event.target.value)
    }

    return (
        <Container>
            <h2>Ver Saldo Total dos Porquinhos</h2>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="name">CPF</Label>
                    <Input type="text" name="name" id="name" value={cpfCliente}
                        onChange={handleOnChange}
                        placeholder="Digite o CPF do cliente" />
                </FormGroup>
                <FormGroup>
                    <Label for="name">Saldo Porquinhos Total em R$</Label>
                    <Input type="text" name="name" id="name" value={saldoTotalPorquinhos}
                    />
                </FormGroup>
                <Button>Buscar saldo total</Button>
            </Form>
        </Container>
    );
}

export { VerSaldoTotalPorquinho };
