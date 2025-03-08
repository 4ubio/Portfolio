import {Navigate, Route, Routes } from 'react-router-dom'
import {AwardsPage, CloudPage, EducationPage, IndexPage, TamfyPage, TechPage, WebPage, LecturesPage, MobilePage } from '../pages'

export const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<IndexPage/>}/> 
            <Route path='/education' element={<EducationPage/>}/> 
            <Route path='/tech' element={<TechPage/>}/> 
            <Route path='/tamfy' element={<TamfyPage/>}/> 
            <Route path='/cloud' element={<CloudPage/>}/> 
            <Route path='/web' element={<WebPage/>}/> 
            <Route path='/mobile' element={<MobilePage/>}/> 
            <Route path='/lectures' element={<LecturesPage/>}/> 
            <Route path='/awards' element={<AwardsPage/>}/> 
            <Route path='/*' element={<Navigate to='/' />} />
        </Routes>
    )
}