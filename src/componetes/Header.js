/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Header.css';


// eslint-disable-next-line import/no-anonymous-default-export
export default ({black}) => {


    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://marcas-logos.net/wp-content/uploads/2019/11/Netflix-Logo.png" alt="Netflix" />
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://media.istockphoto.com/vectors/user-icon-vector-sign-and-symbol-isolated-on-white-background-user-vector-id1000902826?k=6&m=1000902826&s=170667a&w=0&h=JBk09y4qXuS-34UUqMdZ2OZnCc6eTerUGE6_KmlKOic=" alt="Usuario" />
                </a>
            </div>
        </header>
    );
}