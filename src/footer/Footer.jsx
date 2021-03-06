import React from 'react';
import style from './Footer.module.css'
import FooterItem from "./footerItem/FooterItem";

const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={style.footerContainer}>
                    <h3 className={style.text}>Stroitelev Sergey</h3>
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
