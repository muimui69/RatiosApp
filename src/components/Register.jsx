import { useState } from 'react';
import {useAuth} from '../context/AuthContext';
import {useNavigate} from 'react-router-dom';

export const Register = () => {

  const [user,setUser] = useState({
    nombre:'',
    empresa:'',
    email:'',
    password:''
  });

  const { signup,userAddDatabase } = useAuth();

  const navigate = useNavigate();
  const [error,setError]=useState();

  const handleChange = ({target:{name,value}}) => {
    setUser({...user,[name]:value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signup(user.email,user.password);
      navigate('/confirm');
      await userAddDatabase(user);
    } catch (err) {
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
                      type='email' 
                      name='email'
                      id='email'
                      onChange={handleChange}
                      placeholder='Email' 
                      className='input-text'
                  >
                  </input>
              </div> 

              <div className='input-form'>
                  <input 
                      type='password' 
                      name='password'
                      id='password' 
                      onChange={handleChange}
                      placeholder='Password' 
                      className='input-text'
                  >
                  </input>
              </div> 

              <button className='button-form-signup'>
                Sign up
              </button>
          </form>
      </div>
  </>
  )
}

