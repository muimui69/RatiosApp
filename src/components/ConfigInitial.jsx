import { useState,useEffect } from 'react';
import {useNavigate,useParams} from 'react-router-dom';
import {db} from '../../firebase/FirebaseConfig';
import { doc, getDoc} from 'firebase/firestore';
import {useAuth} from '../context/AuthContext';
import Select from 'react-select';


export const ConfigInitial = () => {

  const validInput = (input) => {
    if(input.trim().length>0){
      return true;
    }
    return false;
  }

  const {getIdCurrentUser,userAddDatabaseEmpresa,userUpdateDatabaseEmpresa } = useAuth();

  const navigate = useNavigate();

  const initialState = ({
    uid:'',
    nombre:'',
    empresa:'',
    politicaCobranza:'',
    ventasCredito:'',
    cuentasPorCobrar:'',
    gestion:'',
    periodo:''
  });

  const periodoOptions = [
    { value: 'Mensual', label: 'Mensual' },
    { value: 'Trimestral', label: 'Trimestral' },
    { value: 'Semestral', label: 'Semestral' },
    { value: 'Anual', label: 'Anual' }
  ]

  const gestionOptions = [
    { value: '2000', label: '2000' },
    { value: '2001', label: '2001' },
    { value: '2002', label: '2002' },
    { value: '2003', label: '2003' },
    { value: '2004', label: '2004' },
    { value: '2005', label: '2005' },
    { value: '2006', label: '2006' },
    { value: '2007', label: '2007' },
    { value: '2008', label: '2008' },
    { value: '2009', label: '2009' },
    { value: '2010', label: '2010' },
    { value: '2011', label: '2011' },
    { value: '2012', label: '2012' },
    { value: '2013', label: '2013' },
    { value: '2014', label: '2014' },
    { value: '2015', label: '2015' },
    { value: '2016', label: '2016' },
    { value: '2017', label: '2017' },
    { value: '2018', label: '2018' },
    { value: '2019', label: '2019' },
    { value: '2020', label: '2020' },
    { value: '2021', label: '2021' },
    { value: '2022', label: '2022' },
]

  const [user,setUser] = useState(initialState);

  const params = useParams();

  const handleChange = ({target:{name,value}}) => {
    setUser({...user,[name]:value});
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    const nombre = e.target[0].value;
    const empresa = e.target[1].value;
    const politicaCobranza = e.target[2].value;
    const ventaCredito = e.target[3].value;
    const cuentasPorCobrar = e.target[4].value;
    const gestion = e.target[5].parentElement.previousElementSibling.textContent;
    const periodo = e.target[6].parentElement.previousElementSibling.textContent;

    if( (validInput(nombre)) && (validInput(empresa)) 
        && (validInput(politicaCobranza)) && (gestion!=='Gestion')  && (periodo!=='Periodo')
        && (validInput(ventaCredito))  && (validInput(cuentasPorCobrar))
    ){
      if(params.id){
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
    }else{
      console.log('Por favor no envie inputs vacio hdp ==>','esto es el submit xd');
    }
  };

  const getListByid = async(id) =>{
    const res = await getDoc(doc(db, 'empresa', `${id}`));
    const userFound = params.id;
    if(userFound){
      setUser(res.data());
    }else{
      setUser(initialState);
    }
  }

  useEffect(() => {
    getListByid(params.id);
  }, [params.id])
  
  return (
  <>
     
      <div className='cotainer-loggin'>
          <form className='user-form' onSubmit={handleSubmit}>
              <div className='input-form'>
                  <input 
                    type='text' 
                    name='nombre'
                    id='nombre'
                    onChange={handleChange}
                    value={user.nombre}
                    placeholder='Nombre' 
                    className='input-text'
                  >
                  </input>
              </div> 

              <div className='input-form'>
                  <input 
                    type='text' 
                    name='empresa'
                    id='empresa' 
                    onChange={handleChange}
                    value={user.empresa}
                    placeholder='Empresa' 
                    className='input-text'
                  >
                  </input>
              </div> 

              <div className='input-form'>
                  <input 
                    type='text' 
                    name='politicaCobranza'
                    id='politicaCobranza' 
                    onChange={handleChange}
                    value={user.politicaCobranza}
                    placeholder='Politicas de cobranza' 
                    className='input-text'
                  >
                  </input>
              </div> 

              <div className='input-form'>
                  <input 
                    type='text' 
                    name='ventasCredito'
                    id='ventasCredito' 
                    onChange={handleChange}
                    value={user.ventasCredito}
                    placeholder='Ventas al credito' 
                    className='input-text'
                  >
                  </input>
              </div> 

              <div className='input-form'>
                  <input 
                    type='text' 
                    name='cuentasPorCobrar'
                    id='cuentasPorCobrar' 
                    onChange={handleChange}
                    value={user.cuentasPorCobrar}
                    placeholder='Cuentas por cobrar' 
                    className='input-text'
                  >
                  </input>
              </div> 

              <div className='input-form'>
                {
                  (params.id)?
                  <Select 
                    placeholder={user.gestion} 
                    options={gestionOptions} 
                    className='select-color'
                    />
                  :
                  <Select 
                    placeholder='Gestion' 
                    options={gestionOptions} 
                    className='select-color'
                    />
                }
             
              </div> 

              <div className='input-form'>
                {
                  (params.id)?
                    <Select 
                      placeholder={user.periodo} 
                      options={periodoOptions} 
                      className='select-color'/>
                  :
                    <Select 
                      placeholder='Periodo'
                      options={periodoOptions} 
                      className='select-color'
                    />
                }
             
              </div> 

              <button className='button-form-login' >
                { (params.id)? 'Editar':'Calcular'}
              </button>

          </form>
      </div>
  </>
  )
}


