import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import App from "./App";

const reactcontentRoot = ReactDOM.createRoot
(
    document.getElementById('root')

)

reactcontentRoot.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)

