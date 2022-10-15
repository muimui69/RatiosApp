import {useAuth} from '../context/AuthContext';

export const Home = () => {
  const {user,logout,loading } = useAuth(); 
  //console.log(user);

  const handleLogout = async ()=>{
    await logout();
  }

  if (loading) return <h1>cargando....</h1>

  return (
    <>
      <h1>Welcome {user.email}</h1>
      <button className='button-form-signup' onClick={handleLogout}>
        Logout
      </button>
    </>
  )
}
