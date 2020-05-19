import React, { useState, useEffect } from 'react'

export const Header = () => {

    // const [language, setLanguage] = useState('en')

    // const languageArray = ['en', 'chi', 'fa', 'khm']

    // const greetingObj = {
    //     en: 'Hello',
    //     chi: '你好',
    //     fa:  'سلام',
    //     khm: 'សួស្តី'
    // }

    // const createh1 = (languageCode) => {
    //     return (
    //         <h1 id="header-greeting">
    //             {greetingObj[languageCode]}!
    //         </h1>
    //     )
    // }

    // useEffect(() => {
    //     const greetingInterval = setInterval(() => {
    //         document.getElementById("header").innerHTML = createh2(language)
    //         setLanguage(languageArray[languageArray.indexOf(language) + 1])
    //     }, 3000)

    //     return () => {
    //         clearInterval(greetingInterval)
    //     }
    // })

    /* 

     */

    /* 
    const greetingsArray = [
        'Hello',
        '你好',
        'سلام',
        'សួស្តី'
    ]

    const greetingsObj = {
        en: 'Hello',
        chi: '你好',
        fa:  'سلام',
        khm: 'សួស្តី'
    }

    const changeGreeting = (hello) => {
       const currentGreeting =  document.getElementById('header-greeting')
       currentGreeting.innerHTML = hello + '!'
    }

    useEffect(() => {

        let greetIdx = 1

        const greetingInterval = setInterval(() => { //interval should run changeGreeting with next element in greetingArray
            changeGreeting(greetingsArray[greetIdx])
            greetIdx = (greetIdx === greetingsArray.length - 1) ? 0 : greetIdx + 1
        }, 3000);

        return () => {
            clearInterval(greetingInterval)
        }

    }, [])
     */

    return (
        <div id="header">
            <h1 id="header-greeting"> Hello!</h1>
            <h2 id="header-text">
                My name is Kevin, and I make stuff
            </h2>
        </div>
    )
}

export default Header
