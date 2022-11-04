//https://firebase.google.com/docs/firestore/manage-data/add-data
//https://firebase.google.com/docs/firestore/security/rules-query?hl=es-419
//https://firebase.google.com/docs/firestore/query-data/listen


//	aqui seria algo asi como excel donde se ven las cuentas registradas,sus montos de acuerdo al periodo.


import { useNavigate} from 'react-router-dom';
import { useEffect,useState} from 'react';
import {db} from '../../firebase/FirebaseConfig';
import { collection,onSnapshot,deleteDoc,doc} from 'firebase/firestore';
import {useAuth} from '../context/AuthContext';

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';

export const RegistroCuentas = () => {

	const [data,setData] = useState([]);
	const {getIdCurrentUser} = useAuth();
	const navigate = useNavigate();

    const getUserList = async() => {
        onSnapshot(collection(db, 'cuentas'), (test) => {
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
			{	
				(data.length===0)?
					<>
						<h1>Aun no ha realizado calculos...</h1>
					</>
					
				:
					data.map( ({id,gestion,periodo,politica}) => 
					<div key={id}>
						<br />
							<Container>
								<Card className="xs" >
									<Card.Header>
										GESTION {gestion}
									</Card.Header>
									
									
									<Card.Body>
										<Card.Title>Periodo {periodo} - Plazo de deuda {politica} días</Card.Title>
										<Row>
                                            <Col>
												<Badge bg="success">
													Cuentas por cobrar
												</Badge>
											</Col>
										</Row>

                                        <Row>
                                            <Col>
                                                <Badge bg="danger">
													Cuentas por pagar
												</Badge>
											</Col>
                                        </Row>

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
		