import { useState } from 'react';
import {useAuth} from '../context/AuthContext';
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';

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
