class ContaService {

    abrirConta(cpfCliente, idBanco, sd, numeroConta) {
        return fetch('http://127.0.0.1:5000/api/contas/abrirConta', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ cpf: cpfCliente, id_banco: idBanco, saldo: sd, conta: numeroConta })
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));
    }

    transferirValorEntreContas(idOrigem, idDestino, cpfCliente, valorOrigem) {
        return fetch('http://127.0.0.1:5000/api/contas/transferirValorEntreContas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id_origem: idOrigem, id_destino: idDestino, cpf: cpfCliente, valor_origem: valorOrigem })
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));
    }

    getContasPorCliente(cpf) {
        return fetch(`http://127.0.0.1:5000/api/contas/getContasPorCliente?cpf=${cpf}`)
            .then(response => response.json())
            .catch(error => console.error(error));
    }

    getSaldoTotalContas(cpf) {
        return fetch(`http://127.0.0.1:5000/api/contas/getSaldoTotalContas?cpf=${cpf}`)
            .then(response => response.json())
            .catch(error => console.error(error));
    }

    deletarConta(cpfCliente, idConta) {
        return fetch(`http://127.0.0.1:5000/api/contas/deletarConta?id_conta=${idConta}&cpf=${cpfCliente}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ cpf: cpfCliente, id_conta: idConta })
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));
    }
}

export { ContaService }