import {Navigate, Route, Routes } from 'react-router-dom'
import { IndexPage } from '../pages'

export const AppRouter = () => {
    return (
        <Routes>
            <Route path='/about-me' element={<IndexPage/>}/> 
            <Route path='/*' element={<Navigate to='/about-me' />} />
        </Routes>
    )
}