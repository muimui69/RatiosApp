//import {useGlobal  } from '../context/GlobalContext';
import { Link } from 'react-router-dom';
import { useEffect,useState} from 'react';
import {db} from '../../firebase/FirebaseConfig';
import { collection,onSnapshot,deleteDoc,doc} from 'firebase/firestore';
import {useAuth} from '../context/AuthContext';

//https://firebase.google.com/docs/firestore/manage-data/add-data
//https://firebase.google.com/docs/firestore/security/rules-query?hl=es-419
//https://firebase.google.com/docs/firestore/query-data/listen

export const UserList = () => {
  const [data,setData] = useState([]);
  const {getIdCurrentUser} = useAuth();

  const onDeleteList = async(id) =>{
    await deleteDoc(doc(db, 'empresa',`${id}`));
  }
  
  console.log(getIdCurrentUser());

  const getUserList = async() => {
    onSnapshot(collection(db, 'empresa'), (test) => {
      const docs =[];
      test.forEach( doc =>{
        const {uid} = doc.data();
        if(uid === getIdCurrentUser()){
          docs.push({...doc.data(),id:doc.id})
        }
      })
      setData(docs);
    });
  };

  useEffect(() => {
    getUserList();
  }, [])
  
  return (
    <>
      {
        (data.length===0)?
          <h1>Aun no ha realizado calculos...</h1>
        :
          data.map( ({id,nombre,empresa,politicaCobranza,ventasCredito,cuentasPorCobrar,gestion,periodo})  =>
            <div  key={id} className='.container-detail-user' >
              <div className='detail-user-head'>
                <label>{nombre}</label>
                <label>{empresa}</label>
                <label>{politicaCobranza}</label>
                <label>{ventasCredito}</label>
                <label>{cuentasPorCobrar}</label>
                <label>{gestion}</label>
                <label>{periodo}</label>
                <div>
                      <Link 
                        to={`/config/${id}`} 
                        className='edit-button' 
                      >
                        Editar
                      </Link>

                      <button 
                        className='button-form-signup'
                        onClick={() => onDeleteList(id)}
                      >
                        Eliminar
                      </button>
                </div>
              </div>
            </div>
        )
      }
    </>  
  )
}
