import React, { Component } from 'react'
import NewWallet from './initWallet'
import BudState from './budState'
import Navigation from './navigation'
import WalletCard from './walletCard'
import CardDeck from 'react-bootstrap/CardDeck'
import Axios from 'axios'

class content extends Component {

    constructor(props) {
        super(props)

        this.state = {
            walletExist: false,
            changeWalletRequest: false,
            selectedWallet: " ",
            allWallets: []
        }
    }

    async componentDidMount() {
        let walletVerify = await Axios.get("/api/wallets");

        if (walletVerify === null) {
            this.setState({
                walletExist: false
            });
        }
        else { this.setState({ walletExist: true, allWallets: walletVerify }); }
    }

    walletRequest = () => {
        if (this.state.changeWalletRequest === false)
            this.setState({ changeWalletRequest: true })
    }

    walletChanged = () => {
        if (this.state.changeWalletRequest === true) {
            this.setState({ changeWalletRequest: false })
        }
        console.log(this.state.walletExist)
    }

    chooseWallet = (walletID) => {
        this.setState({ selectedWallet: walletID })
        console.log(walletID)
    }

    render() {
        const walletExist = this.state.walletExist
        const walletRequest = this.state.changeWalletRequest
        const walletSelected = this.state.selectedWallet

        if (walletExist === false || walletRequest === true) {
            return <NewWallet
                walletHandle={this.walletChanged} />
        }

        else if (walletExist === true && walletSelected === " ") {
            return (
                <div><CardDeck>{this.state.allWallets.data.map(eachWallet => (
                    <WalletCard key={eachWallet._id} eachWalletHandle={eachWallet} chooseWalletHandle={this.chooseWallet} />
                )
                )}
                </CardDeck></div>
            )
        }
        else {
            return (
                <div>
                    <Navigation walletRequestHandle={this.walletRequest} />
                    <BudState selectedWalletHandle={walletSelected}/>

                </div>
            )

        }
    }
}

export default content



