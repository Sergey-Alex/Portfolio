import React from 'react';
import style from './Work.module.css'

const Work = (props) => {
    return (
        <div>
            <div className={style.image}>
                <div className={style.textBtn}>watch project</div>
            </div>
            <div className={style.workBlock}>
                <span className={style.prN}>{props.projectName}</span>
                <span className={style.descr}>{props.descr}</span>
            </div>
        </div>

    );
};

export default Work;
