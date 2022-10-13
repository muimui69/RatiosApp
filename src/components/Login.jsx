import { useState } from 'react';
import {useAuth} from '../context/AuthContext';
import {useNavigate} from 'react-router-dom';

import {db} from '../../firebase/FirebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

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

  const userAddDatabase = async(values) =>{
    const p = await addDoc(collection( db, 'user-login'),
      (values)
    );
    console.log('id de base de datos',p.id);
    console.log('funca la bd',values);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await login(user.email,user.password);
      //navigate('/home');
      navigate('/redirect');
    } catch (err) {
      console.log(err.code);
      setError(err.message);
    }
    //userAddDatabase(user);
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

