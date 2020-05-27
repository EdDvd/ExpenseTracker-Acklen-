import React,{useState} from 'react'
import Modal from 'react-modal'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalTitle from 'react-bootstrap/ModalTitle'
import Button from 'react-bootstrap/Button'

function Transactions() {
    const [showTrans, setShowTrans] = useState(false)

        
    return (
        <div class="text-center">
           <Button  variant="primary" onClick={()=>setShowTrans(true)}>
        Transacciones
      </Button>

      <Modal  
       size="lg"
       aria-labelledby="contained-modal-title-vcenter"
       centered isOpen={showTrans}>
        
        <ModalHeader closeButton>
          <ModalTitle id="example-custom-modal-styling-title">
            Custom Modal Styling
          </ModalTitle>
        </ModalHeader>
        <div>
        <Button  onClick={()=>setShowTrans(false)}>
            Save
          </Button>{' '}
        <Button  onClick={()=>setShowTrans(false)}>
            Close
          </Button>
        </div>  
      </Modal>
        </div>
    )
   
}

export default Transactions
