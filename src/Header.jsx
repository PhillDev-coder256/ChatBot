import React from "react";
import './assets/css/Header.css'
import './assets/css/mediaQueries/media.css'

function Header(){
    
    return(
        <div className="left-widget">
            <div className="header">
                <div className="burger">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                <div className="chat-name">
                    <p>New Chat</p>
                </div>

                <div className="add-new-chat">
                    <div className="vertical"></div>
                    <div className="horizontal"></div>
                </div>
            

            </div>
            <div className="prevMessages">
                
            </div>
        </div>
    )
}

export default Header