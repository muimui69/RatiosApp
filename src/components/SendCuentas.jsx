import { useState,useEffect } from 'react';
import {useAuth} from '../context/AuthContext';
import { useNavigate ,useParams} from 'react-router-dom';
import {db} from '../../firebase/FirebaseConfig';
import { collection,onSnapshot} from 'firebase/firestore';

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
      navigate('/userlist');
      let newUser = selectInput;
      newUser = ({...selectInput,gestion:`${gestionSelect}`,periodo:`${label}`});
      await userAddCuentas(newUser);
    } catch (err) {
      console.log(err);
    }

   /*if(params.id){
      let newUser = user;
      newUser = ({...user,gestion,periodo});
      userUpdateDatabaseEmpresa(newUser,params.id);
    }else{
      const uid = getIdCurrentUser();
      let newUser = user;
      newUser = ({...user,uid,gestion,periodo});
      userAddDatabaseEmpresa(newUser);
    }
    navigate('/userlist');
*/
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

  const renderInputs = (periodo) =>{

    switch (periodo) {
      case 'Mensual':
        return(
          <>
            <br/>
            <Form.Control 
              type='text' 
              name='enero'
              onChange={handleChangeInput}
              placeholder='Enero' 
              className='mb-3'
            />

            <Form.Control 
              type='text' 
              name='febrero'
              onChange={handleChangeInput}
              placeholder='Febrero' 
              className='mb-3'
            />

            <Form.Control 
              type='text' 
              name='marzo'
              onChange={ handleChangeInput}
              placeholder='Marzo' 
              className='mb-3'
            />

            <Form.Control 
              type='text' 
              name='abril'
              onChange={ handleChangeInput}
              placeholder='Abril' 
              className='mb-3'
            />

            <Form.Control 
              type='text' 
              name='mayo'
              onChange={ handleChangeInput}
              placeholder='Mayo' 
              className='mb-3'
            />

            <Form.Control 
              type='text' 
              name='junio'
              onChange={ handleChangeInput}
              placeholder='Junio' 
              className='mb-3'
            />

            <Form.Control 
              type='text' 
              name='julio'
              onChange={ handleChangeInput}
              placeholder='Julio' 
              className='mb-3'
            />

            <Form.Control 
              type='text' 
              name='agosto'
              onChange={ handleChangeInput}
              placeholder='Agosto' 
              className='mb-3'
            />

            <Form.Control 
              type='text' 
              name='septiembre'
              onChange={ handleChangeInput}
              placeholder='Septiembre' 
              className='mb-3'
            />

            <Form.Control 
              type='text' 
              name='octubre'
              onChange={ handleChangeInput}
              placeholder='Octubre' 
              className='mb-3'
            />

            <Form.Control 
              type='text' 
              name='noviembre'
              onChange={ handleChangeInput}
              placeholder='Noviembre' 
              className='mb-3'
            />

            <Form.Control 
              type='text' 
              name='diciembre'
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
              name='1 trimestre'
              onChange={ handleChangeInput}
              placeholder='Primer trimestre' 
            />

            <Form.Control 
              className='mb-3'
              type='text' 
              name='2 trimestre'
              onChange={ handleChangeInput}
              placeholder='Segundo Trimestre' 
            />

            <Form.Control 
              className='mb-3'
              type='text' 
              name='3 trimestre'
              onChange={ handleChangeInput}
              placeholder='Tercer Trimestre' 
            />

            <Form.Control 
              className='mb-3'
              type='text' 
              name='4 trimestre'
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
              name='1 semestre'
              placeholder="Primer semestre" 
            />
            
            <Form.Control 
              className="mb-3"
              type="text" 
              onChange={ handleChangeInput} 
              name='2 semestre'
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
      //setSelectInput(res.data());
    }else{
      //setSelectInput(initialState);
    }
  }

  useEffect(() => {
    getUserGestionPeriodo();
    //getListByid(params.id);
  }, [/*params.id*/])
    
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
                <select name='gestion' className="form-control" onChange={handleChange}>
                  <option value="" selected disabled  >Gestión</option>
                  {
                    gestion.map( ({value}) => 
                      <option value={value}> {value} </option>
                    )
                  }
                </select>
              </Form.Group>                   

              { 
                isChange &&
                <>
                  <Card.Header>Periodo {label} </Card.Header>
                  <select name='tipoDeCalculo' className="form-control" onChange={handleChangeInput}>
                    <option value='' selected disabled  >Cuenta a registrar</option>
                    <option value='Cuentas por cobrar'>Cuentas por cobrar</option>
                    <option value='Cuentas por pagar'>Cuentas por pagar</option>
                  </select>

                   {renderInputs(label)}

                  <Button variant="primary" type="submit">
                    {/* (params.id)? 'Editar':'Enviar datos'*/}
                    Enviar datos
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
