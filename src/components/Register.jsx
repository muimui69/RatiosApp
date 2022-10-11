import { useState } from 'react';

export const Register = () => {

    const [user,setUser] = useState({
      email:'',
      password:''
    });

    const handleChange = ({target:{name,value}}) => {
      setUser({...user,[name]:value});
    };

    const handleSubmit = (e) => {
      e.preventDefault();
    };

    return (
    <>
        <div>
            <h2>RatiosApp</h2>            
        </div>

        <div className='cotainer-loggin'>
            <form className='user-form'>
                <div className='input-form'>
                    <input 
                        type='email' 
                        name='email'
                        id='email'
                        onChange={handleChange}
                        onSubmit={handleSubmit}
                        required="required" 
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
                        onSubmit={handleSubmit}
                        required="required" 
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

