import {Navigate, Route, Routes } from 'react-router-dom'
import {AndroidPage, AwardsPage, CloudPage, EducationPage, IOSPage, IndexPage, TamfyPage, TechPage, WebPage, WorkshopsPage } from '../pages'

export const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<IndexPage/>}/> 
            <Route path='/education' element={<EducationPage/>}/> 
            <Route path='/tech' element={<TechPage/>}/> 
            <Route path='/tamfy' element={<TamfyPage/>}/> 
            <Route path='/cloud' element={<CloudPage/>}/> 
            <Route path='/web' element={<WebPage/>}/> 
            <Route path='/android' element={<AndroidPage/>}/> 
            <Route path='/ios' element={<IOSPage/>}/> 
            <Route path='/workshops' element={<WorkshopsPage/>}/> 
            <Route path='/awards' element={<AwardsPage/>}/> 
            <Route path='/*' element={<Navigate to='/' />} />
        </Routes>
    )
}