import React, { Component } from 'react'
import Badge from 'react-bootstrap/Badge'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
class budState extends Component {
    render() {
        return (
            <div>
                <Container>
                <Col md={{span:4, offset:4}} >
                <Row ><Col><h1><Badge variant='success'>Presupuesto</Badge></h1></Col><Col><h1>cifra</h1></Col></Row>
                <Row><Col><h2>Salidas</h2></Col> <Col><h2>0.00</h2></Col></Row>
                <Row><Col><h2>Totale</h2></Col><Col><h2>0.00</h2></Col></Row>
                </Col>
                
            </Container>
            </div>
        )
    }
}


export default budState