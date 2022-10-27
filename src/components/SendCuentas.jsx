import { useState,useEffect } from 'react';
import {useAuth} from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import {db} from '../../firebase/FirebaseConfig';
import { collection,onSnapshot} from 'firebase/firestore';
import Select from 'react-select';


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
                      placeholder='Anual' 
                      className='input-text'
                    >
                    </input>
                </div> 

                <button className='button-form-login'>
                  Crear
                </button>
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
                 placeholder='Nombre de cuenta' 
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
