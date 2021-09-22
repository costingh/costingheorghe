import React, {useState, useEffect} from 'react'
import {technologySkills, toolsSkills} from '../utils/constants'
import '../styles/Skills.css'
import SwitchButton from './SwitchButton';
import Card from './Card';

function Skills() {
    const [checked, setChecked] = useState(false);
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        if(!checked) setItems(technologySkills);
        if(checked) setItems(toolsSkills);
    }, [checked])

    return (
        <section className="home-works" style={{margin: '300px 0 100px 0'}}>
            <div className="works-section">
                <div className="section-title text-center">
                    <h2>Skills</h2>
                </div>
                <div className="works-container">
                    <div className="skills">
                        <div className="container">
                            <div className="left">
                                {checked 
                                    ? <h1>Tools used</h1>
                                    : <h1>Programming Skills</h1>
                                }
                                {checked 
                                    ? <p>TOOLS ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, voluptate ratione? Delectus, praesentium. Delectus non vero voluptatibus perspiciatis modi quam.</p>
                                    : <p>SKILLS ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, voluptate ratione? Delectus, praesentium. Delectus non vero voluptatibus perspiciatis modi quam.</p>
                                }
                                <div className="leftAbs">
                                    <div></div>
                                    {checked 
                                        ? <p>My Tools</p>
                                        : <p>My skills</p>
                                    } 
                                </div>
                                <div className="btns">
                                    <SwitchButton 
                                        checked={checked} 
                                        setChecked={setChecked} 
                                    />
                                </div>
                            </div>
                            <div className="right">
                                <div className="row">
                                {checked && items.map((item) => { return <Card img={item.img} delay={item.delay}/> })}
                                {!checked && items.map((item) => { return <Card img={item.img} delay={item.delay}/> })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills
