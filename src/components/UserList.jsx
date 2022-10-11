export const UserList = () => {
  return(
    <>
      <h5>UserList</h5>
    </>
  )
}


/*//import {useContext} from 'react';
//import { GlobalContext } from '../context/GlobalContext';
import { Link } from 'react-router-dom';

export const UserList = () => {
  //const {tasks,deleteTask} = useContext(GlobalContext);

  return (
    <div className='flex justify-center' >
      <div className='w-6/12'>
        {
          (tasks.length===0)? 
              <h1 className='text-gray-400 text-40'> Please add task...</h1> 
          :
          tasks.map( ({id,title,description}) =>
            <div key={id} className='bg-gray-900 px-20 py-5 text-white shadow-2x1 mb-4 flex justify-between'>
              <h1>{title} </h1>
              <h3>{description}</h3>
              <div>
                    <Link to={`/edit/${id}`} className='bg-gray-600 hover:bg-gray-500 py-2 px-4 mr-2'>
                      Edit
                    </Link>
                    <button 
                      className='bg-red-600 hover:bg-red-400 py-2 px-4 mr-2'
                      onClick={() => deleteTask(id)}
                    >
                      Delete
                    </button>
              </div>
            </div>
          )
        }
      </div>
    </div>  
  )
}*/
