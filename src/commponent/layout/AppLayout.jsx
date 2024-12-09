import React from 'react'
import AppMain from './AppMain'
import Header from './Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer'


const AppLayout = () => {
    return (
        <>
            <AppMain>
                <Header />
                <Outlet />
                <Footer />
            </AppMain>
        </>
    )
}

export default AppLayout
