import React, {useState} from 'react';
import Modal from 'react-modal';
import CountySelector from './countySelector';



//Styles for Modal with county Dropdown//
const modalStyles = {
    content : {
      top: '40%',
      left: '15%',
      right: 'auto',
      bottom: 'auto',
      backgroundColor: 'green',  
      zIndex: '10',  
      height:  "150px",
      width: "50vw",
    }
};

//-----------Function to return Dropdown Modal-------//
function ModalToggle (){

    const [setModal,setModalToOpen] = useState(false);

    return(
        //Modal opens when guess button is pressed//
        <>
            <button id = "guess" disabled ={false} onClick={()=> setModalToOpen(true)}>Guess the county!</button>

            <Modal isOpen={setModal} style={modalStyles} onRequestClose={()=> setModalToOpen(false)}>
       <button onClick={()=> setModalToOpen(false)}>x</button>
        <CountySelector/>
        </Modal>
        </>
    )
}
export default ModalToggle;