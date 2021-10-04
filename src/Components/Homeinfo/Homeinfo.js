import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';

const Homeinfo = (props) => {
    const {img,ceo,age,country}=props.home;
    return (
        <div>
            <Row xs={1} md={2} className="g-4">
                {Array.from({ length: 1 }).map((_,idx) => (
                    <Col>
                        <Card>
                            <Card.Img variant="top" src= {img}/>
                            <Card.Body>
                                <Card.Title><h1>name:{ceo}</h1></Card.Title>
                                <Card.Text>
                                <h1> age:{age}</h1>
                                </Card.Text>
                                <Card.Text>
                                    <h4>country :{country}</h4>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default Homeinfo
