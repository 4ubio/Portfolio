import {Navigate, Route, Routes } from 'react-router-dom'
import { AwardsPage, CloudPage, EducationPage, ProjectsPage, IndexPage, TamfyPage, TechPage, WorkshopsPage } from '../pages'

export const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<IndexPage/>}/> 
            <Route path='/education' element={<EducationPage/>}/> 
            <Route path='/tech' element={<TechPage/>}/> 
            <Route path='/tamfy' element={<TamfyPage/>}/> 
            <Route path='/cloud' element={<CloudPage/>}/> 
            <Route path='/projects' element={<ProjectsPage/>}/> 
            <Route path='/workshops' element={<WorkshopsPage/>}/> 
            <Route path='/awards' element={<AwardsPage/>}/> 
            <Route path='/*' element={<Navigate to='/' />} />
        </Routes>
    )
}