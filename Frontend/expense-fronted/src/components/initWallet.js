import React, { Component } from 'react'
//import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Modal from 'react-modal'
import Axios from 'axios'


class NewWallet extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: " ",
            budget: " ",
            message: " ",
            showModal: false
        }
    }

    changeMethod = (event) => {
        this.setState({ [event.target.name]: event.target.value })
        console.log(event.target.value)
    }

    submitMethod = (event) => {
        event.preventDefault()
        console.log(this.state)

        if (this.state.name === " " || this.state.budget === " ") {
            this.setState({
                message: "empty fields",
                showModal: true
            })
        }
        else {
            Axios.patch('/api/wallets/5eddb88d32257b39805a86e2', this.state)
                .then(response => {
                    console.log(response)
                    this.setState({
                        showModal: true,
                        message: "wallet changed"
                    })
                })
                .catch(err => { console.log(err) })
        }
    }
    closeModal = () => {
        this.setState({ showModal: false })
        if (this.state.message === "wallet changed") {
            this.props.walletHandle()
        }
    }
    closeButton = () => {
        this.props.walletHandle()
    }

    render() {

        return (

            <Container>
                <Modal isOpen={this.state.showModal}>
                    <p>{this.state.message}</p>
                    <Button onClick={this.closeModal}>OK</Button>
                </Modal>
                <Form onSubmit={this.submitMethod}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Name of Wallet</Form.Label>
                        <Form.Control type="text" placeholder="" name="name" onChange={this.changeMethod} />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword" >
                        <Form.Label>Budget</Form.Label>
                        <Form.Control type="money" placeholder="" name="budget" onChange={this.changeMethod} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>{" "}
                    <Button variant="primary" onClick={this.closeButton}>Close</Button>
                </Form>
            </Container>
        )
    }
}
export default NewWallet
