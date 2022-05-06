import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal' 
import { NewTransactionModal } from "./components/NewTrasactionModal";

Modal.setAppElement('#root')

export function App() {

  const [isNewTrasactionModalOpen, setIsNewTrasactionModalOpen] = useState (false);

    function handleOpenNewTransactionModal() {
        setIsNewTrasactionModalOpen(true)
    }

    function handleCloseNewTransactionModal() {
        setIsNewTrasactionModalOpen(false)
    }


  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTrasactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </>
  );
}

