import React, { useEffect, useState } from "react";
import './assets/css/Footer.css'

// const changeMode = () => {
//     const toggleBtn = document.getElementById('myToggleBtn')
//     const lightToggleBtn = document.getElementById('lightToggleBtn')
//     const container = document.querySelector('body')

//     toggleBtn.addEventListener('click', () => {
//         localStorage.setItem('mode', 'dark');

//         container.classList.add('dark-mode')
//         toggleBtn.style.display = 'none'
//         lightToggleBtn.style.display = 'block'
//     })

//     lightToggleBtn.addEventListener('click', () => {
//         localStorage.setItem('mode', 'light')

//         container.classList.remove('dark-mode')
//         toggleBtn.style.display = 'block'
//         lightToggleBtn.style.display = 'none'
//     })
// }

// // Function call
// changeMode()

// const checkMode = () => {
//     var mode_status = localStorage.getItem('mode')
//     const container = document.querySelector('body')
//     const lightToggleBtn = document.getElementById('lightToggleBtn')
//     const toggleBtn = document.getElementById('myToggleBtn')

//     if (mode_status === 'dark') {
//         container.classList.add('dark-mode')
//         toggleBtn.style.display = 'none'
//         lightToggleBtn.style.display = 'block'
//     } else {
//         container.classList.remove('dark-mode')
//         toggleBtn.style.display = 'block'
//         lightToggleBtn.style.display = 'none'
//     }

//     console.log(mode_status)
// }


// checkMode()

function Footer(){
    // const [isDarkMode, setIsDarkMode] = useState(false)
    // const toggleDarkMode = () => {
    //     setIsDarkMode(!isDarkMode)
    //     console.log("Hello")
    // }

    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {
        if(theme === 'light'){
            setTheme('dark')
        }else{
            setTheme('light')
        }
    }

    useEffect(() => {
        document.body.className = theme
    }, [theme])

    return(
        <div className="footer ${theme}">
            <p>Copyright &copy; reserved to [Business Name]</p>
            {/* <button
                id="myToggleBtn"
                onClick={toggleDarkMode}
                className={`dark-mode-toggle ${isDarkMode ? 'dark' : 'light'}`}
            >
                {isDarkMode ? 'Disable dark mode' : 'Enable dark mode'}
            </button> */}
            {/* <button
                id="lightToggleBtn"
            >
                Light Mode
            </button> */}
            <button onClick={toggleTheme} >Toggle theme</button>
        </div>
    )
}

export default Footer