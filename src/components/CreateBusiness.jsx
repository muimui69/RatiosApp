import { useState } from 'react';
import {useAuth} from '../context/AuthContext';
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const CreateBusiness = () => {

  const [gestionAndPeriodo,setGestionAndPeriodo] = useState({
    gestion:'',
    periodo:'',
    politicaCobranza:''    
  });
  
  const periodoOptions = [
    { value: 'Mensual', label: 'Mensual' },
    { value: 'Trimestral', label: 'Trimestral' },
    { value: 'Semestral', label: 'Semestral' },
    { value: 'Anual', label: 'Anual' }
  ]

  const validInput = (input) => {
    if(input.trim().length>0){
      return true;
    }
    return false;
  }

  const {userAddGestionAndPeriodo} =useAuth();
  const navigate = useNavigate();

  const handleChange = ({target:{name,value}}) => {
    setGestionAndPeriodo({...gestionAndPeriodo,[name]:value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      navigate('/userlist');
      const periodo = e.target[1].parentElement.previousElementSibling.textContent;
      console.log(periodo);
      let newCreate = gestionAndPeriodo;
      newCreate = ({...gestionAndPeriodo,periodo});
      await userAddGestionAndPeriodo(newCreate);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
    <br />
      <Container>
      <Row className="justify-content-md-center">
        <Col sm lg="4">
        <Card className="text-center xs" >
      <Card.Header>Creando nueva Gestión</Card.Header>
      <Card.Body>
        <Card.Title>Ingrese los datos</Card.Title>

        <Form className="mb-3">

        <Form.Group className="mb-3" controlId="gestion">
            <Form.Control type="text" placeholder="Año de Gestion" />
          </Form.Group>  

        <Form.Group className="mb-3" controlId="periodo" placeholder="Politica de cobranza">
         <select class="form-control" id="periodo">
            <option value="" selected disabled>Selecione el periodo</option>
            <option>Anual</option>
            <option>Semestral</option>
            <option>Trimmestral</option>
            <option>Mensual</option>
          </select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="politicaCobranza">
            <Form.Control  type="text" placeholder="Politica de cobranza" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Guardar datos
          </Button>
        </Form>

      </Card.Body>
      <Card.Footer className="text-muted">Revise si todo los datos son correctos</Card.Footer>
    </Card>
        </Col>
      </Row>

    </Container>

       <div className='cotainer-loggin'>
          <form className='user-form' onSubmit={handleSubmit}>
              <div className='input-form'>
                  <input 
                      type='text' 
                      name='gestion'
                      onChange={handleChange}
                      placeholder='Gestion' 
                      className='input-text'
                  >
                  </input>
              </div> 

              <div className='input-form'>
                  <Select 
                    placeholder='Periodo' 
                    options={periodoOptions} 
                    className='select-color'
                  />
              </div> 

              <div className='input-form'>
                  <input 
                      type='text' 
                      name='politicaCobranza'
                      onChange={handleChange}
                      placeholder='Politica Cobranza' 
                      className='input-text'
                  >
                  </input>
              </div> 

              <button className='button-form-login'>
                  Crear
              </button>

          </form>
      </div>
    
    </>
  )
}
