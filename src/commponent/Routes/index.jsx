import React from 'react'
import { Routes, Route } from "react-router-dom"
import AppLayout from '../layout/AppLayout';
import Home from '../pages/Home';
import About from './../pages/About';
import Product from './../pages/Product';
import Contact from './../pages/Contact';
import PageNotFound from '../pages/PageNotFound';

const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route element={<AppLayout />} >
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/product' element={<Product />} />
                    <Route path='/contactus' element={<Contact />} />
                </Route>
                <Route path="*" element={<PageNotFound />}></Route>
            </Routes>
        </>
    )
}

export default AppRoutes;
