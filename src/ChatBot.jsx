import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import MainContent from "./MainContent";
import './assets/css/mediaQueries/media.css'


function ChatBot(){

    return(
        <div>
            <div className="chat-bot">
                <div className="left-widget">
                    <Header />
                </div>
                <div className="right-widget">
                    <MainContent />
                    
                </div>
                
            
            </div>
            <Footer />
            
        </div>
        
    )
}

export default ChatBot