import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Dropdown from 'react-bootstrap/Dropdown';
export class navigation extends Component {
    render() {
        return (

            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto">             
                </Nav>
                <Form inline>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Wallet
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Budget</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Clean</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Change Name</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Form>
            </Navbar>



        )
    }
}

export default navigation
