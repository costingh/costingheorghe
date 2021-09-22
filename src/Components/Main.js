import React from 'react'
import About from './About'
import HomeHero from './HomeHero'
import HomeServices from './HomeServices'
import HomeWorks from './HomeWorks'
import Timeline from './Timeline'

function Main({showContactModal}) {
    return (
        <div class="main-content landing">
				<HomeHero showContactModal={showContactModal}/>
        <About/>
        <Timeline/>
				<HomeServices/>
        <HomeWorks/>
		</div>
    )
}

export default Main
