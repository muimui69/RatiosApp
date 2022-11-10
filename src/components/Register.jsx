import { useState } from 'react';
import {useAuth} from '../context/AuthContext';
import {useNavigate} from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';

export const Register = () => {

  const [user,setUser] = useState({
    nombre:'',
    empresa:'',
    email:'',
    password:''
  });

  const validInput = (input) => {
    if(input.trim().length>0){
      return true;
    }
    return false;
  }

  const { signup,userAddDatabase } = useAuth();

  const navigate = useNavigate();
  const [error,setError]=useState();

  const handleChange = ({target:{name,value}}) => {
    setUser({...user,[name]:value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if(!validInput(e.target[0].value)  || !validInput(e.target[1].value)){
      setError('input-vacio');
    }else{
      try {
        await signup(user.email,user.password);
        navigate('/confirm');
        await userAddDatabase(user);
      } catch (err) {
        //console.log(err);
        setError(err.message);
      }
    }
  };

  const errorControl = (err) =>{
    switch (err) {
      case 'Firebase: Password should be at least 6 characters (auth/weak-password).':
        return(
          <Alert className="mb-3" variant='danger'>
             La contraseña debe tener almenos 6 caracteres
          </Alert>
        )
        break;

      case 'input-vacio':
      return(
        <Alert className="mb-3" variant='danger'>
          Los campos de <b>Empresa</b> y <b>Nombre Completo</b> son obligatorios
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
        
          {
            errorControl(error)
          }

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

