import React, { useState } from "react"
import { CopyToClipboard } from 'react-copy-to-clipboard';

import Lightning from "./icons/lightning.png" 
import Dots from "./icons/dots.png" 

export default function App() {
    const [password, setPassword] = useState("")
    const [copyed1, setCopyed1] = useState(false)
    const [copyed2, setCopyed2] = useState(false)
    const [copyed3, setCopyed3] = useState(false)
    const [copyed4, setCopyed4] = useState(false)
    
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
    }

    function copy1() {
        setCopyed1(true)
        setTimeout(() => {
            setCopyed1(false)
        }, 3000)
    }

    function copy2() {
        setCopyed2(true)
        setTimeout(() => {
            setCopyed2(false)
        }, 3000)
    }

    function copy3() {
        setCopyed3(true)
        setTimeout(() => {
            setCopyed3(false)
        }, 3000)
    }

    function copy4() {
        setCopyed4(true)
        setTimeout(() => {
            setCopyed4(false)
        }, 3000)
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
                    <p className="password-display">
                        <CopyToClipboard text={password[0]} onCopy={() => copy1()}>
                            {copyed1 ? <span className="password">Copyed!</span> : password ? <span className="password">{password[0]}</span> : <img src={Dots} />}
                        </CopyToClipboard>
                    </p>
                    <p className="password-display">
                        <CopyToClipboard text={password[1]} onCopy={() => copy2()}>
                            {copyed2 ? <span className="password">Copyed!</span> : password ? <span className="password">{password[1]}</span> : <img src={Dots} />}
                        </CopyToClipboard>
                    </p>
                    <p className="password-display">
                        <CopyToClipboard text={password[2]} onCopy={() => copy3()}>
                            {copyed3 ? <span className="password">Copyed!</span> : password ? <span className="password">{password[2]}</span> : <img src={Dots} />}
                        </CopyToClipboard>
                    </p>
                    <p className="password-display">
                        <CopyToClipboard text={password[3]} onCopy={() => copy4()}>
                            {copyed4 ? <span className="password">Copyed!</span> : password ? <span className="password">{password[3]}</span> : <img src={Dots} />}
                        </CopyToClipboard>
                    </p>
                </div>
            </div>
        </main>
    )
}