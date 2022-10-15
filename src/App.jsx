import  {Route,Routes} from 'react-router-dom';

// user
import {Login} from './components/Login';
import {Home} from './components/Home';
import {Register} from './components/Register';

// form cuerpo
import {UserList} from './components/UserList';
import {Heading} from './components/Heading';
import {Redirect} from './components/Redirect';
import {RatioCuentas} from './components/RatioCuentas';
import {RatioPromedio} from './components/RatioPromedio';

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
            path = '/home' 
            element={
              <ProtectedRoute>
                <Home/>
              </ProtectedRoute>
            }
          />

          <Route  path = '/register' element={<Register/>}/>

          <Route  path = '/userlist' element={<UserList/>}/> 
          
          <Route  path = '/redirect' element={<Redirect/>}/>
          <Route  path = '/redirect/ratio_rotacion_cuentas_por_cobrar' element={<RatioCuentas/>}/>
          <Route  path = '/redirect/ratio_de_periodo_promedio_de_cobro' element={<RatioPromedio/>}/>

        </Routes>
      </AuthProvider>
      </div>
    </div>
  );
}
