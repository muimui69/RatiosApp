import  {Route,Routes} from 'react-router-dom';

// user
import {Login} from './components/Login';
import {Register} from './components/Register';
import {ConfirmEmail} from './components/ConfirmEmail';
import {CreateBusiness} from './components/CreateBusiness';
import {SendCuentas} from './components/SendCuentas';
import {RegistroCuentas} from './components/RegistroCuentas';


import {Heading} from './components/Heading';

// global context auth
import {AuthProvider} from './context/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';
import {ProtectedRouteApp} from './components/ProtectedRouteApp';



export const App = () => {
  
  return (
   <>
      <AuthProvider>
        <Heading/>
          <Routes>
          
            <Route 
              path = '/' 
              element={
                <ProtectedRouteApp>
                  <Login/>
                </ProtectedRouteApp>
              }
            />

            <Route
              path = '/gestion' 
              element ={
                <ProtectedRoute>
                  <CreateBusiness/>
                </ProtectedRoute>
              }
            />

            <Route
              path = '/datos-gestion' 
              element ={
                <ProtectedRoute>
                  <SendCuentas/>
                </ProtectedRoute>
              }
            />

            <Route
              path = '/datos-gestion/:id' 
              element ={
                <ProtectedRoute>
                  <SendCuentas/>
                </ProtectedRoute>
              }
            />

            <Route  
              path = '/confirm' 
              element={
                <ProtectedRoute>
                  <ConfirmEmail/>
                </ProtectedRoute>
              }
            />

            <Route path = '/register' element={<Register/>} />
            
            <Route  
              path = '/aplicacion' 
              element={
              <ProtectedRoute>
                <RegistroCuentas/>
              </ProtectedRoute>
            }/> 

          </Routes>
      </AuthProvider>
    </>
  );
}
