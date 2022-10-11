import  {Route,Routes} from 'react-router-dom';

import {UserList} from './components/UserList';
import {Heading} from './components/Heading';
import {Redirect} from './components/Redirect';
import {RatioCuentas} from './components/RatioCuentas';
import {RatioPromedio} from './components/RatioPromedio';

export const App = () => {
  return (
    <div className=''>
      <div className=''>
          <Heading/>
          <Routes>
              <Route  path = '/' element={<UserList/>}  />
              <Route  path = '/redirect' element={<Redirect/>}/>
              <Route  path = '/redirect/ratio_rotacion_cuentas_por_cobrar' element={<RatioCuentas/>}/>
              <Route  path = '/redirect/ratio_de_periodo_promedio_de_cobro' element={<RatioPromedio/>}/>
          </Routes>
      </div>
    </div>
  );
}
