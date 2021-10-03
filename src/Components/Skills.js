import React, { useState, useEffect } from 'react'
import { technologySkills, toolsSkills } from '../utils/constants'
import '../styles/Skills.css'
import SwitchButton from './SwitchButton'
import Card from './Card'

function Skills() {
    const [checked, setChecked] = useState(false)
    const [items, setItems] = useState([])

    useEffect(() => {
        if (!checked) setItems(technologySkills)
        if (checked) setItems(toolsSkills)
    }, [checked])

    return (
        <section
            id="skills-section"
            className="home-works"
            style={{ margin: '300px 0 100px 0' }}
        >
            <div className="works-section">
                <div className="section-title text-center">
                    <h2>Skills</h2>
                </div>
                <div className="works-container">
                    <div className="skills">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12 col-md-6">
                                    <div className="left">
                                        {checked ? (
                                            <h1>Tools used</h1>
                                        ) : (
                                            <h1>Programming Skills</h1>
                                        )}
                                        {checked ? (
                                            <p>
                                                These are the tools that I used
                                                the most when building projects.
                                            </p>
                                        ) : (
                                            <p>
                                                I have used this technologies
                                                many times to develop web apps.
                                            </p>
                                        )}
                                        <div className="leftAbs">
                                            <div></div>
                                            {checked ? (
                                                <p>My Tools</p>
                                            ) : (
                                                <p>My skills</p>
                                            )}
                                        </div>
                                        <div className="btns">
                                            <SwitchButton
                                                checked={checked}
                                                setChecked={setChecked}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6">
                                    <div className="right">
                                        <div className="cards-row">
                                            {checked &&
                                                items.map((item, index) => {
                                                    return (
                                                        <Card
                                                            img={item.img}
                                                            delay={item.delay}
                                                            key={
                                                                item.img +
                                                                '-' +
                                                                index
                                                            }
                                                        />
                                                    )
                                                })}
                                            {!checked &&
                                                items.map((item, index) => {
                                                    return (
                                                        <Card
                                                            img={item.img}
                                                            delay={item.delay}
                                                            key={
                                                                item.img +
                                                                '-' +
                                                                index
                                                            }
                                                        />
                                                    )
                                                })}
                                        </div>
                                    </div>
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
