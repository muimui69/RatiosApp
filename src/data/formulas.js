export const calculateUser = (tipoCalculo,periodo,data) =>{
    switch (tipoCalculo) {
        case 'ratioRotacionCuentasPorCobrar':
            return ratioRotacionCuentasPorCobrar(data,periodo);
            break;
    
        case 'ratioPeriodoPromedioDeCobro':
            return ratioPeriodoPromedioDeCobro(data,periodo);
            break;
        
        default:
        break;
    }
}

const ratioRotacionCuentasPorCobrar = (data,periodo) =>{
    switch (periodo) {
        case 'Anual':
            let {anual} = data;

            break;

        case 'Semestral':
            let {primerSemestre,segundoSemestre} = data;

            break;
            
        case 'Trimestral':
            let {primerTrimestre,segundoTrimestre,tercerTrimestre,cuartoTrimestre} = data;
            
            break;

        case 'Mensual':
            let {enero,febrero,marzo,abril,mayo,junio,
                julio,agosto,septiembre,octubre,noviembre,diciembre} = data;

            break;

        default:
            break;
    } 
}

const ratioPeriodoPromedioDeCobro = (data,periodo) =>{
    switch (periodo) {
        case 'Anual':
            let {anual} = data;

            break;

        case 'Semestral':
            let {primerSemestre,segundoSemestre} = data;

            break;
            
        case 'Trimestral':
            let {primerTrimestre,segundoTrimestre,tercerTrimestre,cuartoTrimestre} = data;
            
            break;

        case 'Mensual':
            let {enero,febrero,marzo,abril,mayo,junio,
                julio,agosto,septiembre,octubre,noviembre,diciembre} = data;

            break;

        default:
            break;
    } 
}







