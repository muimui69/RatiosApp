import {useAuth} from '../context/AuthContext';
import {auth} from '../../firebase/FirebaseConfig';
import { sendEmailVerification} from 'firebase/auth';
import { useEffect } from 'react';

export const ConfirmEmail = () => {
  const {user,loading,logout } = useAuth(); 

  const verificationEmail = async() => {
    const emailVerify = auth.currentUser;
    if(!emailVerify.emailVerified){
      sendEmailVerification(emailVerify);
    }
  }

  const isEmailVerifyUser = () =>{
    return auth.currentUser.emailVerified;
  }
  
  const handleLogout = async ()=>{  
    await logout();
  }

  useEffect(() => {
    const verify = isEmailVerifyUser();
    if(verify){
      handleLogout();
    }else{
     //verificationEmail();
    }
  }, [])

  if (loading) return <h1>cargando....</h1>

  return (
    <>
      { (isEmailVerifyUser())?
          <h1>Refirigiendo...</h1>
        :
        <>
          <h1>Bienvenido {user.email}</h1>
            <p>Porfavor confirma tu correo,
            una vez hecho eso,refresque la pagina.
          </p>
        </>
      }
    </>
  )
}
