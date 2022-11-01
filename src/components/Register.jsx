import { useState } from 'react';
import {useAuth} from '../context/AuthContext';
import {useNavigate} from 'react-router-dom';
//bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Register = () => {

  const [user,setUser] = useState({
    nombre:'',
    empresa:'',
    email:'',
    password:''
  });

  const { signup,userAddDatabase } = useAuth();

  const navigate = useNavigate();
  const [error,setError]=useState();

  const handleChange = ({target:{name,value}}) => {
    setUser({...user,[name]:value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signup(user.email,user.password);
      navigate('/confirm');
      await userAddDatabase(user);
    } catch (err) {
      setError(err.message);
    }
  };

  return(
  <>
    <br />
    <Container>
      <Row className="justify-content-md-center">
        <Col sm lg="4">
        <Card className="text-center xs" >
      <Card.Header>Registro de Usuario</Card.Header>
      <Card.Body>
        <Card.Title>Ingrese sus datos</Card.Title>
        <Form className="mb-3" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="empresa">
            <Form.Control type="text"  name='empresa' placeholder="Empresa" onChange={handleChange}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="nombre">
            <Form.Control type="text" name='nombre' placeholder="Nombre Completo" onChange={handleChange}/>
          </Form.Group>          

          <Form.Group className="mb-3" controlId="email">
            <Form.Control type="email" name='email' placeholder="Correo electrónico" onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Control type="password" name='password' placeholder="Contraseña" onChange={handleChange}/>

          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Recordar contraseña" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Registrarme
          </Button>
        </Form>
      </Card.Body>
      <Card.Footer className="text-muted">Se enviará una correo para que confirme su registro</Card.Footer>
    </Card>
        </Col>
      </Row>

    </Container>

     
  </>
  )
}

