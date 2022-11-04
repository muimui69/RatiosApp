import { useState,useEffect } from 'react';
import {useAuth} from '../context/AuthContext';
import { useNavigate ,useParams} from 'react-router-dom';
import {db} from '../../firebase/FirebaseConfig';
import { collection,onSnapshot,getDoc,doc} from 'firebase/firestore';

//bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export const SendCuentas = () => {

  const [gestion,setGestion]=useState([{
    value:'',
  }])

  const [gestionSelect,setGestionSelect]=useState([{}])


  const [periodo,setPeriodo]=useState([{
    value:'',
    label:''
  }])

  const [label,setLabel]=useState('');

  const [isChange,setIsChange]=useState(false);

  const [
    userSelectGestionPeriodo,
    setUserSelectGestionPeriodo] = useState({})
  
  const [selectInput,setSelectInput] = useState({})
	const [politica,setPolitica] = useState([]);

  const {userAddCuentas,getIdCurrentUser,userUpdateCuentas} =useAuth();
  const navigate = useNavigate();
  const params = useParams()

  const handleChange = (e) => {
    const value = e.target.value;
    setGestionSelect(value);
    userSelectGestionPeriodo.map( ({gestion,periodo}) =>{
        if(value===gestion){
          setLabel(periodo);
          setIsChange(true);
        }
    });
  };

  const handleChangeInput =  ({target:{name,value}}) => {
    setSelectInput({...selectInput,[name]:value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if(params.id){
        await userUpdateCuentas(selectInput,params.id)
      }else{
        let newUser = selectInput;
        let pol;
        politica.map( ({gestion,politicaCobranza}) =>{
          if(gestion===gestionSelect){
            pol=politicaCobranza;
          }
        })
        newUser = ({...selectInput,gestion:`${gestionSelect}`,periodo:`${label}`,politica:`${pol}`});
        await userAddCuentas(newUser);
      }
      navigate('/userlist');
    } catch (err) {
      console.log(err);
    }
  };

  const getUserGestionPeriodo = async() => {
      onSnapshot(collection(db, 'gestion-periodo'), (test) => {
        const periodoOptions =[];
        const gestionOptions =[];
        const docs =[];
        test.forEach( doc =>{
          const {uid,periodo,gestion} = doc.data();
          if(uid === getIdCurrentUser()){
            gestionOptions.push(
              {value:`${gestion}`}
            )   
            periodoOptions.push(
              {value:`${periodo}`}
            )
            docs.push({...doc.data()});
          }
        })
        setGestion(gestionOptions);
        //setPeriodo(periodoOptions);
        setUserSelectGestionPeriodo(docs);
      });
  };

  
  const getUserPoliticaCorbranza = async() => {
    onSnapshot(collection(db, 'gestion-periodo'), (test) => {
      const docs =[];
      test.forEach( doc =>{
        const {uid} = doc.data();
        if(uid === getIdCurrentUser()){
          docs.push({...doc.data()})
        }
      })
      setPolitica(docs);
    });
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

  const getListByid = async(id) =>{
    const res = await getDoc(doc(db, 'cuentas', `${id}`));
    const userFound = params.id;
    if(userFound){
      setSelectInput(res.data());
      setIsChange(true);
    }else{
      setSelectInput(selectInput);
    }
  }

  useEffect(() => {
    getUserGestionPeriodo();
  	getUserPoliticaCorbranza();
    getListByid(params.id);
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
                    <select name='gestion' className="form-control" onChange={handleChange}>
                      <option value={`${selectInput.gestion}`} selected disabled>{selectInput.gestion}</option>
                    </select>
                  :
                    <select name='gestion' className="form-control" onChange={handleChange}>
                      <option value="" selected disabled  >Gestión</option>
                      {
                        gestion.map( ({value}) => 
                          <option key={value} value={value}> {value} </option>
                        )
                      }
                    </select>
                }
              </Form.Group>                   

              { 
                isChange &&
                <>
                  <Card.Header>Periodo {selectInput.periodo} </Card.Header>
                  
                  {
                    (params.id)?
                      <select name='nombreCuenta' className="form-control" onChange={handleChangeInput}>
                        <option value={`${selectInput.nombreCuenta}`} selected disabled  >{selectInput.nombreCuenta}</option>
                      </select>
                    : 
                    <select name='nombreCuenta' className="form-control" onChange={handleChangeInput}>
                      <option value='' selected disabled  >Cuenta a registrar</option>
                      <option value='Cuentas por cobrar'>Cuentas por cobrar</option>
                      <option value='Cuentas por pagar'>Cuentas por pagar</option>
                    </select>
                  }
                   { (params.id)?renderInputs(selectInput.periodo):renderInputs(label)}

                  <Button variant="primary" type="submit">
                    {(params.id)? 'Editar':'Enviar datos'}
                  </Button>
                </>
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
