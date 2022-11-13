import {useAuth} from '../context/AuthContext';

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import Alert from 'react-bootstrap/Alert';

export const RegistroCuentas = () => {

  	const {userCounts} = useAuth();
  
	const existInVector = (gestionSelect,vec) =>{
		let res = false;
		vec.forEach(({gestion})=>{
			if(gestion===gestionSelect){
				res = true;
			}
		})
		return res;
	} 

	const frecuencia = (gestionSelect,vec) =>{
		let c = 0;
		vec.forEach(({gestion})=>{
			if(gestion===gestionSelect){
				c++;
			}
		})
		return c;
	} 

	const getListFormat = (data) =>{
		//console.log('recived...');
		const format = [];
		const context = [];

		data.forEach( docData =>{
			const {gestion,periodo,nombreCuenta} =docData;
			const gestionSelect = gestion;
			const exist = existInVector(gestion,format);
			let newDoc = [];

			const frec = frecuencia(gestion,data);

			if(frec===1){
				switch (periodo) {
					case 'Anual':
						if(nombreCuenta === 'cuentasPorCobrar'){
							newDoc = ({
								id:`${docData.id}`,
								gestion:`${docData.gestion}`,
								periodo:`${docData.periodo}`,
								politica:`${docData.politica}`,
								cuentasPorCobrar:{
									monto:`${docData.anual}`
								},
							})
						}
						
						if(nombreCuenta === 'ventasAlCredito'){
							newDoc=({
								id:`${docData.id}`,
								gestion:`${docData.gestion}`,
								periodo:`${docData.periodo}`,
								politica:`${docData.politica}`,
								ventasAlCredito:{
									monto:`${docData.anual}`
								}
							})
						}
						
						break;

					case 'Semestral':

						if(nombreCuenta === 'cuentasPorCobrar'){
							newDoc = ({
								id:`${docData.id}`,
								gestion:`${docData.gestion}`,
								periodo:`${docData.periodo}`,
								politica:`${docData.politica}`,
								cuentasPorCobrar:{
									primerSemestre:`${docData.primerSemestre}`,
									segundoSemestre:`${docData.segundoSemestre}`
								},
							})
						}
						
						if(nombreCuenta === 'ventasAlCredito'){
							newDoc=({
								id:`${docData.id}`,
								gestion:`${docData.gestion}`,
								periodo:`${docData.periodo}`,
								politica:`${docData.politica}`,
								ventasAlCredito:{
									primerSemestre:`${docData.primerSemestre}`,
									segundoSemestre:`${docData.segundoSemestre}`
								}
							})
						}

						break;

					case 'Trimestral':
						
						if(nombreCuenta === 'cuentasPorCobrar'){
							newDoc = ({
								id:`${docData.id}`,
								gestion:`${docData.gestion}`,
								periodo:`${docData.periodo}`,
								politica:`${docData.politica}`,
								cuentasPorCobrar:{
									primerTrimestre:`${docData.primerTrimestre}`,
									segundoTrimestre:`${docData.segundoTrimestre}`,
									tercerTrimestre:`${docData.tercerTrimestre}`,
									cuartoTrimestre:`${docData.cuartoTrimestre}`
								},
							})
						}
						
						if(nombreCuenta === 'ventasAlCredito'){
							newDoc=({
								id:`${docData.id}`,
								gestion:`${docData.gestion}`,
								periodo:`${docData.periodo}`,
								politica:`${docData.politica}`,
								ventasAlCredito:{
									primerTrimestre:`${docData.primerTrimestre}`,
									segundoTrimestre:`${docData.segundoTrimestre}`,
									tercerTrimestre:`${docData.tercerTrimestre}`,
									cuartoTrimestre:`${docData.cuartoTrimestre}`
								}
							})
						}

						break;
					case 'Mensual':
					
						if(nombreCuenta === 'cuentasPorCobrar'){
							newDoc = ({
								id:`${docData.id}`,
								gestion:`${docData.gestion}`,
								periodo:`${docData.periodo}`,
								politica:`${docData.politica}`,
								cuentasPorCobrar:{
									enero:`${docData.enero}`,
									febrero:`${docData.febrero}`,
									marzo:`${docData.marzo}`,
									abril:`${docData.abril}`,
									mayo:`${docData.mayo}`,
									junio:`${docData.junio}`,
									julio:`${docData.julio}`,
									agosto:`${docData.agosto}`,
									septiembre:`${docData.septiembre}`,
									octubre:`${docData.octubre}`,
									noviembre:`${docData.noviembre}`,
									diciembre:`${docData.diciembre}`
								},
							})
						}
						
						if(nombreCuenta === 'ventasAlCredito'){
							newDoc=({
								id:`${docData.id}`,
								gestion:`${docData.gestion}`,
								periodo:`${docData.periodo}`,
								politica:`${docData.politica}`,
								ventasAlCredito:{
									enero:`${docData.enero}`,
									febrero:`${docData.febrero}`,
									marzo:`${docData.marzo}`,
									abril:`${docData.abril}`,
									mayo:`${docData.mayo}`,
									junio:`${docData.junio}`,
									julio:`${docData.julio}`,
									agosto:`${docData.agosto}`,
									septiembre:`${docData.septiembre}`,
									octubre:`${docData.octubre}`,
									noviembre:`${docData.noviembre}`,
									diciembre:`${docData.diciembre}`
								}
							})
						}

						break;
					default:
						break;
				}
				context.push({...newDoc})
			}else{
				if(exist){
					format.forEach( doc =>{
						const {gestion,periodo}=doc;
						const gestionDoc = gestion;
	
						if(gestionSelect===gestionDoc){
	
							switch (periodo) {
								case 'Anual':
									if(nombreCuenta==='cuentasPorCobrar'){
										doc = ({...doc,cuentasPorCobrar:{
												monto:`${docData.anual}`
											}
										})
									}
			
									if(nombreCuenta === 'ventasAlCredito'){
										doc = ({...doc,ventasAlCredito:{
												monto:`${docData.anual}`
											}
										})
									}

									break;
							
								case 'Semestral':
									if(nombreCuenta==='cuentasPorCobrar'){
										doc = ({...doc,cuentasPorCobrar:{
												primerSemestre:`${docData.primerSemestre}`,
												segundoSemestre:`${docData.segundoSemestre}`
											}
										})
									}
			
									if(nombreCuenta === 'ventasAlCredito'){
										doc = ({...doc,ventasAlCredito:{
												primerSemestre:`${docData.primerSemestre}`,
												segundoSemestre:`${docData.segundoSemestre}`
											}
										})
									}
									
									break;
								
								
								case 'Trimestral':
									if(nombreCuenta==='cuentasPorCobrar'){
										doc = ({...doc,cuentasPorCobrar:{
												primerTrimestre:`${docData.primerTrimestre}`,
												segundoTrimestre:`${docData.segundoTrimestre}`,
												tercerTrimestre:`${docData.tercerTrimestre}`,
												cuartoTrimestre:`${docData.cuartoTrimestre}`
											}
										})
									}
			
									if(nombreCuenta === 'ventasAlCredito'){
										doc = ({...doc,ventasAlCredito:{
												primerTrimestre:`${docData.primerTrimestre}`,
												segundoTrimestre:`${docData.segundoTrimestre}`,
												tercerTrimestre:`${docData.tercerTrimestre}`,
												cuartoTrimestre:`${docData.cuartoTrimestre}`
											}
										})
									}
									
									break;
								
								case 'Mensual':
									if(nombreCuenta==='cuentasPorCobrar'){
										doc = ({...doc,cuentasPorCobrar:{
												enero:`${docData.enero}`,
												febrero:`${docData.febrero}`,
												marzo:`${docData.marzo}`,
												abril:`${docData.abril}`,
												mayo:`${docData.mayo}`,
												junio:`${docData.junio}`,
												julio:`${docData.julio}`,
												agosto:`${docData.agosto}`,
												septiembre:`${docData.septiembre}`,
												octubre:`${docData.octubre}`,
												noviembre:`${docData.noviembre}`,
												diciembre:`${docData.diciembre}`
											}
										})
									}
			
									if(nombreCuenta === 'ventasAlCredito'){
										doc = ({...doc,ventasAlCredito:{
												enero:`${docData.enero}`,
												febrero:`${docData.febrero}`,
												marzo:`${docData.marzo}`,
												abril:`${docData.abril}`,
												mayo:`${docData.mayo}`,
												junio:`${docData.junio}`,
												julio:`${docData.julio}`,
												agosto:`${docData.agosto}`,
												septiembre:`${docData.septiembre}`,
												octubre:`${docData.octubre}`,
												noviembre:`${docData.noviembre}`,
												diciembre:`${docData.diciembre}`
											}
										})
									}
									
									break;

								default:
									break;
							}
						
							context.push({...doc});
						}
					})
				}else{
					switch (periodo) {
						case 'Anual':

							if(nombreCuenta === 'cuentasPorCobrar'){
								newDoc = ({
									id:`${docData.id}`,
									gestion:`${docData.gestion}`,
									periodo:`${docData.periodo}`,
									politica:`${docData.politica}`,
									cuentasPorCobrar:{
										monto:`${docData.anual}`
									},
								})
							}
							
							if(nombreCuenta === 'ventasAlCredito'){
								newDoc=({
									id:`${docData.id}`,
									gestion:`${docData.gestion}`,
									periodo:`${docData.periodo}`,
									politica:`${docData.politica}`,
									ventasAlCredito:{
										monto:`${docData.anual}`
									}
								})
							}

							format.push({...newDoc})
							
							break;
	
						case 'Semestral':

							if(nombreCuenta === 'cuentasPorCobrar'){
								newDoc = ({
									id:`${docData.id}`,
									gestion:`${docData.gestion}`,
									periodo:`${docData.periodo}`,
									politica:`${docData.politica}`,
									cuentasPorCobrar:{
										primerSemestre:`${docData.primerSemestre}`,
										segundoSemestre:`${docData.segundoSemestre}`
									},
								})
							}
							
							if(nombreCuenta === 'ventasAlCredito'){
								newDoc=({
									id:`${docData.id}`,
									gestion:`${docData.gestion}`,
									periodo:`${docData.periodo}`,
									politica:`${docData.politica}`,
									ventasAlCredito:{
										primerSemestre:`${docData.primerSemestre}`,
										segundoSemestre:`${docData.segundoSemestre}`
									}
								})
							}
							format.push({...newDoc})

							break;
						case 'Trimestral':
							
							if(nombreCuenta === 'cuentasPorCobrar'){
								newDoc = ({
									id:`${docData.id}`,
									gestion:`${docData.gestion}`,
									periodo:`${docData.periodo}`,
									politica:`${docData.politica}`,
									cuentasPorCobrar:{
										primerTrimestre:`${docData.primerTrimestre}`,
										segundoTrimestre:`${docData.segundoTrimestre}`,
										tercerTrimestre:`${docData.tercerTrimestre}`,
										cuartoTrimestre:`${docData.cuartoTrimestre}`
									},
								})
							}
							
							if(nombreCuenta === 'ventasAlCredito'){
								newDoc=({
									id:`${docData.id}`,
									gestion:`${docData.gestion}`,
									periodo:`${docData.periodo}`,
									politica:`${docData.politica}`,
									ventasAlCredito:{
										primerTrimestre:`${docData.primerTrimestre}`,
										segundoTrimestre:`${docData.segundoTrimestre}`,
										tercerTrimestre:`${docData.tercerTrimestre}`,
										cuartoTrimestre:`${docData.cuartoTrimestre}`
									}
								})
							}
							format.push({...newDoc})

							break;
						case 'Mensual':
						
							if(nombreCuenta === 'cuentasPorCobrar'){
								newDoc = ({
									id:`${docData.id}`,
									gestion:`${docData.gestion}`,
									periodo:`${docData.periodo}`,
									politica:`${docData.politica}`,
									cuentasPorCobrar:{
										enero:`${docData.enero}`,
										febrero:`${docData.febrero}`,
										marzo:`${docData.marzo}`,
										abril:`${docData.abril}`,
										mayo:`${docData.mayo}`,
										junio:`${docData.junio}`,
										julio:`${docData.julio}`,
										agosto:`${docData.agosto}`,
										septiembre:`${docData.septiembre}`,
										octubre:`${docData.octubre}`,
										noviembre:`${docData.noviembre}`,
										diciembre:`${docData.diciembre}`
									},
								})
							}
							
							if(nombreCuenta === 'ventasAlCredito'){
								newDoc=({
									id:`${docData.id}`,
									gestion:`${docData.gestion}`,
									periodo:`${docData.periodo}`,
									politica:`${docData.politica}`,
									ventasAlCredito:{
										enero:`${docData.enero}`,
										febrero:`${docData.febrero}`,
										marzo:`${docData.marzo}`,
										abril:`${docData.abril}`,
										mayo:`${docData.mayo}`,
										junio:`${docData.junio}`,
										julio:`${docData.julio}`,
										agosto:`${docData.agosto}`,
										septiembre:`${docData.septiembre}`,
										octubre:`${docData.octubre}`,
										noviembre:`${docData.noviembre}`,
										diciembre:`${docData.diciembre}`
									}
								})
							}
							format.push({...newDoc})

							break;
						default:
							break;
					}
				}
			}
		}) 
		return context;
	}

	const renderRegistros = (periodoUser,dataFormat) =>{
		const {id,gestion,periodo,politica,cuentasPorCobrar,ventasAlCredito} = dataFormat;
		switch (periodoUser) {
			case 'Anual':
				return(
					<>
						<br/>
						<div  key={id}>
							<Container>
								<Card className="xs" >
									<Card.Header>
										GESTION {gestion}
									</Card.Header>
									
									
									<Card.Body>
										<Card.Title>Periodo {periodo} - Plazo de deuda {politica} días</Card.Title>
										
										{
											(cuentasPorCobrar===undefined)?
												<Alert variant='dark'>
													Aun no se han registrado las <b>cuentas por cobrar</b>
												</Alert>
											:
											<>
												<Row>
													<Col>
														<Badge pill bg="success">
															Cuentas por cobrar
														</Badge>
													</Col>
												</Row>

												<Row>
													<Col></Col>
													<Col>
														<Badge pill text="dark" bg="warning" >
															Monto
														</Badge>
													</Col>
												</Row>
												
												<Row>
													<Col></Col>
													<Col>
														{ cuentasPorCobrar.monto}
													</Col>
												</Row>
												<br/>
											</>
										}

										{
											(ventasAlCredito===undefined)?
												<Alert variant='dark'>
													Aun no se han registrado las <b>ventas al credito</b>
												</Alert>
											:
											<>
												<Row>
													<Col>
														<Badge pill bg="danger">
															Ventas al credito
														</Badge>
													</Col>
												</Row>

												<Row>
													<Col></Col>
													<Col>
														<Badge pill text="dark" bg="warning" >
															Monto
														</Badge>
													</Col>
												</Row>

												<Row>
													<Col></Col>
													<Col>
														{ventasAlCredito.monto}
													</Col>
												</Row>
											</>
										}
										
									</Card.Body>

									<Card.Footer className="text-muted"></Card.Footer>
								</Card>
							</Container>
					</div>
					</>
				)
				break;
			case 'Semestral':
				return(
					<>
					<br/>
						<div key={id}>
							<Container>
								<Card className="xs" >
									<Card.Header>
										GESTION {gestion}
									</Card.Header>
									
									
									<Card.Body>
										<Card.Title>Periodo {periodo} - Plazo de deuda {politica} días</Card.Title>
										
										{
											(cuentasPorCobrar===undefined)?
												<Alert variant='dark'>
													Aun no se han registrado las <b>cuentas por cobrar</b>
												</Alert>
											:
											<>
												<Row>
													<Col>
														<Badge pill  bg="success">
															Cuentas por cobrar
														</Badge>
													</Col>
												</Row>

												<Row>
													<Col>
														<Badge pill text="dark" bg="warning" >
															Primer semestre
														</Badge>
													</Col>

													<Col>
														<Badge pill text="dark" bg="warning" >
															Segundo semestre
														</Badge>
													</Col>

												</Row>

												<Row>
													<Col>
														{cuentasPorCobrar.primerSemestre}
													</Col>
													<Col>
														{cuentasPorCobrar.segundoSemestre}
													</Col>
												</Row>
												<br/>
											</>
										}

										{
											(ventasAlCredito===undefined)?
												<Alert variant='dark'>
													Aun no se han registrado las <b>ventas al credito</b>
												</Alert>
											:
											<>
												<Row>
													<Col>
														<Badge pill  bg="danger">
															Ventas al credito
														</Badge>
													</Col>
												</Row>

												<Row>
													<Col>
														<Badge pill text="dark" bg="warning" >
															Primer semestre
														</Badge>
													</Col>

													<Col>
														<Badge pill text="dark" bg="warning" >
															Segundo semestre
														</Badge>
													</Col>

												</Row>

												<Row>
													<Col>
														{ventasAlCredito.primerSemestre}
													</Col>
													<Col>
														{ventasAlCredito.segundoSemestre}
													</Col>
												</Row>
											</>
										}
									</Card.Body>
									<Card.Footer className="text-muted"></Card.Footer>
								</Card>
							</Container>
						</div>
				</>
				)
				break;
			case 'Trimestral':
				return (
					<>
					<br/>
						<div key={id}>
							<Container>
								<Card className="xs" >
									<Card.Header>
										GESTION {gestion}
									</Card.Header>
									
									
									<Card.Body>
										<Card.Title>Periodo {periodo} - Plazo de deuda {politica} días</Card.Title>
										{
											(cuentasPorCobrar===undefined)?
												<Alert variant='dark'>
													Aun no se han registrado las <b>cuentas por cobrar</b>
												</Alert>
											:
											<>
												<Row>
													<Col>
														<Badge pill  bg="success">
															Cuentas por cobrar
														</Badge>
													</Col>
												</Row>

												<Row>
													<Col>
														<Badge pill text="dark" bg="warning" >
															Primer trimestre
														</Badge>
														
														<Col>
															{cuentasPorCobrar.primerTrimestre}
														</Col>
													
													</Col>

													<Col>
														<Badge pill text="dark" bg="warning" >
															Segundo trimestre
														</Badge>
														<Col>
															{cuentasPorCobrar.segundoTrimestre}
														</Col>
													</Col>
													<Col>
														<Badge pill text="dark" bg="warning" >
															Tercer trimestre
														</Badge>
														<Col>
															{cuentasPorCobrar.tercerTrimestre}
														</Col>
													</Col>
													<Col>
														<Badge pill text="dark" bg="warning" >
															Cuarto trimestre
														</Badge>
														<Col>
															{cuentasPorCobrar.cuartoTrimestre}
														</Col>
													</Col>
												</Row>
												<br/>
											</>
										}
										
										{
											(ventasAlCredito===undefined)?
												<Alert variant='dark'>
													Aun no se han registrado las <b>ventas al credito</b>
												</Alert>
											:
											<>
												<Row>
													<Col>
														<Badge pill  bg="danger">
															Ventas al credito
														</Badge>
													</Col>
												</Row>

												<Row>
													<Col>
														<Badge pill text="dark" bg="warning" >
															Primer trimestre
														</Badge>

														<Col>
															{ventasAlCredito.primerTrimestre}
														</Col>
													</Col>

													<Col>
														<Badge pill text="dark" bg="warning" >
															Segundo trimestre
														</Badge>
														<Col>
															{ventasAlCredito.segundoTrimestre}
														</Col>
													</Col>
													<Col>
														<Badge pill text="dark" bg="warning" >
															Tercer trimestre
														</Badge>
														<Col>
															{ventasAlCredito.tercerTrimestre}
														</Col>
													</Col>
													<Col>
														<Badge pill text="dark" bg="warning" >
															Cuarto trimestre
														</Badge>
														<Col>
															{ventasAlCredito.cuartoTrimestre}
														</Col>
													</Col>
												</Row>
											</>
										}
									</Card.Body>

									<Card.Footer className="text-muted"></Card.Footer>
								</Card>
							</Container>
					</div>
				</>
				)
				break;
			case 'Mensual':
				return (
					<>
						<br/>
							<div key={id}>
								<Container>
									<Card className="xs" >
										<Card.Header>
											GESTION	{gestion}
										</Card.Header>
										
										<Card.Body>
											<Card.Title>Periodo {periodo} - Plazo de deuda {politica} días</Card.Title>
											
											{
												(cuentasPorCobrar===undefined)?
													<Alert variant='dark'>
														Aun no se han registrado las <b>cuentas por cobrar</b>
													</Alert>
												:
												<>
													<Row>
														<Col>
															<Badge pill  bg="success">
																Cuentas por cobrar
															</Badge>
														</Col>
													</Row>
											
													<Row>
														<Col>
															<Badge pill text="dark" bg="warning" >
																Enero
															</Badge>
															
															<Col>
																{cuentasPorCobrar.enero}
															</Col>
														
														</Col>

														<Col>
															<Badge pill text="dark" bg="warning" >
																Febrero
															</Badge>
															<Col>
																{cuentasPorCobrar.febrero}
															</Col>
														</Col>
												

														<Col>
															<Badge pill text="dark" bg="warning" >
																Marzo
															</Badge>
															<Col>
																{cuentasPorCobrar.marzo}
															</Col>
														</Col>

													</Row>

													<Row>
														<Col>
															<Badge pill text="dark" bg="warning" >
																Abril
															</Badge>
															<Col>
																{cuentasPorCobrar.abril}
															</Col>
														</Col>

														<Col>
															<Badge pill text="dark" bg="warning" >
																Mayo
															</Badge>
															<Col>
																{cuentasPorCobrar.mayo}
															</Col>
														</Col>

														<Col>
															<Badge pill text="dark" bg="warning" >
																Junio
															</Badge>
															
															<Col>
																{cuentasPorCobrar.junio}
															</Col>
														
														</Col>

													</Row>


													<Row>
													
														<Col>
															<Badge pill text="dark" bg="warning" >
																Julio
															</Badge>
															<Col>
																{cuentasPorCobrar.julio}
															</Col>
														</Col>
														<Col>
															<Badge pill text="dark" bg="warning" >
																Agosto
															</Badge>
															<Col>
																{cuentasPorCobrar.agosto}
															</Col>
														</Col>

														<Col>
															<Badge pill text="dark" bg="warning" >
																Septiembre
															</Badge>
															<Col>
																{cuentasPorCobrar.septiembre}
															</Col>
														</Col>
													</Row>

													<Row>
														<Col>
															<Badge pill text="dark" bg="warning" >
																Octubre
															</Badge>
															<Col>
																{cuentasPorCobrar.octubre}
															</Col>
														</Col>

														<Col>
															<Badge pill text="dark" bg="warning" >
																Noviembre
															</Badge>
															<Col>
																{cuentasPorCobrar.noviembre}
															</Col>
														</Col>

														<Col>
															<Badge pill text="dark" bg="warning" >
																Diciembre
															</Badge>
															<Col>
																{cuentasPorCobrar.diciembre}	
															</Col>
														</Col>

													</Row>
													<br/>
												</>
											}
											
											{
												(ventasAlCredito===undefined)?
													<Alert variant='dark'>
														Aun no se han registrado las <b>ventas al credito</b>
													</Alert>
												:
												<>
													<Row>
														<Col>
															<Badge pill  bg="danger">
																Ventas al credito
															</Badge>
														</Col>
													</Row>
											
													<Row>
														<Col>
															<Badge pill text="dark" bg="warning" >
																Enero
															</Badge>
															
															<Col>
																{ventasAlCredito.enero}
															</Col>
														</Col>

														<Col>
															<Badge pill text="dark" bg="warning" >
																Febrero
															</Badge>
															<Col>
																{ventasAlCredito.febrero}
															</Col>
														</Col>
												

														<Col>
															<Badge pill text="dark" bg="warning" >
																Marzo
															</Badge>
															<Col>
																{ventasAlCredito.marzo}
															</Col>
														</Col>

													</Row>

													<Row>
														<Col>
															<Badge pill text="dark" bg="warning" >
																Abril
															</Badge>
															<Col>
																{ventasAlCredito.abril}
															</Col>
														</Col>

														<Col>
															<Badge pill text="dark" bg="warning" >
																Mayo
															</Badge>
															<Col>
																{ventasAlCredito.mayo}
															</Col>
														</Col>

														<Col>
															<Badge pill text="dark" bg="warning" >
																Junio
															</Badge>
															
															<Col>
																{ventasAlCredito.junio}
															</Col>
														
														</Col>

													</Row>

													<Row>
													
														<Col>
															<Badge pill text="dark" bg="warning" >
																Julio
															</Badge>
															<Col>
																{ventasAlCredito.julio}
															</Col>
														</Col>
														<Col>
															<Badge pill text="dark" bg="warning" >
																Agosto
															</Badge>
															<Col>
																{ventasAlCredito.agosto}
															</Col>
														</Col>

														<Col>
															<Badge pill text="dark" bg="warning" >
																Septiembre
															</Badge>
															<Col>
																{ventasAlCredito.septiembre}
															</Col>
														</Col>
													
													</Row>

													<Row>
														<Col>
															<Badge pill text="dark" bg="warning" >
																Octubre
															</Badge>
															<Col>
																{ventasAlCredito.octubre}
															</Col>
														</Col>

														<Col>
															<Badge pill text="dark" bg="warning" >
																Noviembre	
															</Badge>
															<Col>
																{ventasAlCredito.noviembre}
															</Col>
														</Col>

														<Col>
															<Badge pill text="dark" bg="warning" >
																Diciembre
															</Badge>
															<Col>
																{ventasAlCredito.diciembre}
															</Col>
														</Col>

													</Row>
												</>
											}
										</Card.Body>

										<Card.Footer className="text-muted"></Card.Footer>
									</Card>
								</Container>
						</div>
					</>	
				)
				break;
			default:
				break;
		}
	}

	return (
		<>
			{	
				(userCounts.length===0)? 
					<h1>Aun no ha se registraron cuentas...</h1>
				:
				getListFormat(userCounts).map( doc => {
					const {periodo} = doc;
					return (
						renderRegistros(periodo,doc)
					)
				})
			}	
		</>
	)
}
		