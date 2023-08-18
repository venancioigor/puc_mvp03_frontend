import React from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { PorquinhoService } from '../../service/PorquinhoService/porquinhoService';
import { ExchangeService } from '../../service/ExchangeService/exchangeService.js';

const porquinhoService = new PorquinhoService();
const exchangeService = new ExchangeService();



function VerSaldoTotalPorquinho() {
    const [cpfCliente, setCpfCliente] = React.useState('')
    const [saldoTotalPorquinhos, setSaldoTotalPorquinhos] = React.useState(0)
    const [saldoTotalPorquinhosEmDolar, setSaldoTotalPorquinhosEmDolar] = React.useState(0)
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
        const response = await porquinhoService.getSaldoTotalPorquinhos(cpfCliente)
        setSaldoTotalPorquinhos(response.saldo)
        setSaldoTotalPorquinhosEmDolar(response.saldo_total / valorDolarReal)
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
                <FormGroup>
                    <Label for="name">Saldo Porquinhos Total em US$ - Cotação Dólar Hoje:<strong style={{ "color": "green" }}> {valorDolarReal}</strong></Label>
                    <Input type="text" name="name" id="name" value={saldoTotalPorquinhosEmDolar}
                    />
                </FormGroup>
                <Button>Buscar saldo total</Button>
            </Form>
        </Container>
    );
}

export { VerSaldoTotalPorquinho };
