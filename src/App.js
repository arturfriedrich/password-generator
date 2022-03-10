import React, { useState } from "react"

import Lightning from "./icons/lightning.png" 
import Dots from "./icons/dots.png" 

export default function App() {
    const [password, setPassword] = useState("")

    function generatePassword() {
        var results = []
        for ( let j = 0; j < 4; j++ ) {
            var result           = ""
            var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
            var charactersLength = characters.length
            for ( let i = 0; i < 8; i++ ) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength))
            }
            results[j] = result
        }
        setPassword(results)
        console.log(password)
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
                    <p className="password">{password ? <span>{password[0]}</span> : <img src={Dots} />}</p>
                    <p className="password"><img src={Dots} />{password[1]}</p>
                    <p className="password"><img src={Dots} />{password[2]}</p>
                    <p className="password"><img src={Dots} />{password[3]}</p>
                </div>
            </div>
        </main>
    )
}