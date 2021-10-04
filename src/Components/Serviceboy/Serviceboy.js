import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import './Serviceboy.css'

const Serviceboy = (props) => {
    const {courseName,duration,price}=props.serve;
    return (
        <div className='serviceinfo'>
            <Row xs={1} md={2} className="g-4">
                {Array.from({ length: 1 }).map((_,idx) => (
                    <Col>
                        <Card>
                            
                            <Card.Body>
                                <Card.Title><h1>course name:{courseName}</h1></Card.Title>
                                <Card.Text>
                                <h1> duration:{duration}</h1>
                                </Card.Text>
                                <Card.Text>
                                    <h4>price :{price}</h4>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default Serviceboy
