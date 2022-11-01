import { Link } from 'react-router-dom';
import { IoMdAdd } from 'react-icons/io';
import { useAuth } from '../context/AuthContext';
import { Button } from 'react-bootstrap';

export const Heading = () => {
  const {user,logout} = useAuth();

  const handleLogout = async ()=>{
    await logout();
  }

  return (
    <>

      <div className='container-head'>
        { (user)?
          <Link to='/userlist'>
            <h5>RatiosApp</h5>
          </Link>
          :
          <h5>RatiosApp</h5>
        }


        { user &&

          <div className='container-button'>
              <Link to='/config'>
                    <button className='button-calculate' >
                      <IoMdAdd/> Agregar
                    </button>
              </Link>
          </div>
        }

        {
          user &&
          <button className='button-form-signup' onClick={handleLogout}>
           Logout
          </button>
        }

      </div>
      <Button variant="danger">Danger</Button>{' '}
    </>
  )
}