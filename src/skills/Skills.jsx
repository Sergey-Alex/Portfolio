import React from 'react';
import style from './Skills.module.css'
import containerBlock from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";

const Skills = () => {
    let description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
        ' At aut dolore ea excepturi explicabo id laudantium magni maiores natus nihil'

    return (
        <div className={style.skillsBlock}>
            <div className={`${containerBlock.container} ${style.skillContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title='JS' description={description}/>
                    <Skill title='CSS' description={description}/>
                    <Skill title='React' description={description}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;
