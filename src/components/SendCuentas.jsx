import { useState,useEffect } from 'react';
import {useAuth} from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import {db} from '../../firebase/FirebaseConfig';
import { collection,onSnapshot} from 'firebase/firestore';
import Select from 'react-select';
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
    label:''
  }])

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

  const {userAddCuentas} =useAuth();
  const navigate = useNavigate();
  const {getIdCurrentUser} = useAuth();

  const handleChange = (e) => {
    const value = e.value;
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

  const tipoDato = [ 
    {value:'Cuentas por cobrar',label:'Cuentas por cobrar'},
    {value:'Ventas al credito',label:'Ventas al credito'} 
  ]

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      navigate('/userlist');
      const gestion =  e.target[0].parentElement.previousElementSibling.textContent;
      const tipoCalculo = e.target[1].parentElement.previousElementSibling.textContent;
      let newCreate = selectInput;
      let periodo = label;
      newCreate = ({...selectInput,gestion,periodo,tipoCalculo});
      await userAddCuentas(newCreate);
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
              {value:`${gestion}`, label:`${gestion}`}
            )
            periodoOptions.push(
              {value:`${periodo}`, label:`${periodo}`}
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

              <div className='input-form'>
                   <input 
                       type='text' 
                       name='enero'
                       onChange={handleChangeInput}
                       placeholder='Enero' 
                       className='input-text'
                   >
                   </input>
               </div> 

                <div className='input-form'>
                   <input 
                       type='text' 
                       name='febrero'
                       onChange={handleChangeInput}
                       placeholder='Febrero' 
                       className='input-text'
                   >
                   </input>
               </div> 
    
               <div className='input-form'>
                   <input 
                       type='text' 
                       name='marzo'
                       onChange={ handleChangeInput}
                       placeholder='Marzo' 
                       className='input-text'
                   >
                   </input>
               </div> 
               <div className='input-form'>
                   <input 
                       type='text' 
                       name='abril'
                       onChange={ handleChangeInput}
                       placeholder='Abril' 
                       className='input-text'
                   >
                   </input>
               </div> 
               <div className='input-form'>
                   <input 
                       type='text' 
                       name='mayo'
                       onChange={ handleChangeInput}
                       placeholder='Mayo' 
                       className='input-text'
                   >
                   </input>
               </div> 
               <div className='input-form'>
                   <input 
                       type='text' 
                       name='junio'
                       onChange={ handleChangeInput}
                       placeholder='Junio' 
                       className='input-text'
                   >
                   </input>
               </div> 
               <div className='input-form'>
                   <input 
                       type='text' 
                       name='julio'
                       onChange={ handleChangeInput}
                       placeholder='Julio' 
                       className='input-text'
                   >
                   </input>
               </div> 
               <div className='input-form'>
                   <input 
                       type='text' 
                       name='agosto'
                       onChange={ handleChangeInput}
                       placeholder='Agosto' 
                       className='input-text'
                   >
                   </input>
               </div> 
               <div className='input-form'>
                   <input 
                       type='text' 
                       name='septiembre'
                       onChange={ handleChangeInput}
                       placeholder='Septiembre' 
                       className='input-text'
                   >
                   </input>
               </div> 
               <div className='input-form'>
                   <input 
                       type='text' 
                       name='octubre'
                       onChange={ handleChangeInput}
                       placeholder='Octubre' 
                       className='input-text'
                   >
                   </input>
               </div> 
               <div className='input-form'>
                   <input 
                       type='text' 
                       name='noviembre'
                       onChange={ handleChangeInput}
                       placeholder='Noviembre' 
                       className='input-text'
                   >
                   </input>
               </div> 
               <div className='input-form'>
                   <input 
                       type='text' 
                       name='diciembre'
                       onChange={ handleChangeInput}
                       placeholder='Diciembre' 
                       className='input-text'
                   >
                   </input>
               </div> 
               <button className='button-form-login'>
                  Crear
               </button>

               <Container>
              <Row className="justify-content-md-center">
                <Col sm lg="4">
                <Card className="text-center xs" >
              <Card.Header>Periodo Mensual</Card.Header>
              <Card.Body>
                <Form className="mb-3">



                <Form.Group className="mb-3" controlId="periodo" placeholder="Politica de cobranza">
                    <select class="form-control" id="periodo" placeholder='Tipo de dato'>
                    <option value="" selected disabled  >Cuenta a registrar</option>
                      <option>Cuentas por cobrar</option>
                      <option>Cuentas por pagar</option>
                    </select>
                 </Form.Group>   
                 <Form.Group className="mb-3" controlId="enero">
                    <Form.Control type="text" placeholder="Enero" />
                </Form.Group>  
                <Form.Group className="mb-3" controlId="febrero">
                    <Form.Control type="text" placeholder="Febrero" />
                </Form.Group>                                
                <Form.Group className="mb-3" controlId="marzo">
                    <Form.Control type="text" placeholder="Marzo" />
                </Form.Group>   
                <Form.Group className="mb-3" controlId="abril">
                    <Form.Control type="text" placeholder="Abril" />
                </Form.Group>                   
                <Form.Group className="mb-3" controlId="mayo">
                    <Form.Control type="text" placeholder="Mayo" />
                </Form.Group>  
                <Form.Group className="mb-3" controlId="junio">
                    <Form.Control type="text" placeholder="Junio" />
                </Form.Group>                                
                <Form.Group className="mb-3" controlId="julio">
                    <Form.Control type="text" placeholder="Julio" />
                </Form.Group>   
                <Form.Group className="mb-3" controlId="agosto">
                    <Form.Control type="text" placeholder="Agosto" />
                </Form.Group>       
                <Form.Group className="mb-3" controlId="septiembre">
                    <Form.Control type="text" placeholder="Septiembre" />
                </Form.Group>  
                <Form.Group className="mb-3" controlId="octubre">
                    <Form.Control type="text" placeholder="Octubre" />
                </Form.Group>                                
                <Form.Group className="mb-3" controlId="noviembre">
                    <Form.Control type="text" placeholder="Noviembre" />
                </Form.Group>   
                <Form.Group className="mb-3" controlId="diciembre">
                    <Form.Control type="text" placeholder="Diciembre" />
                </Form.Group>                       

                  <Button variant="primary" type="submit">
                    Enviar datos
                  </Button>
                </Form>

              </Card.Body>
              <Card.Footer className="text-muted">Los datos se guardarán en la base de datos</Card.Footer>
              </Card>
                </Col>
              </Row>

            </Container>



          </>
        )
      break;

      case 'Trimestral':
        return(
          <>
              <div className='input-form'>
                   <input 
                       type='text' 
                       name='1 trimestre'
                       onChange={ handleChangeInput}
                       placeholder='1 Trimestre' 
                       className='input-text'
                   >
                   </input>
               </div> 

               <div className='input-form'>
                   <input 
                       type='text' 
                       name='2 trimestre'
                       onChange={ handleChangeInput}
                       placeholder='2 Trimestre' 
                       className='input-text'
                   >
                   </input>
               </div> 

               <div className='input-form'>
                   <input 
                       type='text' 
                       name='3 trimestre'
                       onChange={ handleChangeInput}
                       placeholder='3 Trimestre' 
                       className='input-text'
                   >
                   </input>
               </div> 


               <div className='input-form'>
                   <input 
                       type='text' 
                       name='4 trimestre'
                       onChange={ handleChangeInput}
                       placeholder='4 Trimestre' 
                       className='input-text'
                   >
                   </input>
               </div> 

               <button className='button-form-login'>
                  Crear
               </button>

               <Container>
              <Row className="justify-content-md-center">
                <Col sm lg="4">
                <Card className="text-center xs" >
              <Card.Header>Periodo Trimestral</Card.Header>
              <Card.Body>
                <Form className="mb-3">



                <Form.Group className="mb-3" controlId="periodo" placeholder="Politica de cobranza">
                    <select class="form-control" id="periodo" placeholder='Tipo de dato'>
                    <option value="" selected disabled  >Cuenta a registrar</option>
                      <option>Cuentas por cobrar</option>
                      <option>Cuentas por pagar</option>
                    </select>
                 </Form.Group>   
                 <Form.Group className="mb-3" controlId="primertrimestre">
                    <Form.Control type="text" placeholder="Primer trimestre" />
                </Form.Group>  
                <Form.Group className="mb-3" controlId="segundotrimestre">
                    <Form.Control type="text" placeholder="Segundo trimestre" />
                </Form.Group>                                
                <Form.Group className="mb-3" controlId="tercertrimestre">
                    <Form.Control type="text" placeholder="Tercer trimestre" />
                </Form.Group>   
                <Form.Group className="mb-3" controlId="cuartotrimestre">
                    <Form.Control type="text" placeholder="Cuarto trimestre" />
                </Form.Group>                   


                  <Button variant="primary" type="submit">
                    Seleccionar
                  </Button>
                </Form>

              </Card.Body>
              <Card.Footer className="text-muted">Los datos se guardarán en la base de datos</Card.Footer>
              </Card>
                </Col>
              </Row>

            </Container>

         </>
        )
      break;

      case 'Semestral':
        return(
          <>


              <div className='input-form'>
                   <input 
                       type='text' 
                       name='1 semestre'
                       onChange={ handleChangeInput}
                       placeholder='1 Semestre' 
                       className='input-text'
                   >
                   </input>
               </div> 

               <div className='input-form'>
                   <input 
                       type='text' 
                       name='2 semestre'
                       onChange={ handleChangeInput}
                       placeholder='2 Semestre' 
                       className='input-text'
                   >
                   </input>
               </div> 
               
               <button className='button-form-login'>
                  Crear
               </button>

               <br />
          <Container>
              <Row className="justify-content-md-center">
                <Col sm lg="4">
                <Card className="text-center xs" >
              <Card.Header>Periodo Semestral</Card.Header>
              <Card.Body>
                <Form className="mb-3">



                <Form.Group className="mb-3" controlId="periodo" placeholder="Politica de cobranza">
                    <select class="form-control" id="periodo" placeholder='Tipo de dato'>
                    <option value="" selected disabled  >Cuenta a registrar</option>
                      <option>Cuentas por cobrar</option>
                      <option>Cuentas por pagar</option>
                    </select>
                 </Form.Group>   
                 <Form.Group className="mb-3" controlId="primersemestre">
                    <Form.Control type="text" placeholder="Primer semestre" />
                </Form.Group>  
                <Form.Group className="mb-3" controlId="segundosemestre">
                    <Form.Control type="text" placeholder="Segundo semestre" />
                </Form.Group>                                

                  <Button variant="primary" type="submit">
                    Seleccionar
                  </Button>
                </Form>

              </Card.Body>
              <Card.Footer className="text-muted">Los datos se guardarán en la base de datos</Card.Footer>
              </Card>
                </Col>
              </Row>

            </Container>
         </>
        )
      break;

      case 'Anual':
        return(
          <>
              <div className='input-form'>
                    <input 
                      type='text' 
                      name='anual'
                      onChange={ handleChangeInput}
                      placeholder='Monto' 
                      className='input-text'
                    >
                    </input>
                </div> 

                <button className='button-form-login'>
                  Crear
                </button>

                <br />
            <Container>
              <Row className="justify-content-md-center">
                <Col sm lg="4">
                <Card className="text-center xs" >
              <Card.Header>Periodo Anual</Card.Header>
              <Card.Body>
                <Form className="mb-3">

                 

                <Form.Group className="mb-3" controlId="monto">
                    <Form.Control type="text" placeholder="Monto" />
                  </Form.Group>

                <Form.Group className="mb-3" controlId="periodo" placeholder="Politica de cobranza">
                    <select class="form-control" id="periodo" placeholder='Tipo de dato'>
                      <option value="" selected disabled  >Cuenta a registrar</option>
                      <option>Cuentas por cobrar</option>
                      <option>Cuentas por pagar</option>
                    </select>
                 </Form.Group>                   

                  <Button variant="primary" type="submit">
                  Enviar datos
                  </Button>
                </Form>

              </Card.Body>
              <Card.Footer className="text-muted">Los datos se guardarán en la base de datos</Card.Footer>
              </Card>
                </Col>
              </Row>

            </Container>

          </>
        )
      break;
      default:
        break;
    }

  }

  useEffect(() => {
    getUserGestionPeriodo();
  }, [])
    
  return(
    <>
          <br />
          <Container>
              <Row className="justify-content-md-center">
                <Col sm lg="4">
                <Card className="text-center xs" >
              <Card.Header>Seleccione la Gestion</Card.Header>
              <Card.Body>
                <Form className="mb-3">



                <Form.Group className="mb-3" controlId="periodo" placeholder="Politica de cobranza">
                    <select class="form-control" id="periodo" placeholder='Tipo de dato'>
                      <option value="" selected disabled  >Gestión</option>
                      <option>2020 demo</option>
                      <option>2021 demo</option>
                    </select>
                 </Form.Group>                   

                  <Button variant="primary" type="submit">
                  Enviar datos
                  </Button>
                </Form>

              </Card.Body>
              <Card.Footer className="text-muted">Los datos se guardarán en la base de datos</Card.Footer>
              </Card>
                </Col>
              </Row>

            </Container>

    <div className='cotainer-loggin'>
       <form className='user-form' onSubmit={handleSubmit}>
            
          <div className='input-form'>
               <Select 
                 placeholder='Gestion' 
                 onChange={handleChange}
                 options={gestion} 
                 className='select-color'
               />
           </div>

          { 
            
            isChange &&
            <>
            <h1>Periodo: {label} </h1>
            <div className='input-form'>
               <Select 
                 placeholder='Tipo de dato' 
                 onChange={handleChange}
                 options={tipoDato} 
                 className='select-color'
               />
           </div>
            {renderInputs(label)}
           </>
          }
       </form>
   </div>
 </>
  )
}
