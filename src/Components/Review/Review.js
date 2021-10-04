import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';

const Review = (props) => {
    const {name,course,duration,price}=props.rev;
    return (
        <div>
             <Row xs={1} md={2} className="g-4">
                {Array.from({ length: 1 }).map((_,idx) => (
                    <Col>
                        <Card>
                            
                            <Card.Body>
                                <Card.Title><h1>student-name:{name}</h1></Card.Title>
                                <Card.Text>
                                <h1> course:{course}</h1>
                                </Card.Text>
                                <Card.Text>
                                    <h4>duration :{duration}</h4>
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

export default Review
