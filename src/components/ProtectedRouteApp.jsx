import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

export const ProtectedRouteApp = ({children}) => {
    const {user} = useAuth();

    if(user) return <Navigate to='/userlist'/>
    
    //if(!user) return <Navigate to='/'/>

    return <>{children}</>
}
