export const calculateUser = (tipoCalculo,periodo,CuentasPorCobrar,VentasAlCredito) =>{
    switch (tipoCalculo) {
        case 'ratioRotacionCuentasPorCobrar':
            return ratioRotacionCuentasPorCobrar(CuentasPorCobrar,VentasAlCredito,periodo);
            break;
    
        case 'ratioPeriodoPromedioDeCobro':
            return ratioPeriodoPromedioDeCobro(CuentasPorCobrar,VentasAlCredito,periodo);
            break;
        default:
        break;
    }
}

const ratioRotacionCuentasPorCobrar = (CuentasPorCobrar,VentasAlCredito,periodo) =>{
    let sum = 0;
    switch (periodo) {
        case 'Anual':
            sum = parseFloat(VentasAlCredito.monto / CuentasPorCobrar.monto)
            return sum.toFixed(2);
            break;

        case 'Semestral':
            sum = parseFloat( (VentasAlCredito.primerSemestre + VentasAlCredito.segundoSemestre) 
                            / (CuentasPorCobrar.primerSemestre + CuentasPorCobrar.segundoSemestre))
            return sum.toFixed(2);
            break;
            
        case 'Trimestral':
            sum = parseFloat( (VentasAlCredito.primerTrimestre + VentasAlCredito.segundoTrimestre + VentasAlCredito.tercerTrimestre + VentasAlCredito.cuartoTrimestre) 
                           / (CuentasPorCobrar.primerTrimestre + CuentasPorCobrar.segundoTrimestre + CuentasPorCobrar.tercerTrimestre +  CuentasPorCobrar.cuartoTrimestre))
            return sum.toFixed(2);
            break;

        case 'Mensual':
            sum = parseFloat( 
                (VentasAlCredito.enero + VentasAlCredito.febrero + VentasAlCredito.marzo 
               + VentasAlCredito.abril + VentasAlCredito.mayo + VentasAlCredito.junio
               + VentasAlCredito.julio + VentasAlCredito.agosto + VentasAlCredito.septiembre 
               + VentasAlCredito.octubre + VentasAlCredito.noviembre + VentasAlCredito.diciembre) 
              /  (CuentasPorCobrar.enero + CuentasPorCobrar.febrero + CuentasPorCobrar.marzo 
                + CuentasPorCobrar.abril + CuentasPorCobrar.mayo + CuentasPorCobrar.junio
                + CuentasPorCobrar.julio + CuentasPorCobrar.agosto + CuentasPorCobrar.septiembre 
                + CuentasPorCobrar.octubre + CuentasPorCobrar.noviembre + CuentasPorCobrar.diciembre) 
            )
            return sum.toFixed(2);
            break;

        default:
            break;
    } 
}

const ratioPeriodoPromedioDeCobro = (CuentasPorCobrar,VentasAlCredito,periodo) =>{
    let sum = 0;
    switch (periodo) {
        case 'Anual':
            sum = parseFloat( CuentasPorCobrar.monto / VentasAlCredito.monto )
            return sum.toFixed(2) * 360;
            break;

        case 'Semestral':
            sum = parseFloat( (CuentasPorCobrar.primerSemestre + CuentasPorCobrar.segundoSemestre)
                            / (VentasAlCredito.primerSemestre + VentasAlCredito.segundoSemestre) )
            return sum.toFixed(2) * 360;
            break;
            
        case 'Trimestral':
            sum = parseFloat( (CuentasPorCobrar.primerTrimestre + CuentasPorCobrar.segundoTrimestre + CuentasPorCobrar.tercerTrimestre +  CuentasPorCobrar.cuartoTrimestre)
                            / (VentasAlCredito.primerTrimestre + VentasAlCredito.segundoTrimestre + VentasAlCredito.tercerTrimestre + VentasAlCredito.cuartoTrimestre))
            return sum.toFixed(2) * 360;
            break;

        case 'Mensual':
            sum = parseFloat( 
                (CuentasPorCobrar.enero + CuentasPorCobrar.febrero + CuentasPorCobrar.marzo 
                + CuentasPorCobrar.abril + CuentasPorCobrar.mayo + CuentasPorCobrar.junio
                + CuentasPorCobrar.julio + CuentasPorCobrar.agosto + CuentasPorCobrar.septiembre 
                + CuentasPorCobrar.octubre + CuentasPorCobrar.noviembre + CuentasPorCobrar.diciembre) 
               / (VentasAlCredito.enero + VentasAlCredito.febrero + VentasAlCredito.marzo 
                    + VentasAlCredito.abril + VentasAlCredito.mayo + VentasAlCredito.junio
                    + VentasAlCredito.julio + VentasAlCredito.agosto + VentasAlCredito.septiembre 
                    + VentasAlCredito.octubre + VentasAlCredito.noviembre + VentasAlCredito.diciembre) 
            )
            return sum.toFixed(2) * 360;
            break;

        default:
            break;
    } 
}







