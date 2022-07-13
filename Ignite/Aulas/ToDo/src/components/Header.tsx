import React from 'react';

import styles from './Header.module.css';

import logo from '../assets/Logo.svg'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={logo} alt="logo do cabecalho" />
        </header>
    )
}