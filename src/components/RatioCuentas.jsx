import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import Select from 'react-select';

export const RatioCuentas = () => {

  const [user,setUser] = useState({
    empresa:'',
    rubro:'',
    periodo:'',
    ventasCredito:'',
    cuentasPorCobrar:'',
    politicaDias:'No requerido',
    tipoCalculo:'Ratio Rotacion Cuentas Por Cobrar'
  });

  const options = [
    { value: 'mensual', label: 'Anual' },
    { value: 'trimestral', label: 'Trimestral' },
    { value: 'semestral', label: 'Semestral' },
    { value: 'anual', label: 'Anual' }
  ]

  const navigate = useNavigate();

  const handleChange = ({target:{name,value}}) => {
    setUser({...user,[name]:value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //
      navigate('/userlist');
    } catch (err) {
      console.log(err.code);
      setError(err.message);
    }
  };

  return (
  <>
      <div className='cotainer-loggin'>
          <form className='user-form' onSubmit={handleSubmit}>
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
                      name='rubro'
                      id='rubro' 
                      onChange={handleChange}
                      placeholder='Rubro' 
                      className='input-text'
                  >
                  </input>
              </div> 

              <div className='input-form'>
                  <Select options={options} className='select-color'/>
              </div> 

              <div className='input-form'>
                  <input 
                      type='text' 
                      name='ventasCredito'
                      id='ventasCredito' 
                      onChange={handleChange}
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
                      placeholder='Cuentas por cobrar' 
                      className='input-text'
                  >
                  </input>
              </div> 

              <button className='button-form-login'>
                calcular
              </button>

          </form>
      </div>
  </>
  )
}


