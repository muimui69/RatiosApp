import  {Route,Routes} from 'react-router-dom';

// user
import {Login} from './components/Login';
import {Register} from './components/Register';
import {ConfirmEmail} from './components/ConfirmEmail';
import {CreateBusiness} from './components/CreateBusiness';
import {SendCuentas} from './components/SendCuentas';
import {RegistroCuentas} from './components/RegistroCuentas';
import {About} from './components/About';
import { Calculate } from './data/Calculate';

// form cuerpo
import {UserList} from './components/UserList';
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
              path = '/create-business' 
              element ={
                <ProtectedRoute>
                  <CreateBusiness/>
                </ProtectedRoute>
              }
            />

            <Route
              path = '/create-business/send-cuentas' 
              element ={
                <ProtectedRoute>
                  <SendCuentas/>
                </ProtectedRoute>
              }
            />

            <Route
              path = '/create-business/send-cuentas/:id' 
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
              path = '/userlist' 
              element={
              <ProtectedRoute>
                <UserList/>
              </ProtectedRoute>
            }/> 

            <Route  
              path = '/see' 
              element={
              <ProtectedRoute>
                <RegistroCuentas/>
              </ProtectedRoute>
            }/> 

            <Route  
              path = '/help' 
              element={
              <ProtectedRoute>
                <About/>
              </ProtectedRoute>
            }/> 

            <Route  
              path = '/userlist/calculate' 
              element={
              <ProtectedRoute>
                <Calculate/>
              </ProtectedRoute>
            }/> 

          </Routes>
      </AuthProvider>
    </>
  );
}
