import React, { useState } from "react"

import Lightning from "./icons/lightning.png" 
import Dots from "./icons/dots.png" 

export default function App() {
    const [passwords, setPasswords] = useState([])

    function generatePassword() {
        let result = "";
        let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let charactersLength = characters.length;
        for ( let j = 0; j < 4; j++) {
            for ( let i = 0; i < 8; i++ ) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            setPasswords(passwords[j] = result)
        }
        console.log(passwords)
    }

    return (
        <main>
            <div className="header">
                <h1 className="heading">Generate a<br /><span className="highlighted">random password</span></h1>
                <h2 className="subtitle">Never use an insecure password again</h2>
                <button className="generate-btn" onClick={generatePassword}><img src={Lightning} />Generate passwords</button>
            </div>
            <hr />
            <div className="password-wrapper">
                <div className="passwords">
                    <p className="password"><img src={Dots} /></p>
                    <p className="password"><img src={Dots} /></p>
                    <p className="password"><img src={Dots} /></p>
                    <p className="password"><img src={Dots} /></p>
                </div>
            </div>
        </main>
    )
}