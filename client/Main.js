import React from 'react'
import { Home } from './pages'
import { Header } from './components'

export const Main = () => {
    return (
        <div className="content-area">
            <Header />
            <Home />
        </div>
    )
}       

export default Main
