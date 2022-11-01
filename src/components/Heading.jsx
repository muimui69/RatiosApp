import { Link } from 'react-router-dom';
import { IoMdAdd } from 'react-icons/io';
import { useAuth } from '../context/AuthContext';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const Heading = () => {
  const {user,logout} = useAuth();

  const handleLogout = async ()=>{
    await logout();
  }

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Ratios Financieros</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Inicio</Nav.Link>
              <Nav.Link href="/register">Registrarse</Nav.Link>
              <Nav.Link href="/create-business">Crear Gestion</Nav.Link>
              <Nav.Link href="/create-business/send-cuentas">Registrar Datos</Nav.Link>
              <Nav.Link href="/create-business/send-cuentas" onClick={handleLogout}>Cerrar sesión</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}