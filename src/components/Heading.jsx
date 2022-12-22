import { useAuth } from '../context/AuthContext';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link} from 'react-router-dom';

export const Heading = () => {
  const { user,logout} = useAuth();

  const handleLogout = async () => {
    await logout();
  }

  return (
    <>
      { user  &&
        <>
        <Navbar bg="light" expand="lg">
            <Container>
              <Nav className="justify-content-center" variant="pills">
                  <Link to="/aplicacion" className="p-2 text-decoration-none text-secondary"> Mis Ratios Financieros </Link>

                  <Link to="/gestion" className="p-2 text-decoration-none text-secondary"> Gestion </Link>

                  <Link to="/datos-gestion" className="p-2 text-decoration-none text-secondary"> Registrar Datos </Link>

                  <Button className="p-2" variant="primary" type="submit" onClick={handleLogout}>
                    Cerrar Sesion
                  </Button>
                  </Nav>
                  </Container>    
            </Navbar>
        </>
        }
    </>
  )
}