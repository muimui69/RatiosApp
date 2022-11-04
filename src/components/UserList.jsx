//https://firebase.google.com/docs/firestore/manage-data/add-data
//https://firebase.google.com/docs/firestore/security/rules-query?hl=es-419
//https://firebase.google.com/docs/firestore/query-data/listen
import { useNavigate} from 'react-router-dom';
import { useEffect,useState} from 'react';
import {db} from '../../firebase/FirebaseConfig';
import { collection,onSnapshot,deleteDoc,doc} from 'firebase/firestore';
import {useAuth} from '../context/AuthContext';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';

export const UserList = () => {

	const [data,setData] = useState([]);
	const {getIdCurrentUser} = useAuth();
	const navigate = useNavigate();

	const onDeleteList = async(id) =>{
   	 await deleteDoc(doc(db, 'cuentas',`${id}`));
  	}
  
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


  const onRedirect = (id) =>{
	navigate(`/create-business/send-cuentas/${id}`);
  }


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
											<Row>
												<Col>
													GESTION {gestion}
												</Col>

												<Col>	</Col>

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
										<Card.Title>Periodo {periodo} - Plazo de deuda {politica} días</Card.Title>
										<Row>
											<Col md={10}>
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
									<Col md={2}>
										Buena
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
		