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

export { Conta }