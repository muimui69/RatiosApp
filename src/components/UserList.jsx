//https://firebase.google.com/docs/firestore/manage-data/add-data
//https://firebase.google.com/docs/firestore/security/rules-query?hl=es-419
//https://firebase.google.com/docs/firestore/query-data/listen
import {useAuth} from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import Alert from 'react-bootstrap/Alert';

export const UserList = () => {

	const {gestionCurrent,onDeleteList} = useAuth();
	const navigate = useNavigate();

	const onRedirect = (id) =>{
		navigate(`/create-business/send-cuentas/${id}`);
	}
	
	return (
		<>
			{	
				(gestionCurrent.length===0)?
					<h1>Aun no se han creado gestiones...</h1>
				:
					gestionCurrent.map( (
						{id,gestion,periodo,
						politicaCobranza,
						ratioRotacionCuentasPorCobrar,
						ratioPeriodoPromedioDeCobro,
						calculateRatioRotaciónDeCuentasPorCobrar,
						calculateRatioRotaciónDePeriodoPromedioDeCobro
					}) => 
						
						<div key={id}>
							<br/>
								<Container>
									<Card className="xs" >
										
										<Card.Header>
												<Row>
													<Col>
														GESTION {gestion}
													</Col>

													<Col>

														<Button variant="dark" type="submit" onClick={()=>onRedirect(id)} >
															Editar
														</Button>

														<Button variant="danger" type="submit" onClick={()=>onDeleteList(id,gestion)}>
															Eliminar
														</Button>
													</Col>
												</Row>
											
										</Card.Header>
										
										
										<Card.Body>
											<Card.Title>Periodo {periodo} - Plazo de deuda {politicaCobranza} días</Card.Title>
											
											{
												(!ratioRotacionCuentasPorCobrar && !ratioPeriodoPromedioDeCobro)?
													<Alert variant='dark'>
														Aun no se han realizado <b>ningun calculo</b>
													</Alert>
												:
												<>
													{
														(ratioRotacionCuentasPorCobrar)?
														<>
															<Row>

																<Col>
																	<Badge pill bg="dark">
																		Ratio de rotación de cuentas por cobrar
																	</Badge>

																	<Col>
																		{calculateRatioRotaciónDeCuentasPorCobrar}
																	</Col>
																	<br/>
																</Col>

																<Col>
																	<Badge pill text='dark' bg="warning">
																		Interpretacion
																	</Badge>

																	<Col>
																		zzzzzzzzz
																	</Col>
																	<br/>
																</Col>

															</Row>
														</>
														:
														<>
															<Alert variant='dark'>
																Aun no se han realizado el calculo de <b>Ratio de rotación de cuentas por cobrar</b>
															</Alert>
														</>
													}	

													{
														(ratioPeriodoPromedioDeCobro)?
														<>
															<Row>
																<Col>
																	<Badge pill bg="dark" >
																		Ratio de periodo promedio de cobro
																	</Badge>
																	
																	<Col>
																		{calculateRatioRotaciónDePeriodoPromedioDeCobro}
																	</Col>
																	<br/>
																</Col>

																<Col>
																	<Badge pill text='dark' bg="warning">
																		Interpretacion
																	</Badge>

																	<Col>
																		zzzz
																	</Col>
																	<br/>
																</Col>

															</Row>
														</>
														:
														<>
															<Alert variant='dark'>
																Aun no se han realizado el calculo de <b>Ratio de periodo promedio de cobro</b>
															</Alert>
														</>
													}
												</>
											}
											</Card.Body>
										<Card.Footer className="text-muted"></Card.Footer>
									</Card>
								</Container>
						</div>
					)
				}	
				
		</>
	)
}
		