import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
class walletCard extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             bgColor:"info"
        }
    }
    

    selectWallet = () => {
        let walletID = this.props.eachWalletHandle._id
        this.props.chooseWalletHandle(walletID)
    }
    mouseOver=()=>{
        this.setState({bgColor:"success"})
    }
    mouseOut=()=>{
        this.setState({bgColor:"info"})
    }
    render() {
        return (
            <div>
                <Card
                    bg={this.state.bgColor}
                    text={"light"} 
                    style={{ width: '18rem' }}
                    onMouseOver={this.mouseOver}
                    onMouseOut={this.mouseOut}
                    onClick={this.selectWallet}>
                    <Card.Header>Wallet</Card.Header>
                    <Card.Body>
                        <Card.Title>Name: {this.props.eachWalletHandle.name}</Card.Title>
                        <Card.Text>
                            <br/>
                            Budget: {this.props.eachWalletHandle.budget}
                          </Card.Text>
                        </Card.Body>
                </Card>
                <br/>
                <br/>
            </div>
        )
    }
}

export default walletCard

