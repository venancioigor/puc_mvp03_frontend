import React from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { ClienteService } from '../../service/ClienteService/clienteService';

const clienteService = new ClienteService();

function VerCliente() {
    const [cpfCliente, setCpfCliente] = React.useState('')
    const [nomeCliente, setNomeCliente] = React.useState(null)

    async function handleSubmit(event) {
        event.preventDefault();
        const response = await clienteService.getCliente(cpfCliente)
        setNomeCliente(response.nome)
        setCpfCliente('')
    }

    function handleOnChange(event) {
        setCpfCliente(event.target.value)
    }

    return (
        <Container>
            <h2>Ver Cliente</h2>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="name">Nome do Cliente</Label>
                    <Input type="text" name="name" id="name" value={nomeCliente || ''}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="name">CPF</Label>
                    <Input type="text" name="name" id="name" value={cpfCliente}
                        onChange={handleOnChange}
                        placeholder="Digite o CPF do cliente que deseja buscar o nome" />
                </FormGroup>
                <Button>Buscar</Button>
            </Form>
        </Container>
    );
}

export { VerCliente };
