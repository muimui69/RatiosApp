//solo se uso para pruebas
import {db} from '../../firebase/FirebaseConfig';
import { collection, addDoc ,getDocs ,doc ,setDoc} from 'firebase/firestore';
//https://firebase.google.com/docs/firestore/manage-data/add-data
export const userAddDatabase = async(values) =>{
    await addDoc( 
        collection( db ,'user-login') , 
        (values) 
    );
};

export const getUserDatabase = async() =>{
    const userDatabase = await getDocs( collection( db, 'user-login'));
    userDatabase.forEach( (doc) => {
      const {email} = doc.data();
      console.log(doc.id,'  =>  ',doc.data());
      console.log(email);
    });
}


export const userExistInDatabaseEmpresa = async(uid) =>{
    const userDatabase = await getDocs(collection(db, 'empresa'));
    userDatabase.forEach( (doc) => {
        const {id} = doc.data();
        console.log(id);
        if(id === uid){
            return true;
        }
    });    
}

export const userAddDatabaseEmpresa = async(uid) =>{
    await addDoc( 
        collection( db ,'empresa') , 
        { id:`${uid}` } 
    );

    /*const userDatabase = await getDocs(collection(db, 'empresa'));

    userDatabase.forEach( (doc) => {
        const {id} = doc.data();
        console.log(id);
        if(id===uid){
            return ;
        }
    });
*/
};



