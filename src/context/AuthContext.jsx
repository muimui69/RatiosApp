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

import {auth} from '../../firebase/FirebaseConfig';

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
  
  useEffect( ()=> {
    onAuthStateChanged( auth , currentUser =>{
      setUser(currentUser);
      setLoading(false);
    });
  },[]);

  return (
    <authContext.Provider value={{signup,login,user,logout,loading}}> 
      {children} 
    </authContext.Provider>
  )
}
