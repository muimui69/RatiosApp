import { useAuth } from '../context/AuthContext';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link} from 'react-router-dom';

export const Heading = () => {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  }

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          {
            !user && <Navbar.Brand href='/'>Ratios financieros</Navbar.Brand>
          }
          {
            user  &&
            <>
              
            <Nav className="justify-content-center" activeKey="/home">
              <Nav.Item>
                <Nav.Link href="/home">Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="link-1">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="link-2">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                Disabled
                </Nav.Link>
              </Nav.Item>
            </Nav>




              <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Nav className="justify-content-center">
                  
                  <Button variant="secondary" href="/aplicacion">Mis Ratios Financieros</Button> 
                  <Button variant="secondary" href="/gestion">Gestion</Button> 
                  <Button variant="secondary" href="/datos-gestion">Registrar Datos</Button> 
                  
                  {/*<Nav.Link href="/aplicacion">Mis Ratios Financieros</Nav.Link>
                  <Nav.Link href="/gestion">Gestion</Nav.Link>
                  <Nav.Link href="/datos-gestion">Registrar Datos</Nav.Link>
                  */}

                  <Button variant="danger" type="submit" onClick={handleLogout}>
                    Cerrar Sesion
                  </Button>
                </Nav>

            </>
          }
        </Container>
      </Navbar>
    </>
  )
}