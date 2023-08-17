import React from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { ClienteService } from '../../service/ClienteService/clienteService';

const clienteService = new ClienteService();

function CadastraCliente() {
    const [nomeCliente, setNomeCliente] = React.useState('')
    const [cpfCliente, setCpfCliente] = React.useState('')
    const [cadastrado, setCadastrado] = React.useState(false)

    function handleSubmit(event) {
        event.preventDefault();
        clienteService.cadastrarCliente(nomeCliente, cpfCliente)
        setNomeCliente('');
        setCpfCliente('');
        setCadastrado(true)
    }

    function handleClienteOnChange(event) {
        setNomeCliente(event.target.value)
    }
    function handleCpfOnChange(event) {
        setCpfCliente(event.target.value)
    }

    return (
        <Container>
            <h2>Cadastrar Cliente</h2>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="name">Nome Cliente</Label>
                    <Input type="text" name="name" id="name" value={nomeCliente}
                        onChange={handleClienteOnChange}
                        placeholder="Digite o nome do cliente" />
                    <Label for="name">CPF do Cliente</Label>
                    <Input type="text" name="name" id="name" value={cpfCliente}
                        onChange={handleCpfOnChange}
                        placeholder="Digite o CPF do cliente" />
                </FormGroup>
                <Button>Registrar</Button>
            </Form>
            {cadastrado && <p style={{ color: 'green' }}> Cliente cadastrado com sucesso!</p>}
        </Container>
    );
}

export { CadastraCliente };
