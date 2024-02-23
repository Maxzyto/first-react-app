import React from "react";
import styles from "./header.module.css"

function Header () {
    return(
        <header className={styles.header}>
           <h2>The header</h2>
            <p>This is a simple trial</p>
        </header>
    )
}

export default Header