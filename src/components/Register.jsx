import { useState } from 'react';
import {useAuth} from '../context/AuthContext';
import {useNavigate} from 'react-router-dom';

//database
import {db} from '../../firebase/FirebaseConfig';
import { collection, addDoc ,getDocs} from 'firebase/firestore';

export const Register = () => {

  const [user,setUser] = useState({
    email:'',
    password:''
  });

  const {signup} = useAuth();
  const navigate = useNavigate();
  const [error,setError]=useState();

  const userAddDatabase = async(values) =>{
    await addDoc(collection( db, 'user-login'),
      (values)
    );
    console.log('funca la bd',values);
    getUserDatabase();
  };

  const getUserDatabase = async() =>{
    const userDatabase = await getDocs(collection(db, 'user-login'));
    userDatabase.forEach( (doc) => {
      console.log(doc.id,'  =>  ',doc.data());
    });
  }

  const handleChange = ({target:{name,value}}) => {
    setUser({...user,[name]:value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signup(user.email,user.password);
      navigate('/home');
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

