import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router'
const Main = () => {
    return (
        <>
            <div>
                <Navbar />
            </div>
            <div>
                <Outlet />
            </div>
        </>
    )
}

export default Main