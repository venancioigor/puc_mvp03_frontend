import React from 'react';
import { Container } from 'reactstrap';


function Home() {

    return (
        <Container>
            <div>
                <br></br>
                <br></br>
                <h2>Seja muito bem vindo(a)!</h2>
                <br></br>
                <p>
                    Pode ser que você tenha conta e poupança em diversos bancos e, nesses casos,
                    fica difícil de saber quanto de dinheiro de fato você tem.
                </p>
                <p>
                    O <strong>objetivo</strong> dessa aplicação é solucionar esse problema.
                </p>
                <p>------------------------------------------------------------------------------------------------------------------------------------------------------</p>
                <p><strong>INSTRUÇÕES para a utilização:</strong></p>
                <p>1º - Registrar o cliente, na aba Cliente.</p>
                <p>2º - Abrir as contas e os saldos dessas contas desse cliente, na aba Contas</p>
                <p>3º - Registrar os porquinhos (poupanças, caixas) desse cliente, na aba Porquinhos</p>
                <p>4º - Clicar em ver saldo geral, na aba Cliente.</p>
            </div>
        </Container>
    );
}

export { Home };
