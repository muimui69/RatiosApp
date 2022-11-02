import { Link } from 'react-router-dom';
import { IoMdAdd } from 'react-icons/io';
import { useAuth } from '../context/AuthContext';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
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
               {
                (user)?
                <Navbar.Brand  href="/userlist">Ratios financieros</Navbar.Brand>
                :
                <Navbar.Brand href="">Ratios financieros</Navbar.Brand>
               }
              {
                user &&
               <>

              <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="/">Inicio</Nav.Link>
                    <Nav.Link href="/register">Registrarse</Nav.Link>
                    <Nav.Link href="/create-business">Crear Gestion</Nav.Link>
                    <Nav.Link href="/create-business/send-cuentas">Registrar Datos</Nav.Link>
                    <Button variant="primary" type="submit" onClick={handleLogout}>
                      Cerrar Sesion
                    </Button>
                  </Nav>
                </Navbar.Collapse>
                </>
          }
              </Container>
             </Navbar> 
         
      
      {/*<div className='container-head'>
      
        { (user)?
          <Link to='/userlist'>
            <h5>RatiosApp</h5>
          </Link>
          :
          <h5>RatiosApp</h5>
        }

        { user &&
          <>
          <div className='container-button'>
              <Link to='/config'>
                    <button className='button-calculate' >
                      <IoMdAdd/> Agregar
                    </button>
              </Link>
          </div>

          <button className='button-form-signup' onClick={handleLogout}>
           Logout
          </button>
          </>
        }

      </div>
      */}
    </>
  )
}