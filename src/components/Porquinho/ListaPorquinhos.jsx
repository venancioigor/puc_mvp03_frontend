import React from 'react';

function Porquinho(props) {
    const { objetivo, id, id_cliente, saldo } = props;

    return (
        <div>
            <p><strong>Objetivo: {objetivo}</strong></p>
            <p>ID: {id}</p>
            <p>ID Cliente: {id_cliente}</p>
            <p>Saldo: {saldo}</p>
        </div>
    );
}

function ListaPorquinhos(props) {
    const porquinhos = props.porquinhos;

    return (
        <div>
            {porquinhos.map(porquinho => (
                <Porquinho
                    key={porquinho.id}
                    objetivo={porquinho.objetivo}
                    id={porquinho.id}
                    id_cliente={porquinho.id_cliente}
                    saldo={porquinho.saldo}
                />
            ))}
        </div>
    );
}

export { ListaPorquinhos };
