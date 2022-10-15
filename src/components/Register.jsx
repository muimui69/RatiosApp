import { useState } from 'react';
import {useAuth} from '../context/AuthContext';
import {useNavigate} from 'react-router-dom';

//database
import {db} from '../../firebase/FirebaseConfig';
import { collection, addDoc ,getDoc,getDocs} from 'firebase/firestore';

export const Register = () => {

  const [user,setUser] = useState({
    email:'',
    password:''
  });

  const {signup,getNewIdUser} = useAuth();
  const navigate = useNavigate();
  const [error,setError]=useState();

  const userAddDatabase = async(values) =>{
    const {email,password} = values;

    const newUser = ({
      id:getNewIdUser(),
      email,
      password,
    });

    await addDoc(collection( db, 'user-login'),
      (newUser)
    );
    console.log('funca la bd',newUser);
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
    } catch (err) {
      /*console.log(err.code);
      if(err.code === 'auth/internal-error'){
        //setError('Invalid email');
        setError(err.message);
      }*/
      setError(err.message);
    }
    userAddDatabase(user);
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

