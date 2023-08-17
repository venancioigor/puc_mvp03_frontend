import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { CadastraBancoForm } from './components/Banco/CadastraBancoForm';
import { GetAllBancos } from './components/Banco/GetAllBancos';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CadastraCliente } from './components/Cliente/cadastrarCliente';
import { VerCliente } from './components/Cliente/verCliente';
import { VerSaldoGeral } from './components/Cliente/verSaldoGeral';
import { Navbar, NavbarBrand, Collapse, Nav } from 'reactstrap';
import { AbrirConta } from './components/Conta/abrirConta';
import { DeletarConta } from './components/Conta/deletarConta';
import { TransferirValorEntreContas } from './components/Conta/transferirValorEntreContas';
import { VerContasCliente } from './components/Conta/verContasCliente';
import { VerSaldoTotalContas } from './components/Conta/verSaldoTotalContas';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { DeletarPorquinho } from './components/Porquinho/deletarPorquinho';
import { RegistrarPorquinho } from './components/Porquinho/registrarPorquinho';
import { TransferirValorEntrePorquinho } from './components/Porquinho/transferirValorEntrePorquinho';
import { VerPorquinho } from './components/Porquinho/verPorquinho';
import { VerSaldoTotalPorquinho } from './components/Porquinho/verSaldoTotalPorquinho';
import { Home } from './components/Home';
import './App.css';


function App() {
  const [isBancoOpen, setIsBancoOpen] = React.useState(false);
  const [isClienteOpen, setIsClienteOpen] = React.useState(false);
  const [isContasOpen, setIsContasOpen] = React.useState(false);
  const [isPorquinhoOpen, setIsPorquinhoOpen] = React.useState(false);

  const toggleBanco = () => setIsBancoOpen(!isBancoOpen);
  const toggleCliente = () => setIsClienteOpen(!isClienteOpen);
  const toggleConta = () => setIsContasOpen(!isContasOpen);
  const togglePorquinho = () => setIsPorquinhoOpen(!isPorquinhoOpen);


  return (
    <BrowserRouter>
      <Navbar style={{ width: '100%', }} color="dark" dark expand="md">
        <NavbarBrand style={{ fontSize: '2.0rem', marginLeft: '125px' }} href="/" >MyBank</NavbarBrand>
        <Collapse navbar>
          <Nav className="mr-auto" style={{ marginLeft: '50px', fontSize: '1.2em' }}>
          </Nav>
          <Dropdown dark isOpen={isClienteOpen} toggle={toggleCliente}>
            <DropdownToggle caret color='dark' style={{ fontSize: '1.2em' }}>
              Cliente
            </DropdownToggle>
            <DropdownMenu dark>
              <DropdownItem tag={Link} to="/cadastraCliente">Cadastrar Cliente</DropdownItem>
              <DropdownItem tag={Link} to="/verCliente">Ver Cliente</DropdownItem>
              <DropdownItem tag={Link} to="/verSaldoGeral">Ver Saldo Geral</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Dropdown dark isOpen={isContasOpen} toggle={toggleConta}>
            <DropdownToggle caret color='dark' style={{ fontSize: '1.2em' }}>
              Contas
            </DropdownToggle>
            <DropdownMenu dark>
              <DropdownItem tag={Link} to="/abrirConta">Abrir conta</DropdownItem>
              <DropdownItem tag={Link} to="/deletarConta">Deletar conta</DropdownItem>
              <DropdownItem tag={Link} to="/verContasCliente">Ver contas cliente</DropdownItem>
              <DropdownItem tag={Link} to="/verSaldoTotalContas">Ver Saldo Total Contas</DropdownItem>
              <DropdownItem tag={Link} to="/transferirValorEntreContas">Transferir valor entre contas</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Dropdown dark isOpen={isPorquinhoOpen} toggle={togglePorquinho}>
            <DropdownToggle caret color='dark' style={{ fontSize: '1.2em' }}>
              Porquinhos
            </DropdownToggle>
            <DropdownMenu dark>
              <DropdownItem tag={Link} to="/registrarPorquinho">Registrar porquinho</DropdownItem>
              <DropdownItem tag={Link} to="/verPorquinho">Ver porquinhos</DropdownItem>
              <DropdownItem tag={Link} to="/verSaldoTotalPorquinho">Ver Saldo Total porquinho</DropdownItem>
              <DropdownItem tag={Link} to="/transferirValorEntrePorquinho">Transferir Valor Entre Porquinho</DropdownItem>
              <DropdownItem tag={Link} to="/deletarPorquinho">Quebrar porquinho</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Dropdown dark isOpen={isBancoOpen} toggle={toggleBanco}>
            <DropdownToggle caret color='dark' style={{ fontSize: '1.2em' }}>
              Banco
            </DropdownToggle>
            <DropdownMenu dark>
              <DropdownItem tag={Link} to="/registrarBanco">Registrar Banco</DropdownItem>
              <DropdownItem tag={Link} to="/verTodosBancos">Ver todos os bancos</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Collapse>
      </Navbar >
      <div className="container">
        <Routes>
          {/* home */}
          <Route path="/" element={<Home />} />
          {/* cliente */}
          <Route path="/cadastraCliente" element={<CadastraCliente />} />
          <Route path="/verCliente" element={<VerCliente />} />
          <Route path="/verSaldoGeral" element={<VerSaldoGeral />} />
          {/* banco */}
          <Route path="/registrarBanco" element={<CadastraBancoForm />} />
          <Route path="/verTodosBancos" element={<GetAllBancos />} />
          {/* porquinho */}
          <Route path="/registrarPorquinho" element={<RegistrarPorquinho />} />
          <Route path="/verPorquinho" element={<VerPorquinho />} />
          <Route path="/verSaldoTotalPorquinho" element={<VerSaldoTotalPorquinho />} />
          <Route path="/transferirValorEntrePorquinho" element={<TransferirValorEntrePorquinho />} />
          <Route path="/deletarPorquinho" element={<DeletarPorquinho />} />
          {/* conta */}
          <Route path="/abrirConta" element={<AbrirConta />} />
          <Route path="/deletarConta" element={<DeletarConta />} />
          <Route path="/verContasCliente" element={<VerContasCliente />} />
          <Route path="/verSaldoTotalContas" element={<VerSaldoTotalContas />} />
          <Route path="/transferirValorEntreContas" element={<TransferirValorEntreContas />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
