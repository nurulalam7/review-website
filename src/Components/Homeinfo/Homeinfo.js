import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import './Homeinfo.css'

const Homeinfo = (props) => {
    const {img,ceo,age,country,position}=props.home;
    return (
        <div class='info'>
            <Row xs={1} md={2} className="g-4">
                {Array.from({ length: 1 }).map((_,idx) => (
                    <Col>
                        <Card className="personal">
                                <Card.Img variant="top" src= {img}/>
                                <Card.Body className='perso'>
                                    <Card.Title><h1>name:{ceo}</h1></Card.Title>
                                    <Card.Text>
                                    <h1> age:{age}</h1>
                                    </Card.Text>
                                    <Card.Text>
                                        <h4>country :{country}</h4>
                                    </Card.Text>
                                    <Card.Text>
                                        <h4>position :{position}</h4>
                                    </Card.Text>
                                    <div className='moreinfo'>
                                    <button>more</button>
                                    </div>
                                

                                </Card.Body>
                            </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default Homeinfo
