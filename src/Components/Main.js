import React from 'react'
import HomeHero from './HomeHero'
import HomeServices from './HomeServices'
import HomeWorks from './HomeWorks'

function Main() {
    return (
        <div class="main-content landing">
				<HomeHero/>
				<HomeServices/>
        <HomeWorks/>
		</div>
    )
}

export default Main
