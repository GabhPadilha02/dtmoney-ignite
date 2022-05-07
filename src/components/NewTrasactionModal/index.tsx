import Modal from 'react-modal';
import { Container, RadioBox, TrasactionTypeContainer } from './styles';
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { FormEvent, useState } from 'react';
import { api } from '../../services/api';

interface NewTrasactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose} : NewTrasactionModalProps) {


    const [title, setTitle] = useState('')
    const [value, setValue] = useState(0)
    const [category, setCategory] = useState('')
    const [type, setType] = useState('deposit');

    function handleCreateNewTransaction(event:FormEvent) {
        event.preventDefault();
        
        const data = {
            title,
            value, 
            category, 
            type,
        }

        api.post('/trasactions', data)

    }

    return (
        <Modal 
          isOpen={isOpen} 
          onRequestClose={onRequestClose}
          overlayClassName="react-modal-overlay"
          className="react-modal-content"
          >

            <button 
            type="button" 
            onClick={onRequestClose} 
            className="react-modal-close">
                <img src={closeImg} alt="Close modal" />      
            </button>  

            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar transação</h2>
                
                <input 
                placeholder="Titulo"
                value={title}
                onChange={event => setTitle(event.target.value)}
                 />

                <input 
                type="number"
                placeholder="Valor"
                value={value}
                onChange={event => setValue(Number(event.target.value))}
                 />
                
                <TrasactionTypeContainer>

                    <RadioBox
                        type="button"
                        onClick={() => {setType('deposit')}}
                        isActive={type === 'deposit'}
                        activeColor="green"
                    >
                        <img src={incomeImg} alt="Income" />
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox
                        type="button"
                        onClick={() => {setType('withdraw')}}
                        isActive={type === 'withdraw'}
                        activeColor="red"
                    >
                        <img src={outcomeImg} alt="Outcome" />
                        <span>Saída</span>
                    </RadioBox>

                </TrasactionTypeContainer>

                <input 
                placeholder="Categoria"
                value={category}
                onChange={event => setCategory(event.target.value)}
                 />
                
                <button type="submit">
                    Cadastrar
                </button>
            </Container>

      </Modal>
    )
}