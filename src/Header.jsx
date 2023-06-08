import React, { useState } from "react";
import './assets/css/Header.css'
import './assets/css/mediaQueries/media.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from "@fortawesome/free-solid-svg-icons";


function Header(){

    const [chatTitle, setChatTitle] = useState('New Chat')

    function refreshPage(){
        window.location.reload()
    }
    
    return(
        <div className="left-widget">
            <div className="header">
                <div className="burger">
                    <div></div>
                    <div></div>
                    <div> </div>
                </div>

                <div className="chat-name">
                    <p>{chatTitle}</p>
                </div>

                <div className="add-new-chat" onClick={refreshPage} >
                    <FontAwesomeIcon icon={faPlus} />
                </div>
            

            </div>
            <div className="prevMessages">
                <p>Previous messages will appear here</p>
            </div>
        </div>
    )
}
export default Header