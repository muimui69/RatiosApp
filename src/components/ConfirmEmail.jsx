import {useAuth} from '../context/AuthContext';

export const ConfirmEmail = () => {
  const {user,logout,loading } = useAuth(); 

  const handleLogout = async ()=>{
    await logout();
  }

  if (loading) return <h1>cargando....</h1>

  return (
    <>
      <h1>Welcome {user.email}</h1>
      <p>Please confirm your email  <a href=''>click</a></p>
      <button className='button-form-signup' onClick={handleLogout}>
        Logout
      </button>
    </>
  )
}
