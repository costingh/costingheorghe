import './App.css';
import ContactModal from './Components/ContactModal';
import Header from './Components/Header';
import Main from './Components/Main';
import {useState} from 'react'

function App() {
  const [showModal, setShowModal] = useState(false);

  const showContactModal = () => {
      setShowModal(true)
  }

  const hideContactModal = () => {
    setShowModal(false)
  }

  return (
    <div className="app">
        <Header showContactModal={showContactModal}/>
        <Main/>
        <ContactModal hideContactModal={hideContactModal} showModal={showModal}/>
    </div>
  );
}

export default App;
