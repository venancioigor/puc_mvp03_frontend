# MyBank - Quanto que você tem de dinheiro?

Pode ser que você tenha conta e poupança em diversos bancos e, nesses casos, fica difícil de saber quanto de dinheiro de fato você tem, inclusive em dólar.

O **objetivo** dessa aplicação é solucionar esse problema.

------------------------------------------------------------------------------------------------------------------------------------------------------

## Instruções para a utilização:

1º - Registrar o cliente, na aba Cliente.

2º - Abrir as contas e os saldos dessas contas desse cliente, na aba Contas

3º - Registrar os porquinhos (poupanças, caixas) desse cliente, na aba Porquinhos

4º - Clicar em ver saldo geral, na aba Cliente.

## Instruções para rodar esse front na máquina:

1º - Clonar o projeto.
2º - Executar npm install
3º - Executar npm run start

## API Externa (Componente B)
Esse frontEnd faz requisições para api externa Exchangerate (https://www.exchangerate-api.com/), onde é possível utilizar uma chave api grátis.

A rota utilizada é: https://v6.exchangerate-api.com/v6/{chave-api-gratis}/latest/USD

Cadastro: é necessário fazer o cadastro para receber a chave da api grátis para poder fazer requisições.

Licença de uso: É possível fazer 1.500 requisições de graça por mês, como é possível ver na imagem abaixo.
![image](https://github.com/venancioigor/puc_mvp03_frontend/assets/62806428/742efade-bc75-47d6-af03-31dc5e7b30b9)
