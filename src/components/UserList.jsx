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

	const {gestionCurrent} = useAuth();
	const navigate = useNavigate();

	const onDeleteList = async(id) =>{
   	   await deleteDoc(doc(db, 'cuentas',`${id}`));
  	}

	const onRedirect = (id) =>{
		navigate(`/create-business/send-cuentas/${id}`);
	}
  
	
	return (
		<>
			{	
				//(gestionCurrent.length===0)?
				//	<h1>Aun no se han creado gestiones...</h1>
				//:
						<div>
							<br/>
								<Container>
									<Card className="xs" >
										
										<Card.Header>
												<Row>
													<Col>
														GESTION 2090
													</Col>

													<Col>

														<Button variant="dark" type="submit" onClick={()=>onRedirect(id)} >
															Editar
														</Button>

														<Button variant="danger" type="submit" onClick={()=>onDeleteList(id)}>
															Eliminar
														</Button>
													</Col>
												</Row>
											
										</Card.Header>
										
										
										<Card.Body>
											<Card.Title>Periodo anual - Plazo de deuda 999 días</Card.Title>
											
											<Alert variant='dark'>
												Aun no se han realizado <b>ningun calculo</b>
											</Alert>

											<Row>
												<Col>
													<Badge pill bg="dark">
														Ratio de rotación de cuentas por cobrar
													</Badge>

													<Col>
														asd
													</Col>
													<br/>
												</Col>

												<Col>
													<Badge pill text='dark' bg="warning">
														Interpretacion
													</Badge>

													<Col>
														asd
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
														asd
													</Col>
													<br/>
												</Col>

												<Col>
													<Badge pill text='dark' bg="warning">
														Interpretacion
													</Badge>

													<Col>
														asd
													</Col>
													<br/>
												</Col>

											</Row> 
										</Card.Body>
										<Card.Footer className="text-muted"></Card.Footer>
									</Card>
								</Container>
						</div>
			}	
				
		</>
	)
}
		