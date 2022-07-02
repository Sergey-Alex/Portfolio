import React from 'react';
import style from './Footer.module.css'
import styleContainer from '../common/styles/Container.module.css'
import FooterItem from "./footerItem/FooterItem";
const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={style.footerContainer}>
                <h3>Smart Man</h3>
                    <div className={style.square}>
                        <FooterItem/>
                        <FooterItem/>
                        <FooterItem/>
                        <FooterItem/>
                    </div>
            </div>

        </div>
    );
};

export default Footer;
