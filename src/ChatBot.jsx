import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import MainContent from "./MainContent";
import './assets/css/mediaQueries/media.css'
import './assets/css/index.css'


function ChatBot(){

    return(
        <>
            <div className="chat-bot">
                <div className="left-widget">
                    <Header />
                </div>
                <div className="right-widget">
                    <MainContent />
                    
                </div>
                
            
            </div>
            <Footer />
            
        </>
        
    )
}

export default ChatBot