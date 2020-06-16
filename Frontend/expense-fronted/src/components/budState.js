import React, { Component } from 'react'
import Badge from 'react-bootstrap/Badge'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Modal from 'react-modal'
import Transactions from './transactions'
import Axios from 'axios'

class budState extends Component {
   constructor(props) {
        super(props)

        this.state = {
            budget: "0.00",
            outputs: "0.00",
            inputs: "0.00",
            total: "0.00",
            showModal:false,
            walletSelected:this.props.selectedWalletHandle,
            transArray: [{}]
        }
    }

    async componentDidMount() {
        const id=this.state.walletSelected
        let walletInfo = await Axios.get('api/wallets/'+id);
        let transactionsInfo = walletInfo.data.transactions;
        let sumOutputs = 0;
        let sumInputs = 0;
        console.log(this.state.walletSelected)
        for (let x = 0; x < transactionsInfo.length; x++) {
           if (transactionsInfo[x].type === "input") {
                sumInputs = sumInputs + transactionsInfo[x].amount;
                
            }
            else if (transactionsInfo[x].type === "output") {
                sumOutputs = sumOutputs + transactionsInfo[x].amount;
                
            }
        }
        this.setState({
            budget: walletInfo.data.budget,
            inputs: sumInputs,
            outputs: sumOutputs,
            total: walletInfo.data.budget+(sumInputs+sumOutputs),
            transArray:transactionsInfo
        });
    }

    showModalMethod=()=>{
        this.setState({showModal:true})
    }
    

    render() {

        return (
            <div>
                <Container>
                    <Col md={{ span: 4, offset: 4 }} >
                        <Row ><Col><h1><Badge variant='success'>Presupuesto</Badge></h1></Col><Col><h1>{this.state.budget}</h1></Col></Row>
                        <Row><Col><h2>Inputs</h2></Col> <Col><h2>{this.state.inputs}</h2></Col></Row>
                        <Row><Col><h2>outputs</h2></Col> <Col><h2>{this.state.outputs}</h2></Col></Row>
                        <Row><Col><h2>Total</h2></Col><Col><h2>{this.state.total}</h2></Col></Row>
                    </Col>
                    <Modal isOpen={true}>
                        <h2>Transactions</h2>
                        {this.state.transArray.map(transaction=>(
                            <Transactions key={transaction._id} transactionHandle={transaction}/>
                        )
                        )}
                        
                    </Modal>
                </Container>
            </div>
        )
    }
}
export default budState