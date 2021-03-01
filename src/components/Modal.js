import React, {useState} from 'react';
import Modal from 'react-modal';
import CountySelector from './countySelector';

//Styles for Modal with county Dropdown//
const customStyles = {
    content : {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight           : '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'green',  
      zIndex: '10',  
      height:  "150px",
      width: "80vw",
    }
};

//-----------Function to return Dropdown Modal-------//
function ModalInFunctionalComponent (){

    const [modalIsOpen,setModalIsOpen] = useState(false);

    const setModalIsOpenToTrue =()=>{
        setModalIsOpen(true)
    }

    const setModalIsOpenToFalse =()=>{
        setModalIsOpen(false)
    }

    return(
        //Modal opens when guess button is pressed//
        <>
            <button id = "guess" disabled ={false} onClick={setModalIsOpenToTrue}>Guess the county!</button>

            <Modal isOpen={modalIsOpen} style={customStyles} onRequestClose={()=> setModalIsOpen(false)}>
       <button onClick={setModalIsOpenToFalse}>x</button>
        <CountySelector/>
        </Modal>
        </>
    )
}
export default ModalInFunctionalComponent;