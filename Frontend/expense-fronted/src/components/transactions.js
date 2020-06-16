import React, { Component } from 'react'


class Transactions extends Component {
    render() {
        return (
            <div>
                <h5>Title:{this.props.transactionHandle.title}</h5>
                <p>{this.props.transactionHandle.type}<br/>
                {this.props.transactionHandle.amount}</p>
                <br />
            </div>
        )
    }
}

export default Transactions

