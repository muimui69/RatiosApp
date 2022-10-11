import { useNavigate } from 'react-router-dom';

export const Redirect = () => {

  const navigation = useNavigate();

  const handleSubmit = (e) => {
    const nav = e.target.name;
    switch (nav) {
      case 'cuenta':
        navigation('/redirect/ratio_rotacion_cuentas_por_cobrar');
        break;
      case 'promedio':
        navigation('/redirect/ratio_de_periodo_promedio_de_cobro');
        break;
      default:
        break;
    }    

    console.log(e.target.name);
  };

  return (
    <div className='container-redirect'>
      <div className='option-link'>
        
        <button className='button-redirect' onClick={handleSubmit} name='cuenta'>
          Ratio de rotación de cuentas por cobrar
        </button>
        
        <button className='button-redirect' onClick={handleSubmit} name='promedio'>
          Ratio de periodo promedio de cobro
        </button>

      </div>
    </div>
  )
}