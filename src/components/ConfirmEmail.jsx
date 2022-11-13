import {useAuth} from '../context/AuthContext';
import { sendEmailVerification} from 'firebase/auth';
import { useEffect} from 'react';

export const ConfirmEmail = () => {
  const {user,logout,isEmailVerifyUser,boolVerificationEmail, userAddVerificationEmail} = useAuth();
  
  const handleLogout = async ()=>{  
    await logout();
  }

  const sendOn = async()=>{
    const response = await boolVerificationEmail;
    if(!response){
      await sendEmailVerification(user);
      const values = ({
        uid:`${user.uid}`,
        verification:true
      })      
      await userAddVerificationEmail(values)
    }
  }

  console.log(boolVerificationEmail)

  useEffect(() => {
    const verify = isEmailVerifyUser();
    if(verify){
      handleLogout();
    }else{
      sendOn();
    }
  }, [user])

  return (
    <>
      { (isEmailVerifyUser())?
          <h1>Redirigiendo...</h1>
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
