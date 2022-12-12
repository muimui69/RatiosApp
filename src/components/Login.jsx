import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';

export const Login = () => {

  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const { login } = useAuth();

  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    const buttonSelectId = e.nativeEvent.submitter.id;
    if (buttonSelectId === 'register') {
      navigate('/register');
    } else {
      try {
        await login(user.email, user.password);
        navigate('/aplicacion')
      } catch (err) {
        setError(err.message);
      }
    }
  };

  const errorControl = (err) => {
    switch (err) {
      case 'Firebase: Error (auth/wrong-password).':
        return (
          <Alert className="mb-3" key='danger' variant='danger'>
            Contraseña incorrecta
          </Alert>
        )
        break;

      case 'Firebase: Error (auth/user-not-found).':
        return (
          <Alert className="mb-3" key='danger' variant='danger'>
            El usuario no existe
          </Alert>
        )
        break;

      default:
        break;
    }
  }

  return (
    <>
      <br />
      <Container>
        <Row className="justify-content-md-center">
          <Col sm lg="4">
            <Card className="text-center xs" >
              <Card.Header>Iniciar sesión</Card.Header>
              <Card.Body>
                <Card.Title>Ingrese sus datos</Card.Title>

                <Form className="mb-3" onSubmit={handleSubmit}>

                  <Form.Group className="mb-3" controlId="email">
                    <Form.Control type="email" name='email' onChange={handleChange} placeholder="Correo electrónico" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="password">
                    <Form.Control type="password" name='password' onChange={handleChange} placeholder="Contraseña" />
                  </Form.Group>

                  {
                    errorControl(error)
                  }

                  <Button variant="primary" id='login' type="submit">
                    Entrar
                  </Button>

                  <span>¿Aún no tienes cuenta? </span>

                  <Button variant="primary" id='register' type="submit">
                    Registrarte
                  </Button>

                </Form>

              </Card.Body>
              <Card.Footer className="text-muted"></Card.Footer>
            </Card>
          </Col>
        </Row>

      </Container>

    </>
  )
}

