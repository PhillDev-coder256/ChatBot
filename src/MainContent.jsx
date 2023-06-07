import React from "react";
import { useState } from "react";
import './assets/css/MainContent.css'
import avatar from './assets/images/phil.jpg'
import newavatar from './assets/images/1.jpg'

function MainContent(){
    const [messages, setMessages] = useState([])
    const [inputValue, setInputValue] = useState('')

    const [reply, setReply] = useState("Thank you for asking, I will reply to you soon")
    
    


    const handleMessageSubmit = (e) => {
        e.preventDefault()
        // console.log(questionCount)
        if(inputValue.trim() !== ''){
            setMessages([...messages, {
                text: inputValue,
                sender: 'user',
                reply: reply
            }])
            setInputValue('')
            // questionCount + 1
            // We shall call the chatbot backend API here to get the response
            // After receiving the response, add it to the messages state
        }

    }

    return(
        <div className="right-widget">
            <div className="bot-container">
                <div className="bot-messages">
                    {messages.map((message, index) => (
                        <div
                            key={index}
                            // className={`message ${message.sender === 'user' ? 'user' : 'bot'}`}
                        >
                            <div className="input-text">
                                {message.text}
                                
                            </div>
                            <div className="reply-text">
                                <p>{message.reply}</p>
                            </div>
                            
                        </div>

                    ))}
                </div>
                {/* <div className="reply">{reply}</div> */}
                <div className="form">
                    <form 
                    className="bot-input"
                    onSubmit={handleMessageSubmit}
                    >
                    <div className="profile">
                        <img src={avatar} alt="Profile-Photo" />
                    </div>
                    <div className="input">
                        <input 
                            type="text" 
                            placeholder="Ask me anything ..." 
                            value={inputValue}
                            onChange={
                                (e) => setInputValue(e.target.value)
                            }
                        />
                    </div>
                    <div className="submit">
                        <button
                            type="submit"
                        >Send</button>
                    </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default MainContent