import React, { Component } from 'react'
//import Form from 'react-bootstrap/Form'
//import Button from 'react-bootstrap/Button'
//import Container from 'react-bootstrap/Container'
import NewWallet from './initWallet'

import BudState from './budState'

 class content extends Component {
     constructor(props) {
         super(props)
     
         this.state = {walletExist:false}
        
         console.log(this.state.walletExist)
        
      }
      
       

     addWallet=()=>{
        if (this.state.walletExist ===false)
        {
            this.setState({walletExist:true})
        }  
        console.log(this.state.walletExist)
    }
     
    render() {
        
        
        const walletExist =this.state.walletExist
      
        if(walletExist===false)
        {
            return <NewWallet
                    walletHandle={this.addWallet}/>
        }
        
        else if(walletExist===true)
        {
            return <BudState/>
            
        }
        
    }
  
}

export default content



