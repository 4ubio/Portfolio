import {Navigate, Route, Routes } from 'react-router-dom'
import { IndexPage } from '../pages'

export const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<IndexPage/>}/> 
            <Route path='/*' element={<Navigate to='/' />} />
        </Routes>
    )
}