import React from "react";
import './assets/css/Header.css'
import './assets/css/mediaQueries/media.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";


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
                    {/* <div className="vertical"></div>
                    <div className="horizontal"></div> */}
                    {/* <FontAwesomeIcon icon={faEnvelope} /> */}
                    <FontAwesomeIcon icon={faPlus} />
                </div>
            

            </div>
            <div className="prevMessages">
                
            </div>
        </div>
    )
}

export default Header