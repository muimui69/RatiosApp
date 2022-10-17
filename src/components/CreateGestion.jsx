import {useNavigate} from 'react-router-dom';
import Select from 'react-select';

export const CreateGestion = () => {

    const periodo= [
        { value: 'mensual', label: 'Mensual' },
        { value: 'trimestral', label: 'Trimestral' },
        { value: 'semestral', label: 'Semestral' },
        { value: 'anual', label: 'Anual' }
    ]

    const anios = [
        { value: '2000', label: '2000' },
        { value: '2001', label: '2001' },
        { value: '2002', label: '2002' },
        { value: '2003', label: '2003' },
        { value: '2004', label: '2004' },
        { value: '2005', label: '2005' },
        { value: '2006', label: '2006' },
        { value: '2007', label: '2007' },
        { value: '2008', label: '2008' },
        { value: '2009', label: '2009' },
        { value: '2010', label: '2010' },
        { value: '2011', label: '2011' },
        { value: '2012', label: '2012' },
        { value: '2013', label: '2013' },
        { value: '2014', label: '2014' },
        { value: '2015', label: '2015' },
        { value: '2016', label: '2016' },
        { value: '2017', label: '2017' },
        { value: '2018', label: '2018' },
        { value: '2019', label: '2019' },
        { value: '2021', label: '2021' },
        { value: '2022', label: '2022' },
    ]

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    const anio = e.target[0].parentElement.previousElementSibling.textContent;
    const periodo = e.target[1].parentElement.previousElementSibling.textContent;
    if( (anio!=='Año')  && (periodo!=='Periodo') ){
        navigate('/userlist');
    }else{
        console.log('por favor escoga el año y el periodo');
    }
  };

  return (
  <>
      <div className='cotainer-loggin'>
          <form className='user-form' onSubmit={handleSubmit}>
              <div className='input-form'>
                <Select placeholder='Año' options={anios} className='select-color' id='anio'/>
              </div> 

              <div className='input-form'>
                  <Select placeholder='Periodo' options={periodo} className='select-color' id='periodo'/>
              </div> 

              <button className='button-form-login'>
                Crear
              </button>

          </form>
      </div>
  </>
  )
}


