import React from 'react';
import style from './Contacts.module.css'
import styleContainer from './Contacts.module.css'
import containerBlock from "../common/styles/Container.module.css";
const Contacts = () => {
    return (
        <div className={style.contactBlock}>
            <div className={`${containerBlock.container} ${styleContainer.contactContainer}`}>
                <h2 className={style.title}>Contacts</h2>
                <form action="" className={style.formStyle}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea className={style.textArea}></textarea>

                </form>
                <div className={style.sendHandler}>Send</div>
            </div>
        </div>
    );
};

export default Contacts;
