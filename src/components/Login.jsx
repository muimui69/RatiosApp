import { useState } from 'react';
import {useAuth} from '../context/AuthContext';
import {useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export const Login = () => {

  const [user,setUser] = useState({
    email:'',
    password:''
  });

  const {login} = useAuth();

  const navigate = useNavigate();
  const [error,setError]=useState();

  const handleChange = ({target:{name,value}}) => {
    setUser({...user,[name]:value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    const buttonSelectId = e.nativeEvent.submitter.id;

    if(buttonSelectId ==='register'){
      navigate('/register');
    }else{

      try {
        await login(user.email,user.password);
        navigate('/userlist');
      } catch (err) {
        console.log(err.code);
        setError(err.message);
      }
    }
  };

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

        <Form className="mb-3">

          <Form.Group className="mb-3" controlId="email">
            <Form.Control type="email" placeholder="Correo electrónico" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Control type="password" placeholder="Contraseña" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Recordar contraseña" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Entrar
          </Button>
        </Form>

      </Card.Body>
      <Card.Footer className="text-muted"></Card.Footer>
    </Card>
        </Col>
      </Row>

    </Container>
      <div className='cotainer-loggin'>
          <form className='user-form' onSubmit={handleSubmit}>
             
              <div className='input-form'>
                  <input 
                      type='email' 
                      name='email'
                      id='email'
                      onChange={handleChange}
                      placeholder='Email' 
                      className='input-text'
                  >
                  </input>
              </div> 

              <div className='input-form'>
                  <input 
                      type='password' 
                      name='password'
                      id='password' 
                      onChange={handleChange}
                      placeholder='Password' 
                      className='input-text'
                  >
                  </input>
              </div> 

             

              <button className='button-form-login' id='login'>
                Login
              </button>

              <span>¿Aún no tienes cuenta? </span>
              <button className='button-form-register-redirect' id='register'>
                Registrate
              </button>

          </form>
      </div>
  </>
  )
}

