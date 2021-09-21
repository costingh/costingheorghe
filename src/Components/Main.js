import React from 'react'
import HomeHero from './HomeHero'
import HomeServices from './HomeServices'
import HomeWorks from './HomeWorks'

function Main({showContactModal}) {
    return (
        <div class="main-content landing">
				<HomeHero showContactModal={showContactModal}/>
				<HomeServices/>
        <HomeWorks/>
		</div>
    )
}

export default Main
