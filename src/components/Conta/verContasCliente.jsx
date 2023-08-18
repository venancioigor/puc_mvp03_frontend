import React from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { ContaService } from '../../service/ContaService/ContaService.js';
import { ListaContas } from './ListaContas'

const contaService = new ContaService();

function VerContasCliente() {
    const [cpf, setCpf] = React.useState('')
    const [contasCliente, setContasCliente] = React.useState([])
    //const [isOk, setIsOk] = React.useState('')

    async function handleSubmit(event) {
        event.preventDefault();
        const response = await contaService.getContasPorCliente(cpf)
        console.log(response)
        setContasCliente(response)
        setCpf('')
    }

    function handleOnChange(event) {
        setCpf(event.target.value)
    }

    return (
        <Container>
            <h2>Ver Contas Cliente</h2>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="name">CPF do cliente</Label>
                    <Input type="text" name="name" id="name" value={cpf}
                        onChange={handleOnChange}
                        placeholder="Digite o CPF do cliente" />
                </FormGroup>
                <Button>Ver contas</Button>
            </Form>
            {contasCliente.length >= 1 &&
                <div>
                    <h3>Lista de contas:</h3>
                    <ListaContas contas={contasCliente} />
                </div>}
        </Container>
    );
}

export { VerContasCliente };
