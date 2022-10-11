import { useState } from 'react';

export const Login = () => {

    const [user,setUser] = useState({
        email:'',
        password:''
    });

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
                        required="required" 
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
