import {Container} from './css';
import Modal from '../../component/modal';
import { useState } from 'react';

export function Teste() {
  const [stado, setStado] = useState({
    modal:false}
    );
  
  function estadoModal(){
    setStado({
      modal: true
    });
  }

  return(
    <Container>
      <h1>TESTE MODAL</h1>
      <button className='butModal' onClick={estadoModal}>Modal</button>
      {stado.modal ? 
          <Modal title='Modal'>             
          </Modal> : null
      }
    </Container>
  )
}