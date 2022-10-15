import React from 'react'
import { Link } from 'react-router-dom';
import {IoMdAdd} from 'react-icons/io';
import { useAuth } from '../context/AuthContext';

export const Heading = () => {
  const {user} = useAuth();
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
              <Link to='/redirect'>
                <button className='button-calculate'>
                  <IoMdAdd/> Calcular
                </button>
              </Link>
          </div>
        }
      </div>
    </>
  )
}