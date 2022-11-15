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

import { collection,doc,setDoc,addDoc,getDoc, updateDoc,onSnapshot,deleteDoc} from 'firebase/firestore';

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
  const [boolCalculate,setBoolCalculate] = useState([{}]);
  const [dataCalculate,setDataCalculate] = useState([{}]);
  const [boolVerificationEmail,setBoolVerificationEmail] = useState(false);  
      
  const signup = async(email,password) => createUserWithEmailAndPassword(auth,email,password);

  const login = async(email,password) => signInWithEmailAndPassword(auth,email,password);

  const logout = ()=> signOut(auth);

  const userAddDatabase = async(values) =>{
    const uid = auth.currentUser.uid;
    await setDoc(doc(db, 'user',`${uid}`), values); 
  };

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

  const userAddCuentasOfGestion = async(values) =>{
    const uid = auth.currentUser.uid;
    await addDoc( 
      collection( db ,'bool-calculate') , 
      ({...values,uid})
    );
  }

  const userAddVerificationEmail = async(values)=>{
    await addDoc( 
      collection( db ,'bool-verify') , 
      ({...values})
    );
  }

  const userCountsDelete = async(gestionDelete) => {
    onSnapshot(collection(db, 'cuentas'), (test) => {
      const uidCurrent = auth.currentUser.uid;
      test.forEach( docElement =>{
          const {uid,gestion} = docElement.data();
          if(uid === uidCurrent ){
            if(gestion===gestionDelete){
              deleteDoc(doc(db, 'cuentas',`${docElement.id}`));
            }
          }
      })
    });
  };

  const userBoolDelete = async(gestionDelete) => {
    onSnapshot(collection(db, 'bool-cuenta'), (test) => {
      const uidCurrent = auth.currentUser.uid;
      test.forEach( docElement =>{
          const {uid,gestion} = docElement.data();
          if(uid === uidCurrent ){
            if(gestion===gestionDelete){
              deleteDoc(doc(db, 'bool-cuenta',`${docElement.id}`));
            }
          }
      })
    });
  };

  const userBoolDeleteCalculate = async(gestionDelete) => {
    onSnapshot(collection(db, 'bool-calculate'), (test) => {
      const uidCurrent = auth.currentUser.uid;
      test.forEach( docElement =>{
          const {uid,gestion} = docElement.data();
          if(uid === uidCurrent ){
            if(gestion===gestionDelete){
              deleteDoc(doc(db, 'bool-calculate',`${docElement.id}`));
            }
          }
      })
    });
  };

  const onDeleteList = async(id,gestionDelete) =>{
    onSnapshot(collection(db, 'gestion-periodo'), (test) => {
      const uidCurrent = auth.currentUser.uid;
      test.forEach( docElement =>{
        const {uid,gestion} = docElement.data();
        if(uid === uidCurrent){
          if(gestion===gestionDelete){
            deleteDoc(doc(db, 'gestion-periodo',`${id}`));
            userCountsDelete(gestionDelete);
            userBoolDelete(gestionDelete);
            userBoolDeleteCalculate(gestionDelete);
          }
        }
      })
    });
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

  const getUserBoolCalculate = async() => {
    onSnapshot(collection(db, 'bool-calculate'), (test) => {
      const docsCalculate =[];
      test.forEach( doc =>{
        const {uid} = doc.data();
        if(uid === getIdCurrentUser()){
          docsCalculate.push({...doc.data()})
        }
      })
      setBoolCalculate(docsCalculate);
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

  const getCuentasOfGestion = async(gestionCalculate) =>{
    const docs = [];
    userCounts.map( docCalculate=>{
      const {gestion} = docCalculate;
      if(gestion===gestionCalculate){
        docs.push({...docCalculate})
      }
    })
    setDataCalculate(docs);
  }

  const userUpdateCuentas = async(values,idDoc) =>{
    await updateDoc(doc(db, 'cuentas',`${idDoc}`), values);
  }

  const userUpdateGestionCalculate = async(values,idDoc) =>{
    await updateDoc(doc(db, 'gestion-periodo',`${idDoc}`), values);
  }

  const getIdCurrentUser = () =>{
    if(auth!==null){
      const uid = auth.currentUser.uid;
      return uid;
    }
  }
  
  const getBoolVerificationEmail = async()=>{
    onSnapshot(collection(db, 'bool-verify'), (test) => {
      test.forEach( doc =>{
        const {uid,verification} = doc.data();
        if(uid === getIdCurrentUser()){
          setBoolVerificationEmail(verification);
        }
      })
    });
  }

  const isEmailVerifyUser = () =>{
    return auth.currentUser.emailVerified;
  }

  useEffect( ()=> {
    onAuthStateChanged( auth , currentUser =>{
      setUser(currentUser);
      setLoading(false);
      getBoolVerificationEmail();
    });
    getUserBoolCuentas();
    getUserCounts();
    getGestionPeriodo();
    getUserBoolCalculate();
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
        userAddGestionAndPeriodo,
        userAddCuentas,
        isEmailVerifyUser,
        userUpdateCuentas,
        userAddBool,
        boolCuenta,
        boolCalculate,
        userCounts,
        gestionCurrent,
        onDeleteList,
        getCuentasOfGestion ,
        dataCalculate,
        userAddCuentasOfGestion,
        userAddVerificationEmail,
        boolVerificationEmail,
        userUpdateGestionCalculate
      }}
    > 
      {children} 
    </authContext.Provider>
  )
}
