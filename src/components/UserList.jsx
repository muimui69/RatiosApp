//import {useGlobal  } from '../context/GlobalContext';
import { Link } from 'react-router-dom';
import { useEffect,useState} from 'react';
import {db} from '../../firebase/FirebaseConfig';
import { collection,onSnapshot,deleteDoc,doc} from 'firebase/firestore';
import {useAuth} from '../context/AuthContext';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';

//https://firebase.google.com/docs/firestore/manage-data/add-data
//https://firebase.google.com/docs/firestore/security/rules-query?hl=es-419
//https://firebase.google.com/docs/firestore/query-data/listen

export const UserList = () => {
	const [data,setData] = useState([]);
	const {getIdCurrentUser} = useAuth();

	const onDeleteList = async(id) =>{
		await deleteDoc(doc(db, 'empresa',`${id}`));
	}
	
	const getUserList = async() => {
		onSnapshot(collection(db, 'empresa'), (test) => {
			const docs =[];
			test.forEach( doc =>{
				const {uid} = doc.data();
				if(uid === getIdCurrentUser()){
					docs.push({...doc.data(),id:doc.id})
				}
			})
			setData(docs);
		});
	};

	useEffect(() => {
		getUserList();
	}, [])
	
	return (
		<>
			<br />
					<Container>
					<Card className="xs" >
						<Card.Header>GESTION 2019</Card.Header>
						<Card.Body>
							<Card.Title>Periodo Anual - Plazo de deuda 45 días</Card.Title>
							<Row>
						<Col md={12}>
							<Badge bg="secondary" as="Button">
							Ratio de rotación de cuentas por cobrar
							</Badge>
							
						</Col>
					</Row>
					<Row>
					<Col  md={4}>
							</Col>
							<Col md={4}>
								225748521  
							</Col>
							<Col md={4}>
								Buena
							</Col>
					</Row>
					<Row>
						<Col md={12}>
							<Badge bg="secondary" as="Button">
							Ratio de periodo promedio de cobro
							</Badge>
						</Col>
					</Row> 
					<Row>
					<Col  md={4}>
							</Col>
							<Col md={4}>
								225748521  
							</Col>
							<Col md={4}>
								Buena
							</Col>
					</Row>             
						</Card.Body>
			<Card.Footer className="text-muted"></Card.Footer>
		</Card>
					</Container>
					<br />
					<Container>
					<Card className="xs" >
						<Card.Header>GESTION 2020</Card.Header>
						<Card.Body>
							<Card.Title>Periodo Semestral - Plazo de deuda 45 días</Card.Title>
							<Row>
						<Col md={12}>
						<Badge bg="secondary" as="Button">
							Ratio de rotación de cuentas por cobrar
							</Badge>
						</Col>
					</Row>
					<Row>
					<Col  md={4}>
						Semestre 1
					</Col>
					<Col md={4}>
						225748521  
					</Col>
					<Col md={4}>
						Buena
					</Col>
					</Row>
					<Row>
					<Col  md={4}>
						Semestre 2
					</Col>
					<Col md={4}>
						225748521  
					</Col>
					<Col md={4}>
						Regular
					</Col>
					</Row>					
					<Row>
						<Col md={12}>
						<Badge bg="secondary" as="Button">
							Ratio de periodo promedio de cobro
							</Badge>
						</Col>
					</Row> 
					<Row>
					<Col  md={4}>
						Semestre 1
					</Col>
					<Col md={4}>
						225748521  
					</Col>
					<Col md={4}>
						Buena
					</Col>
					</Row>
					<Row>
					<Col  md={4}>
						Semestre 2
					</Col>
					<Col md={4}>
						225748521  
					</Col>
					<Col md={4}>
						Regular
					</Col>
					</Row>		            
					</Card.Body>
			<Card.Footer className="text-muted"></Card.Footer>
		</Card>
					</Container>

					<br />
					<Container>
					<Card className="xs" >
						<Card.Header>GESTION 2021</Card.Header>
						<Card.Body>
							<Card.Title>Periodo Trimestral - Plazo de deuda 45 días</Card.Title>
							<Row>
						<Col md={12}>
						<Badge bg="secondary" as="Button">
							Ratio de rotación de cuentas por cobrar
							</Badge>
						</Col>
					</Row>
					<Row>
					<Col  md={4}>
						Trimestre 1
					</Col>
					<Col md={4}>
						225748521  
					</Col>
					<Col md={4}>
						Buena
					</Col>
					</Row>
					<Row>
					<Col  md={4}>
						Trimestre 2
					</Col>
					<Col md={4}>
						225748521  
					</Col>
					<Col md={4}>
						Regular
					</Col>
					</Row>					
					<Row>
					<Col  md={4}>
						Trimestre 3
					</Col>
					<Col md={4}>
						225748521  
					</Col>
					<Col md={4}>
						Buena
					</Col>
					</Row>
					<Row>
					<Col  md={4}>
						Trimestre 4
					</Col>
					<Col md={4}>
						225748521  
					</Col>
					<Col md={4}>
						Regular
					</Col>
					</Row>										
					<Row>
						<Col md={12}>
						<Badge bg="secondary" as="Button">
							Ratio de periodo promedio de cobro
							</Badge>
						</Col>
					</Row> 
					<Row>
					<Col  md={4}>
						Trimestre 1
					</Col>
					<Col md={4}>
						225748521  
					</Col>
					<Col md={4}>
						Buena
					</Col>
					</Row>
					<Row>
					<Col  md={4}>
						Trimestre 2
					</Col>
					<Col md={4}>
						225748521  
					</Col>
					<Col md={4}>
						Regular
					</Col>
					</Row>	
					<Row>
					<Col  md={4}>
						Trimestre 3
					</Col>
					<Col md={4}>
						225748521  
					</Col>
					<Col md={4}>
						Buena
					</Col>
					</Row>
					<Row>
					<Col  md={4}>
						Trimestre 4
					</Col>
					<Col md={4}>
						225748521  
					</Col>
					<Col md={4}>
						Regular
					</Col>
					</Row>											            
					</Card.Body>
			<Card.Footer className="text-muted"></Card.Footer>
		</Card>
					</Container>

					<br />
					<Container>
					<Card className="xs" >
						<Card.Header>GESTION 2022</Card.Header>
						<Card.Body>
							<Card.Title>Periodo Trimestral - Plazo de deuda 45 días</Card.Title>
							<Row>
						<Col md={12}>
						<Badge bg="secondary" as="Button">
							Ratio de rotación de cuentas por cobrar
							</Badge>
						</Col>
					</Row>
					<Row>
					<Col  md={4}>
						Enero
					</Col>
					<Col md={4}>
						225748521  
					</Col>
					<Col md={4}>
						Buena
					</Col>
					</Row>
					<Row>
					<Col  md={4}>
						Febrero
					</Col>
					<Col md={4}>
						225748521  
					</Col>
					<Col md={4}>
						Regular
					</Col>
					</Row>					
					<Row>
					<Col  md={4}>
						Marzo
					</Col>
					<Col md={4}>
						225748521  
					</Col>
					<Col md={4}>
						Buena
					</Col>
					</Row>
					<Row>
					<Col  md={4}>
						Abril
					</Col>
					<Col md={4}>
						225748521  
					</Col>
					<Col md={4}>
						Regular
					</Col>
					</Row>										
					<Row>
					<Col  md={4}>
						Mayo
					</Col>
					<Col md={4}>
						225748521  
					</Col>
					<Col md={4}>
						Regular
					</Col>
					</Row>	
					<Row>
					<Col  md={4}>
						Junio
					</Col>
					<Col md={4}>
						225748521  
					</Col>
					<Col md={4}>
						Regular
					</Col>
					</Row>	
					<Row>
					<Col  md={4}>
						Julio
					</Col>
					<Col md={4}>
						225748521  
					</Col>
					<Col md={4}>
						Regular
					</Col>
					</Row>	
					<Row>
					<Col  md={4}>
						Agosto
					</Col>
					<Col md={4}>
						225748521  
					</Col>
					<Col md={4}>
						Regular
					</Col>
					</Row>	
					<Row>
					<Col  md={4}>
						Septiembre
					</Col>
					<Col md={4}>
						225748521  
					</Col>
					<Col md={4}>
						Regular
					</Col>
					</Row>	
					<Row>
					<Col  md={4}>
						Octubre
					</Col>
					<Col md={4}>
						225748521  
					</Col>
					<Col md={4}>
						Regular
					</Col>
					</Row>	
					<Row>
					<Col  md={4}>
						Noviembre
					</Col>
					<Col md={4}>
						225748521  
					</Col>
					<Col md={4}>
						Regular
					</Col>
					</Row>	
					<Row>
					<Col  md={4}>
						Diciembre
					</Col>
					<Col md={4}>
						225748521  
					</Col>
					<Col md={4}>
						Regular
					</Col>
					</Row>	
					<Row>
						<Col md={12}>
							
						<Badge bg="secondary" as="Button">
							Ratio de periodo promedio de cobro
							</Badge>
							
						</Col>
					</Row> 
					<Row>
					<Col  md={4}>
						Enero
					</Col>
					<Col md={4}>
						225748521  
					</Col>
					<Col md={4}>
						Buena
					</Col>
					</Row>
					<Row>
					<Col  md={4}>
						Febrero
					</Col>
					<Col md={4}>
						225748521  
					</Col>
					<Col md={4}>
						Regular
					</Col>
					</Row>					
					<Row>
					<Col  md={4}>
						Marzo
					</Col>
					<Col md={4}>
						225748521  
					</Col>
					<Col md={4}>
						Buena
					</Col>
					</Row>
					<Row>
					<Col  md={4}>
						Abril
					</Col>
					<Col md={4}>
						225748521  
					</Col>
					<Col md={4}>
						Regular
					</Col>
					</Row>										
					<Row>
					<Col  md={4}>
						Mayo
					</Col>
					<Col md={4}>
						225748521  
					</Col>
					<Col md={4}>
						Regular
					</Col>
					</Row>	
					<Row>
					<Col  md={4}>
						Junio
					</Col>
					<Col md={4}>
						225748521  
					</Col>
					<Col md={4}>
						Regular
					</Col>
					</Row>	
					<Row>
					<Col  md={4}>
						Julio
					</Col>
					<Col md={4}>
						225748521  
					</Col>
					<Col md={4}>
						Regular
					</Col>
					</Row>	
					<Row>
					<Col  md={4}>
						Agosto
					</Col>
					<Col md={4}>
						225748521  
					</Col>
					<Col md={4}>
						Regular
					</Col>
					</Row>	
					<Row>
					<Col  md={4}>
						Septiembre
					</Col>
					<Col md={4}>
						225748521  
					</Col>
					<Col md={4}>
						Regular
					</Col>
					</Row>	
					<Row>
					<Col  md={4}>
						Octubre
					</Col>
					<Col md={4}>
						225748521  
					</Col>
					<Col md={4}>
						Regular
					</Col>
					</Row>	
					<Row>
					<Col  md={4}>
						Noviembre
					</Col>
					<Col md={4}>
						225748521  
					</Col>
					<Col md={4}>
						Regular
					</Col>
					</Row>	
					<Row>
					<Col  md={4}>
						Diciembre
					</Col>
					<Col md={4}>
						225748521  
					</Col>
					<Col md={4}>
						Regular
					</Col>
					</Row>	
					</Card.Body>
			<Card.Footer className="text-muted"></Card.Footer>
		</Card>
					</Container>

		</>  
	)
}
