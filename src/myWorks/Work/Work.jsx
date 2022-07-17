import React from 'react';
import style from './Work.module.css'

const Work = (props) => {
    return (
        <div className={style.selfWorkCard}>
            <div className={style.image}>
                <a className={style.textBtn}>watch project</a>
            </div>
            <div className={style.workBlock}>
                <span className={style.prN}>{props.projectName}</span>
                <span className={style.descr}>{props.descr}</span>
            </div>
        </div>

    );
};

export default Work;
