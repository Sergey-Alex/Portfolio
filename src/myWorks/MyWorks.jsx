import React from 'react';
import  styleWorks from './MyWorks.module.css'
import Work from "./Work/Work";
import style from '../common/styles/Container.module.css'


const MyWorks = () => {
    return (
        <div className={styleWorks.myWorksBlock}>
            <div className={`${styleWorks.containerWorks} ${style.container}`}>
                <h2 className={styleWorks.title}>Works</h2>
                <div className={styleWorks.works}>
                    <Work projectName ='Project name 1' descr = 'description 1'/>
                    <Work projectName ='Project name 2' descr = 'description 2'/>
                </div>
            </div>
        </div>
    );
};

export default MyWorks;
