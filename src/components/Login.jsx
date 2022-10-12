import { useState } from 'react';
import {useAuth} from '../context/AuthContext';
import {useNavigate} from 'react-router-dom';

export const Login = () => {

  const [user,setUser] = useState({
    email:'',
    password:''
  });

  const {login} = useAuth();
  const navigate = useNavigate();
  const [error,setError]=useState();

  const handleChange = ({target:{name,value}}) => {
    setUser({...user,[name]:value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await login(user.email,user.password);
      navigate('/');
    } catch (err) {
      console.log(err.code);
      setError(err.message);
    }
  };

  return (
  <>
      <div>
        <h2>RatiosApp</h2> 
        {error}           
      </div>

      <div className='cotainer-loggin'>
          <form className='user-form' onSubmit={handleSubmit}>
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

              <button className='button-form-login'>
                Login
              </button>
          </form>
      </div>
  </>
  )
}

