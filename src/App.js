import './App.css'
import ContactModal from './Components/ContactModal'
import Header from './Components/Header'
import Main from './Components/Main'
import React, { useState } from 'react'
import Footer from './Components/Footer'

function App() {
    const [showModal, setShowModal] = useState(false)

    const showContactModal = () => {
        setShowModal(true)
    }

    const hideContactModal = () => {
        setShowModal(false)
    }

    return (
        <div className="app">
            <Header showContactModal={showContactModal} />
            <Main showContactModal={showContactModal} />
            <ContactModal
                hideContactModal={hideContactModal}
                showModal={showModal}
            />
            <Footer showContactModal={showContactModal} />
        </div>
    )
}

export default App
