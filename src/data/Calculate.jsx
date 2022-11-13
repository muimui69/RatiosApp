import {useAuth} from '../context/AuthContext';
import {useNavigate} from 'react-router-dom';
import{useState}from 'react';
import {calculateUser} from '../data/formulas';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';

export const Calculate = () => {

  const [userCalculate,setUserCalculate] = useState({
    gestion:'',
    selectCalculate:''
  });
 
  const {gestionCurrent,boolCalculate,boolCuenta,getCuentasOfGestion,dataCalculate,userAddCuentasOfGestion} = useAuth();
 
  const [isChange,setIsChange] = useState(false); 
  const [gestionSelect,setGestionSelect]=useState([{}])

  const navigate = useNavigate();

  const handleChangeGestion = async(e)=>{
    const value = e.target.value;
    setGestionSelect(value);
    await getCuentasOfGestion(value);
    gestionCurrent.map( ({gestion}) =>{
      if(value===gestion){
        setIsChange(true);
      }
    });
  }

  const handleChange = ({target:{name,value}}) => {
    setUserCalculate({...userCalculate,[name]:value});
  };

  const sendBool = async(cuenta)=>{
    switch (cuenta) {
      case 'ratioRotacionCuentasPorCobrar':
        let cuentas = ({
          ratioRotacionCuentasPorCobrar:true,
        });
        await userAddBool({...cuentas,gestion:`${gestionSelect}`,nombreCuenta});
        break;
    
      case 'ratioPeriodoPromedioDeCobro':
        let cuentas2 = ({
          ratioPeriodoPromedioDeCobro:true,
        });
        await userAddBool({...cuentas2,gestion:`${gestionSelect}`,nombreCuenta});
      break;
      default:
        break;
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nombreCuenta = e.target[1].value;
    const resultado = calculateUser(nombreCuenta,dataCalculate[0].periodo,dataCalculate);
    
    const gestion = dataCalculate[0].gestion;
    const uid = dataCalculate[0].uid;
    const values = ({
      nombreCuenta:`${resultado}`,
      gestion,
      uid,
    })
    await userAddCuentasOfGestion({...values});
    await sendBool(nombreCuenta);
  };


  const getObject = (vectorBool) =>{
    let newChange = ({
      ratioRotacionCuentasPorCobrar:false,
      ratioPeriodoPromedioDeCobro:false
    })

    vectorBool.forEach( ({ratioRotacionCuentasPorCobrar,ratioPeriodoPromedioDeCobro,gestion}) => {
      if(gestion===gestionSelect){
        if(ratioRotacionCuentasPorCobrar){
          newChange = ({...newChange,ratioRotacionCuentasPorCobrar})
        }else{
          newChange = ({...newChange,ratioPeriodoPromedioDeCobro})
        }
      }
    })

    const {ratioRotacionCuentasPorCobrar,ratioPeriodoPromedioDeCobro} = newChange;
 
      if(ratioRotacionCuentasPorCobrar && ratioPeriodoPromedioDeCobro){
        return (
          <>
          </>
        );
      }

      if(!ratioRotacionCuentasPorCobrar && !ratioPeriodoPromedioDeCobro){
        return (
          <>
            <Form.Group className="mb-3" controlId="periodo" placeholder="Politica de cobranza">
              <select  className="form-control" name='selectCalculate'  onChange={handleChange} >
                  <option 
                    value='' selected disabled
                  >
                    Selecione el calculo a realizar
                  </option>
                  
                  <option 
                    value='ratioRotacionCuentasPorCobrar' 
                  >
                    Ratio rotacion cuentas por cobrar
                  </option>
                  
                  <option 
                    value='ratioPeriodoPromedioDeCobro' 
                  >
                    Ratio periodo promedio de cobro
                  </option>

                </select>
              </Form.Group>
          </>
        );
      }


      if(ratioRotacionCuentasPorCobrar){
        return (
          <>
            <Form.Group className="mb-3" controlId="periodo" placeholder="Politica de cobranza">
              <select  className="form-control" name='selectCalculate'  onChange={handleChange} >
                  <option 
                    value='' selected disabled
                  >
                    Selecione el calculo a realizar
                  </option>
                  
                  <option 
                    value='' disabled
                  >
                    Ratio rotacion cuentas por cobrar
                  </option>
                  
                  <option 
                    value='ratioPeriodoPromedioDeCobro' 
                  >
                    Ratio periodo promedio de cobro
                  </option>

                </select>
              </Form.Group>
          </>
        );
      }

      if(ratioPeriodoPromedioDeCobro){
        return (
          <>
            <Form.Group className="mb-3" controlId="periodo" placeholder="Politica de cobranza">
              <select  className="form-control" name='selectCalculate'  onChange={handleChange} >
                  <option 
                    value='' selected disabled
                  >
                    Selecione el calculo a realizar
                  </option>
                  
                  <option 
                    value='ratioRotacionCuentasPorCobrar' 
                  >
                    Ratio rotacion cuentas por cobrar
                  </option>
                  
                  <option 
                    value='' disabled
                  >
                    Ratio periodo promedio de cobro
                  </option>

                </select>
              </Form.Group>
          </>
        );
      }
  }

  const getValid = (vectorBool) =>{

    let newChange = ({
      cuentasPorCobrar:false,
      ventasAlCredito:false
    })

    vectorBool.forEach( ({ventasAlCredito,cuentasPorCobrar,gestion}) => {
      if(gestion===gestionSelect){
        if(cuentasPorCobrar){
          newChange = ({...newChange,cuentasPorCobrar})
        }else{
          newChange = ({...newChange,ventasAlCredito})
        }
      }
    })

    const {ventasAlCredito,cuentasPorCobrar} = newChange;

    if(cuentasPorCobrar  && ventasAlCredito){
      return true;
    }else{
      return false;
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

          <Form.Group className="mb-3">
            <select name='gestion' className="form-control" onChange={handleChangeGestion}>
              <option value="" selected disabled>Seleccione la gestion</option>
              {
                gestionCurrent.map( ({gestion}) => 
                  <option key={gestion} value={gestion}> {gestion} </option>
                )
              }
            </select>
          </Form.Group>

          {
            isChange &&  
            <>
              {
                (!getValid(boolCuenta))?
                  <>
                    <br/>
                    <Alert variant='warning'>
                      Usted no puede realizar el calculo de esta gestion.<br/>
                      No ha registrado las <b> cuentas por cobrar</b>  o las <b> ventas al credito</b>
                    </Alert>
                  </>
                :
                <>
                  {getObject(boolCalculate)}
                  <Button variant="primary" id='login' type="submit">
                    Calcular
                  </Button>
              </>
              }
            </>
          }    
         
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


