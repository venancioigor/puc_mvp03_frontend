import React from 'react';

function Conta(props) {
    const { conta, id, id_banco, id_cliente, saldo } = props;

    return (
        <div>
            <p><strong>Conta: {conta}</strong></p>
            <p>ID: {id}</p>
            <p>ID Banco: {id_banco}</p>
            <p>ID Cliente: {id_cliente}</p>
            <p>Saldo: {saldo}</p>
        </div>
    );
}

function ListaContas(props) {
    const contas = props.contas;

    return (
        <div>
            {contas.map(conta => (
                <Conta
                    key={conta.id}
                    conta={conta.conta}
                    id={conta.id}
                    id_banco={conta.id_banco}
                    id_cliente={conta.id_cliente}
                    saldo={conta.saldo}
                />
            ))}
        </div>
    );
}

export { ListaContas };
