import { useState,useEffect } from 'react';
import {useAuth} from '../context/AuthContext';
import { useNavigate ,useParams} from 'react-router-dom';

//bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';

export const SendCuentas = () => {

  //estados para el manejo de datos a la hora de guardar
  const [gestionSelect,setGestionSelect]=useState([{}])
  const [label,setLabel]=useState('');
  const [selectInput,setSelectInput] = useState([{}])  


  const [isChange,setIsChange]=useState(false);

 //estados para el manejo de datos a la hora de editar
  const [isChangeEdit,setIsChangeEdit] =useState(false);
  const [changeEditSelect,setChangeEditSelect] = useState([{}])  
  const [pruebaCopia,setPruebaCopia] = useState({})  

  const [validCampo,setValidCampo] = useState(true);

  const {userAddCuentas,userUpdateCuentas,userAddBool, boolCuenta,gestionCurrent,userCounts} =useAuth();
  const navigate = useNavigate();
  const params = useParams()

  const handleChange = (e) => {
    const value = e.target.value;
    setGestionSelect(value);
    gestionCurrent.map( ({gestion,periodo}) =>{
      if(value===gestion){
        setLabel(periodo);
        setIsChange(true);
      }
    });
  };

  const handleChangeInput =  ({target:{name,value}}) => {
    setSelectInput(
      {...selectInput, [name]:value }   
    );
  };

  const handlePrueba =({target:{value}})=>{
    if(value==='cuentasPorCobrar'){
      changeEditSelect.forEach( doc=>{
        if(doc.nombreCuenta ==='cuentasPorCobrar'){
          setPruebaCopia({...doc})
        }
      })
    }

    if(value==='ventasAlCredito'){
      changeEditSelect.forEach( doc=>{
        if(doc.nombreCuenta ==='ventasAlCredito'){
          setPruebaCopia({...doc})
        }
      })
    }
    setIsChangeEdit(true);
  }
  
  const handleChangeEdit =  ({target:{name,value}}) => {
    setPruebaCopia({...pruebaCopia,[name]:value})
  }

  const sendBool = async(cuenta)=>{
      switch (cuenta) {
        case 'cuentasPorCobrar':
          let cuentas = ({
            cuentasPorCobrar:true,
          });
          await userAddBool({...cuentas,gestion:`${gestionSelect}`,nombreCuenta});
          break;
      
        case 'ventasAlCredito':
          let cuentas2 = ({
            ventasAlCredito:true,
          });
          await userAddBool({...cuentas2,gestion:`${gestionSelect}`,nombreCuenta});
        break;
        default:
          break;
      }
  }

  const validInputs = (vecTarget) =>{
    let res = false;
    vecTarget.forEach( ({name,value})=>{
      if(name!=='gestion' && name!=='nombreCuenta' && name!=='button'){
        if(value.trim().length>0){
          res = true;
        }else{
          res = false;
        }
      }
    })
    return res;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const targ = [...e.target];
    const valid = validInputs(targ)
    if(valid){
      setValidCampo(true);
      const nombreCuenta = e.target[1].value;
      try {
        if(params.id){
          await userUpdateCuentas(pruebaCopia,pruebaCopia.id)
        }else{
          let newUser = selectInput;
          let pol;
          gestionCurrent.map( ({gestion,politicaCobranza}) =>{
            if(gestion===gestionSelect){
              pol = politicaCobranza;
            }
          })
          newUser = ({...selectInput,gestion:`${gestionSelect}`,periodo:`${label}`,politica:`${pol}`});
          await userAddCuentas(newUser);
          await sendBool(nombreCuenta);
        }
        navigate('/userlist');
      } catch (err) {
        console.log(err);
      }
    }else{
      setValidCampo(false);
    }
  };

  const renderInputs = (periodo) =>{

    switch (periodo) {
      case 'Mensual':
        return(
          <>
            <br/>
            <Form.Control 
              type='text' 
              name='enero'
              value={ (selectInput.enero)?selectInput.enero:''}
              onChange={handleChangeInput}
              placeholder='Enero' 
              className='mb-3'
            />

            <Form.Control 
              type='text' 
              name='febrero'
              value={ (selectInput.febrero)?selectInput.febrero:''}
              onChange={handleChangeInput}
              placeholder='Febrero' 
              className='mb-3'
            />

            <Form.Control 
              type='text' 
              name='marzo'
              value={ (selectInput.marzo)?selectInput.marzo:''}
              onChange={ handleChangeInput}
              placeholder='Marzo' 
              className='mb-3'
            />

            <Form.Control 
              type='text' 
              name='abril'
              value={ (selectInput.abril)?selectInput.abril:''}
              onChange={ handleChangeInput}
              placeholder='Abril' 
              className='mb-3'
            />

            <Form.Control 
              type='text' 
              name='mayo'
              value={ (selectInput.mayo)?selectInput.mayo:''}
              onChange={ handleChangeInput}
              placeholder='Mayo' 
              className='mb-3'
            />

            <Form.Control 
              type='text' 
              name='junio'
              value={ (selectInput.junio)?selectInput.junio:''}
              onChange={ handleChangeInput}
              placeholder='Junio' 
              className='mb-3'
            />

            <Form.Control 
              type='text' 
              name='julio'
              value={ (selectInput.julio)?selectInput.julio:''}
              onChange={ handleChangeInput}
              placeholder='Julio' 
              className='mb-3'
            />

            <Form.Control 
              type='text' 
              name='agosto'
              value={ (selectInput.agosto)?selectInput.agosto:''}
              onChange={ handleChangeInput}
              placeholder='Agosto' 
              className='mb-3'
            />

            <Form.Control 
              type='text' 
              name='septiembre'
              value={ (selectInput.septiembre)?selectInput.septiembre:''}
              onChange={ handleChangeInput}
              placeholder='Septiembre' 
              className='mb-3'
            />

            <Form.Control 
              type='text' 
              name='octubre'
              value={ (selectInput.octubre)?selectInput.octubre:''}
              onChange={ handleChangeInput}
              placeholder='Octubre' 
              className='mb-3'
            />

            <Form.Control 
              type='text' 
              name='noviembre'
              value={ (selectInput.noviembre)?selectInput.noviembre:''}
              onChange={ handleChangeInput}
              placeholder='Noviembre' 
              className='mb-3'
            />

            <Form.Control 
              type='text' 
              name='diciembre'
              value={ (selectInput.diciembre)?selectInput.diciembre:''}
              onChange={ handleChangeInput}
              placeholder='Diciembre' 
              className='mb-3'
            />

          </>
        )
      break;

      case 'Trimestral':
        return(
          <>
            <br/>
            <Form.Control 
              className='mb-3'
              type='text' 
              name='primerTrimestre'
              value={ (selectInput.primerTrimestre)?selectInput.primerTrimestre:''}
              onChange={ handleChangeInput}
              placeholder='Primer trimestre' 
            />

            <Form.Control 
              className='mb-3'
              type='text' 
              name='segundoTrimestre'
              value={ (selectInput.segundoTrimestre)?selectInput.segundoTrimestre:''}
              onChange={ handleChangeInput}
              placeholder='Segundo Trimestre' 
            />

            <Form.Control 
              className='mb-3'
              type='text' 
              name='tercerTrimestre'
              value={ (selectInput.tercerTrimestre)?selectInput.tercerTrimestre:''}
              onChange={ handleChangeInput}
              placeholder='Tercer Trimestre' 
            />

            <Form.Control 
              className='mb-3'
              type='text' 
              name='cuartoTrimestre'
              value={ (selectInput.cuartoTrimestre)?selectInput.cuartoTrimestre:''}
              onChange={ handleChangeInput}
              placeholder='Cuarto Trimestre' 
            />
         </>
        )
      break;

      case 'Semestral':
        return(
          <>
            <br/>
            <Form.Control 
              className="mb-3"
              type="text"   
              onChange={ handleChangeInput} 
              name='primerSemestre'
              value={ (selectInput.primerSemestre)?selectInput.primerSemestre:''}
              placeholder="Primer semestre" 
            />
            
            <Form.Control 
              className="mb-3"
              type="text" 
              onChange={ handleChangeInput} 
              name='segundoSemestre'
              value={ (selectInput.segundoSemestre)?selectInput.segundoSemestre:''}
              placeholder="Segundo semestre" 
            />
         </>
        )
      break;

      case 'Anual':
        return(
          <>
            <br/>
            <Form.Control 
              className="mb-3"
              type="text"   
              onChange={ handleChangeInput} 
              name='anual'
              value={ (selectInput.anual)?selectInput.anual:''}
              placeholder="Monto" 
            />
          </>
        )
      break;
      default:
        break;
    }

  }

  const renderInputsEdit = (periodo) =>{
    switch (periodo) {
      case 'Mensual':
        return(
          <>
            <br/>
            <Form.Control 
              type='text' 
              name='enero'
              value={ (pruebaCopia.enero)?pruebaCopia.enero:''}
              onChange={handleChangeEdit}
              placeholder='Enero' 
              className='mb-3'
            />

            <Form.Control 
              type='text' 
              name='febrero'
              value={ (pruebaCopia.febrero)?pruebaCopia.febrero:''}
              onChange={handleChangeEdit}
              placeholder='Febrero' 
              className='mb-3'
            />

            <Form.Control 
              type='text' 
              name='marzo'
              value={ (pruebaCopia.marzo)?pruebaCopia.marzo:''}
              onChange={ handleChangeEdit}
              placeholder='Marzo' 
              className='mb-3'
            />

            <Form.Control 
              type='text' 
              name='abril'
              value={ (pruebaCopia.abril)?pruebaCopia.abril:''}
              onChange={ handleChangeEdit}
              placeholder='Abril' 
              className='mb-3'
            />

            <Form.Control 
              type='text' 
              name='mayo'
              value={ (pruebaCopia.mayo)?pruebaCopia.mayo:''}
              onChange={ handleChangeEdit}
              placeholder='Mayo' 
              className='mb-3'
            />

            <Form.Control 
              type='text' 
              name='junio'
              value={ (pruebaCopia.junio)?pruebaCopia.junio:''}
              onChange={ handleChangeEdit}
              placeholder='Junio' 
              className='mb-3'
            />

            <Form.Control 
              type='text' 
              name='julio'
              value={ (pruebaCopia.julio)?pruebaCopia.julio:''}
              onChange={ handleChangeEdit}
              placeholder='Julio' 
              className='mb-3'
            />

            <Form.Control 
              type='text' 
              name='agosto'
              value={ (pruebaCopia.agosto)?pruebaCopia.agosto:''}
              onChange={ handleChangeEdit}
              placeholder='Agosto' 
              className='mb-3'
            />

            <Form.Control 
              type='text' 
              name='septiembre'
              value={ (pruebaCopia.septiembre)?pruebaCopia.septiembre:''}
              onChange={ handleChangeEdit}
              placeholder='Septiembre' 
              className='mb-3'
            />

            <Form.Control 
              type='text' 
              name='octubre'
              value={ (pruebaCopia.octubre)?pruebaCopia.octubre:''}
              onChange={ handleChangeEdit}
              placeholder='Octubre' 
              className='mb-3'
            />

            <Form.Control 
              type='text' 
              name='noviembre'
              value={ (pruebaCopia.noviembre)?pruebaCopia.noviembre:''}
              onChange={ handleChangeEdit}
              placeholder='Noviembre' 
              className='mb-3'
            />

            <Form.Control 
              type='text' 
              name='diciembre'
              value={ (pruebaCopia.diciembre)?pruebaCopia.diciembre:''}
              onChange={ handleChangeEdit}
              placeholder='Diciembre' 
              className='mb-3'
            />

          </>
        )
      break;

      case 'Trimestral':
        return(
          <>
            <br/>
            <Form.Control 
              className='mb-3'
              type='text' 
              name='primerTrimestre'
              value={ (pruebaCopia.primerTrimestre)?pruebaCopia.primerTrimestre:''}
              onChange={ handleChangeEdit}
              placeholder='Primer trimestre' 
            />

            <Form.Control 
              className='mb-3'
              type='text' 
              name='segundoTrimestre'
              value={ (pruebaCopia.segundoTrimestre)?pruebaCopia.segundoTrimestre:''}
              onChange={ handleChangeEdit}
              placeholder='Segundo Trimestre' 
            />

            <Form.Control 
              className='mb-3'
              type='text' 
              name='tercerTrimestre'
              value={ (pruebaCopia.tercerTrimestre)?pruebaCopia.tercerTrimestre:''}
              onChange={ handleChangeEdit}
              placeholder='Tercer Trimestre' 
            />

            <Form.Control 
              className='mb-3'
              type='text' 
              name='cuartoTrimestre'
              value={ (pruebaCopia.cuartoTrimestre)?pruebaCopia.cuartoTrimestre:''}
              onChange={ handleChangeEdit}
              placeholder='Cuarto Trimestre' 
            />
         </>
        )
      break;

      case 'Semestral':
        return(
          <>
            <br/>
            <Form.Control 
              className="mb-3"
              type="text"   
              onChange={ handleChangeEdit} 
              name='primerSemestre'
              value={ (pruebaCopia.primerSemestre)?pruebaCopia.primerSemestre:''}
              placeholder="Primer semestre" 
            />
            
            <Form.Control 
              className="mb-3"
              type="text" 
              onChange={ handleChangeEdit} 
              name='segundoSemestre'
              value={ (pruebaCopia.segundoSemestre)?pruebaCopia.segundoSemestre:''}
              placeholder="Segundo semestre" 
            />
         </>
        )
      break;

      case 'Anual':
        return(
          <>
            <br/>
            <Form.Control 
              className="mb-3"
              type="text"   
              onChange={handleChangeEdit} 
              name='anual'
              value={(pruebaCopia.anual)?pruebaCopia.anual:''}
              placeholder="Monto" 
            />
          </>
        )
      break;
      default:
        break;
    }
  }

  const getObject = (vectorBool) =>{
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
 
      if(cuentasPorCobrar && ventasAlCredito){
        return (
          <>

          </>
        );
      }

      if(!cuentasPorCobrar && !ventasAlCredito){
        return (
          <>
            <select name='nombreCuenta' className="form-control" onChange={handleChangeInput}>
              <option value='' selected disabled  >Cuenta a registrar</option>
              <option value='cuentasPorCobrar'>Cuentas por cobrar</option>
              <option value='ventasAlCredito'>Ventas al credito</option>
            </select>
          </>
        );
      }


      if(cuentasPorCobrar){
        return(
          <>
            <select name='nombreCuenta' className="form-control" onChange={handleChangeInput}>
              <option value='' selected disabled  >Cuenta a registrar</option>
              <option value='' disabled >Cuentas por cobrar</option>
              <option value='ventasAlCredito'>Ventas al credito</option>
            </select>
          </>
        )
      }

      if(ventasAlCredito){
        return(
          <>
            <select name='nombreCuenta' className="form-control" onChange={handleChangeInput}>
              <option value='' selected disabled  >Cuenta a registrar</option>
              <option value='cuentasPorCobrar' >Cuentas por cobrar</option>
              <option value='' disabled >Ventas al credito</option>
            </select>
          </>
        )
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

  const renderOnSend =() =>{
    return (
      isChange &&
      <>
        <Card.Header>Periodo {label} </Card.Header>

        {getObject(boolCuenta)}

        {
          (getValid(boolCuenta))?
            <>
              <br/>
              <Alert key='success' variant='success'>
                Usted ya ha registrado las cuentas de esta gestion.
              </Alert>
            </>
          :
            <>
              {renderInputs(label)}
              
              {
                !validCampo &&   
                <>
                  <br/>
                  <Alert variant='danger'>
                    Por favor rellene todos los campos.
                  </Alert>
                </>
              }

              <Button name='button' variant="primary" type="submit">
                Enviar Datos
              </Button>
            </>
        }
      </>
    )
  }

  const renderOnEdit =() =>{
    return (
      isChange &&
      <>
        <Card.Header>Periodo {changeEditSelect[0].periodo} </Card.Header>

        <select name='nombreCuenta' className="form-control" onChange={handlePrueba}>
          <option value='' selected disabled  >Cuenta a editar</option>
          <option value='cuentasPorCobrar'>Cuentas por cobrar</option>
          <option value='ventasAlCredito'>Ventas al credito</option>
        </select>

        {
          isChangeEdit  && 
          <>
              {renderInputsEdit(changeEditSelect[0].periodo)}

              {
                !validCampo &&   
                <>
                  <br/>
                  <Alert variant='danger'>
                    Por favor rellene todos los campos.
                  </Alert>
                </>
              }

              <Button name='button' variant="primary" type="submit">
                Editar
              </Button>
            </>
        }
      </>
    )
  }

  useEffect(() => {
    const userFound = params.id;
    if(userFound){
      gestionCurrent.map(({id,gestion})=>{
        const gestionId = gestion;
        if(id===userFound){
          const docs = [];
          userCounts.map( docE =>{
            const {gestion} = docE;
            if(gestion===gestionId){
              docs.push({...docE})
            }
          })
          setChangeEditSelect(docs);
          setIsChange(true);
        }
      })
    }else{
      setSelectInput(selectInput);
    }
  }, [params.id])
    
  return(
    <>
      <br />
      <Container>
        <Row className="justify-content-md-center">
          <Col sm lg="4">
          <Card className="text-center xs" >
          
          <Card.Header>Seleccione la Gestion</Card.Header>

          <Card.Body>

            <Form className="mb-3" onSubmit={handleSubmit} >
            
             <Form.Group className="mb-3">
                {
                  (params.id)?
                    <select name='gestion' className="form-control">
                      <option value={ changeEditSelect[0].gestion} selected disabled>{changeEditSelect[0].gestion}</option>
                    </select>
                  :
                    <select name='gestion' className="form-control" onChange={handleChange}>
                      <option value="" selected disabled  >Gestión</option>
                      {
                        gestionCurrent.map( ({gestion}) => 
                          <option key={gestion} value={gestion}> {gestion} </option>
                        )
                      }
                    </select>
                }
              </Form.Group>                   
       
                {
                  (params.id)?
                    renderOnEdit()
                  :
                    renderOnSend()
                }
            </Form>

          </Card.Body>

          <Card.Footer className="text-muted">Los datos se guardarán en la base de datos</Card.Footer>
         
          </Card>
            </Col>
          </Row>

        </Container>
 </>
  )
}
