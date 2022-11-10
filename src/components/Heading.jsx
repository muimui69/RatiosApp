import { useAuth } from '../context/AuthContext';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

export const Heading = () => {
  const {user,logout} = useAuth();

  const handleLogout = async ()=>{
    await logout();
  }

  
  return (
    <>
            <Navbar bg="light" expand="lg">
            <Container>
            <Navbar.Brand href='/'>Ratios financieros</Navbar.Brand>
              {
                user &&
               <>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="/userlist">Inicio</Nav.Link>
                    <Nav.Link href="/register">Registrarse</Nav.Link>
                    <Nav.Link href="/create-business">Crear Gestion</Nav.Link>
                    <Nav.Link href="/create-business/send-cuentas">Registrar Datos</Nav.Link>
                    <Nav.Link href="/see">Ver Registros</Nav.Link>
                    <Nav.Link href="/help">Ayuda</Nav.Link>
                    <Button variant="primary" type="submit" onClick={handleLogout}>
                      Cerrar Sesion
                    </Button>
                  </Nav>
                </Navbar.Collapse>
                </>
          }
              </Container>
             </Navbar> 
    </>
  )
}