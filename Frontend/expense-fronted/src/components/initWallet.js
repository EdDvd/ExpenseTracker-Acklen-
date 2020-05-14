import React, { Component } from 'react'
//import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
//import acontent from './content'

class NewWallet extends Component {
    
   onClick=()=>{
       this.props.walletHandle
   }
    render() {
        return (
            <Container>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Name of Wallet</Form.Label>
                        <Form.Control type="text" placeholder="" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Budget</Form.Label>
                        <Form.Control type="money" placeholder="" />
                    </Form.Group>
                    
                    <Button variant="primary" type="submit" onClick={this.onClick}>
                        Submit
                    </Button>
                </Form>   

            </Container>
        )
    }
}

export default NewWallet
