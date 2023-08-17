import React from 'react';

function Porquinho(props) {
    const porquinho = props.porquinho;

    return (
        <div>
            <p><strong>Objetivo: {porquinho.objetivo}</strong></p>
            <p>ID: {porquinho.id}</p>
            <p>ID Cliente: {porquinho.id_cliente}</p>
            <p>Saldo: {porquinho.saldo}</p>
        </div>
    );
}

export { Porquinho }