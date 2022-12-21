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
              <Nav className="justify-content-center" activeKey="/home" variant="pills" defaultActiveKey="/home">
                  <Link to="/aplicacion" className="p-2"> Mis Ratios Financieros </Link>

                  <Link to="/gestion" className="p-2"> Gestion </Link>

                  <Link to="/datos-gestion" className="p-2"> Registrar Datos </Link>

                  <Button className="p-2" variant="primary" type="submit" onClick={handleLogout}>
                    Cerrar Sesion
                  </Button>
                  </Nav>
                  </Container>    
            </Navbar>
    </>
  )
}