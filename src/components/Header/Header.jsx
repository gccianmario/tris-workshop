import React from 'react';
import "./Header.css";

import jetopLogo from "../../assets/jtopLogo.svg";

const Header = ()=>(
    <header>
        <img src={jetopLogo} alr={"logo"}/>
        <h1>X vs. O Chi vincerà?</h1>
    </header>
);

export default Header;