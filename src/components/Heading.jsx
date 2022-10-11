import React from 'react'
import { Link } from 'react-router-dom';
import {IoMdAdd} from 'react-icons/io';


export const Heading = () => {
  return (
    <>
      <div className='container-head'>
        <Link to='/'>
          <h5>RatiosApp</h5>
        </Link>
    
        <div className='container-button'>
            <Link to='/redirect'>
              <button className='button-calculate'>
                <IoMdAdd/> Calcular
              </button>
            </Link>
        </div>

      </div>
    </>
  )
}