import React from 'react'
import '../styles/Card.css';

function Card({img, delay}) {
    return (
        <div className="skills-card animate" style={{animationDuration: `${delay/600}s`  }}>
            <img className='img' src={img} alt=''/>
        </div>
        
    )
}

export default Card
