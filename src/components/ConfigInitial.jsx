import { useState } from 'react';
import {useNavigate} from 'react-router-dom';

export const ConfigInitial = () => {

  const validInput = (input) => {
    if(input.trim().length>0){
      return true;
    }
    return false;
  }

  const [user,setUser] = useState({
    nombre:'',
    empresa:'',
    politicaCobranza:'',
  });

  const navigate = useNavigate();

  const handleChange = ({target:{name,value}}) => {
    setUser({...user,[name]:value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nombre = e.target[0].value;
    const empresa = e.target[1].value;
    const politcaDias = e.target[2].value;
    if( (validInput(nombre)) && (validInput(empresa)) && (validInput(politcaDias)) ){
        navigate('/create_gestion');
    }else{
        console.log('Por favor no envie inputs vacio hdp ==>','esto es el submit xd');
    }

    /*try {
      navigate('/userlist');
    } catch (err) {
      console.log(err.code);
    }*/
  };

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
                    placeholder='Politicas de cobranza' 
                    className='input-text'
                  >
                  </input>
              </div> 

              <button className='button-form-login'>
                  Registrar
              </button>

          </form>
      </div>
  </>
  )
}


