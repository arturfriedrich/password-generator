import React from "react"

import Lightning from "./icons/lightning.png" 
import Dots from "./icons/dots.png" 

export default function App() {
    return (
        <main>
            <div className="header">
                <h1 className="heading">Generate a<br /><span className="highlighted">random password</span></h1>
                <h2 className="subtitle">Never use an insecure password again</h2>
                <button className="generate-btn"><img src={Lightning} />Generate passwords</button>
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