import { useState } from 'react';
import {useAuth} from '../context/AuthContext';
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
      await userAddGestionAndPeriodo(gestionAndPeriodo);
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

        <Form className="mb-3" onSubmit={handleSubmit}>

        <Form.Group className="mb-3" controlId="gestion">
            <Form.Control 
              type="text"  
              name='gestion'
              onChange={handleChange}
              placeholder="Año de Gestion" />
          </Form.Group>  

        <Form.Group className="mb-3" controlId="periodo" placeholder="Politica de cobranza">
         <select  className="form-control" name='periodo'  onChange={handleChange} >
            <option 
              value='' selected disabled
            >
              Selecione el periodo
            </option>
            
            <option 
              value='Anual' 
            >
              Anual
            </option>
            
            <option 
              value='Semestral' 
            >
              Semestral
            </option>

            <option 
              value ='Trimestral' 
            >
              Trimestral
            </option>
            
            <option 
              value='Mensual' 
            >
              Mensual
            </option>
          
          </select>

          </Form.Group>

          <Form.Group className="mb-3" controlId="politicaCobranza">
            <Form.Control  
              type="text"  
              name='politicaCobranza'
              onChange={handleChange} 
              placeholder="Politica de cobranza" />
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

    </>
  )
}
