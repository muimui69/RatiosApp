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

import { collection,doc,setDoc,addDoc, updateDoc} from 'firebase/firestore';

export const authContext = createContext();

export const useAuth = () =>{
  const context = useContext(authContext);
  return context; 
}

export const AuthProvider = ({children}) => {

  const [user,setUser] = useState(null);
  const [loading,setLoading]=useState(true);

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

  const userUpdateDatabaseEmpresa = async(values,idDoc) =>{
    await updateDoc(doc(db, 'empresa',`${idDoc}`), values);
  }

  const getIdCurrentUser = () =>{
    const uid = auth.currentUser.uid;
    return uid;
  }

  useEffect( ()=> {
    onAuthStateChanged( auth , currentUser =>{
      setUser(currentUser);
      setLoading(false);
    });
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
        userUpdateDatabaseEmpresa
      }}
    > 
      {children} 
    </authContext.Provider>
  )
}