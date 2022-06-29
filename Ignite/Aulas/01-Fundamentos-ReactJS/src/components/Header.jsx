import React from 'react';

import headerStyles from '../components/Header.module.css';

import igniteLogo from '../assets/ignite-logo.svg';

export function Header() {
    return (
        <header className="headerStyles.header">
            <img src={igniteLogo} alt="Logotipo do ignite" />
        </header>
    );
}