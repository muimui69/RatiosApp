//https://firebase.google.com/docs/firestore/manage-data/add-data
//https://firebase.google.com/docs/firestore/security/rules-query?hl=es-419
//https://firebase.google.com/docs/firestore/query-data/listen
import {deleteDoc,doc} from 'firebase/firestore';
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
					gestionCurrent.map( ({id,gestion,periodo,politicaCobranza,ratioDeRotaciónDeCuentasPorCobrar,ratioDePeriodoPromedioDeCobro}) => 
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
												(!ratioDeRotaciónDeCuentasPorCobrar && !ratioDePeriodoPromedioDeCobro)?
													<Alert variant='dark'>
														Aun no se han realizado <b>ningun calculo</b>
													</Alert>
												:
												<>
													<Row>
														<Col>
															<Badge pill bg="dark">
																Ratio de rotación de cuentas por cobrar
															</Badge>

															<Col>
																formula
															</Col>
															<br/>
														</Col>

														<Col>
															<Badge pill text='dark' bg="warning">
																Interpretacion
															</Badge>

															<Col>
																inter
															</Col>
															<br/>
														</Col>

													</Row>

													<Row>
														<Col>
															<Badge pill bg="dark" >
																Ratio de periodo promedio de cobro
															</Badge>
															
															<Col>
																form
															</Col>
															<br/>
														</Col>

														<Col>
															<Badge pill text='dark' bg="warning">
																Interpretacion
															</Badge>

															<Col>
																inter
															</Col>
															<br/>
														</Col>

													</Row>
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
		