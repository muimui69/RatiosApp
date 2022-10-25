import  {Route,Routes} from 'react-router-dom';

// user
import {Login} from './components/Login';
import {Register} from './components/Register';
import {ConfirmEmail} from './components/ConfirmEmail';

// form cuerpo
import {UserList} from './components/UserList';
import {Heading} from './components/Heading';
import {ConfigInitial } from './components/ConfigInitial';

// global context auth
import {AuthProvider} from './context/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';
import {ProtectedRouteApp} from './components/ProtectedRouteApp';

export const App = () => {
  
  return (
    <div className=''>
      <div className=''>
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
                path = '/confirm' 
                element={
                  <ProtectedRoute>
                    <ConfirmEmail/>
                  </ProtectedRoute>
                }
              />

              <Route path = '/register' element={<Register/>} />
              
              <Route 
                path = '/config' 
                element={
                  <ProtectedRoute>
                    <ConfigInitial/>
                  </ProtectedRoute>
                } 
              />

              <Route 
                path = '/config/:id' 
                element={
                  <ProtectedRoute>
                    <ConfigInitial/>
                  </ProtectedRoute>
                } 
              />

              <Route  
                path = '/userlist' 
                element={
                <ProtectedRoute>
                  <UserList/>
                </ProtectedRoute>
              }/> 

            </Routes>
        </AuthProvider>
      </div>
    </div>
  );
}
