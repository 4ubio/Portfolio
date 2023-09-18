import {Navigate, Route, Routes } from 'react-router-dom'
import { EducationPage, IndexPage } from '../pages'

export const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<IndexPage/>}/> 
            <Route path='/education' element={<EducationPage/>}/> 
            <Route path='/*' element={<Navigate to='/' />} />
        </Routes>
    )
}