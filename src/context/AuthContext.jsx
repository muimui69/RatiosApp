import {
  createContext,
  useContext,
  useEffect,
  useState
} from 'react';

import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from 'firebase/auth';

import {auth,db} from '../../firebase/FirebaseConfig';

import { collection,doc,setDoc,addDoc, updateDoc,onSnapshot} from 'firebase/firestore';

export const authContext = createContext();

export const useAuth = () =>{
  const context = useContext(authContext);
  return context; 
}

export const AuthProvider = ({children}) => {

  const [user,setUser] = useState(null);
  const [loading,setLoading]=useState(true);

  const [boolCuenta,setBoolCuenta] = useState([{}]);
  const [userCounts,setUserCounts] = useState([{}]);
  const [gestionCurrent,setGestionCurrent] = useState([{}]);
 
  const signup = async(email,password) => createUserWithEmailAndPassword(auth,email,password);

  const login = async(email,password) => signInWithEmailAndPassword(auth,email,password);

  const logout = ()=> signOut(auth);

  const userAddDatabase = async(values) =>{
    const uid = auth.currentUser.uid;
    await setDoc(doc(db, 'user',`${uid}`), values); 
  };

  const userAddDatabaseEmpresa = async(values) =>{
    await addDoc( 
      collection( db ,'empresa') , 
      (values)
    );
  }

  const userAddGestionAndPeriodo = async(values) =>{
    const uid = auth.currentUser.uid;
    await addDoc( 
      collection( db ,'gestion-periodo') , 
      ({...values,uid})
    );
  }
  
  const userAddCuentas = async(values) =>{
    const uid = auth.currentUser.uid;
    await addDoc( 
      collection( db ,'cuentas') , 
      ({...values,uid})
    );
  }

  const userAddBool = async(values) =>{
    const uid = auth.currentUser.uid;
    await addDoc( 
      collection( db ,'bool-cuenta') , 
      ({...values,uid})
    );
  }

  const getUserBoolCuentas = async() => {
    onSnapshot(collection(db, 'bool-cuenta'), (test) => {
      const docsCuenta =[];
      test.forEach( doc =>{
        const {uid} = doc.data();
        if(uid === getIdCurrentUser()){
          docsCuenta.push({...doc.data()})
        }
      })
      setBoolCuenta(docsCuenta);
    });
  };
  
  const getUserCounts = async() => {
    onSnapshot(collection(db, 'cuentas'), (test) => {
      const docs =[];
      const uidCurrent = auth.currentUser.uid;
      test.forEach( doc =>{
          const {uid} = doc.data();
          if(uid === uidCurrent ){
            docs.push({...doc.data(),id:doc.id})
          }
      })
      setUserCounts(docs);
    });
  };

  const getGestionPeriodo = async() => {
		onSnapshot(collection(db, 'gestion-periodo'), (test) => {
			const docs =[];
      const uidCurrent = auth.currentUser.uid;
			test.forEach( doc =>{
				const {uid} = doc.data();
				if(uid === uidCurrent){
					docs.push({...doc.data(),id:doc.id})
				}
			})
			setGestionCurrent(docs);
		});
 	};

  const userUpdateCuentas = async(values,idDoc) =>{
    await updateDoc(doc(db, 'cuentas',`${idDoc}`), values);
  }

  const userUpdateDatabaseEmpresa = async(values,idDoc) =>{
    await updateDoc(doc(db, 'empresa',`${idDoc}`), values);
  }

  const getIdCurrentUser = () =>{
    const uid = auth.currentUser.uid;
    return uid;
  }
  
  const isEmailVerifyUser = () =>{
    return auth.currentUser.emailVerified;
  }

  useEffect( ()=> {
    onAuthStateChanged( auth , currentUser =>{
      setUser(currentUser);
      setLoading(false);
    });
    getUserBoolCuentas();
    getUserCounts();
    getGestionPeriodo();
  },[]);

  return (
    <authContext.Provider 
      value={{
        signup,
        login,
        user,
        logout,
        loading,
        getIdCurrentUser,
        userAddDatabase,
        userAddDatabaseEmpresa,
        userUpdateDatabaseEmpresa,
        userAddGestionAndPeriodo,
        userAddCuentas,
        isEmailVerifyUser,
        userUpdateCuentas,
        userAddBool,
        boolCuenta,
        userCounts,
        gestionCurrent
      }}
    > 
      {children} 
    </authContext.Provider>
  )
}
