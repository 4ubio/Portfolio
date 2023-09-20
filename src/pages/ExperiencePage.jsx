import { Grid, Typography } from '@mui/material'
import { AppLayout } from '../layout/AppLayout'
import Carousel from 'react-material-ui-carousel'

export const ExpPage = () => {
    return (
        <>
            <AppLayout>
                <Typography variant='h3' textAlign='center' className='animate__animated animate__fadeInRight'>💼 Experience</Typography>

                {/* Cafe 3.0 */}
                <Grid container mt={2} className='animate__animated animate__fadeInLeft'>
                    <Grid item xs={12} md={5} p={{xs: 0, md: 2}}>
                        <Carousel animation='slide' duration='800' autoPlay>
                            <img src='./assets/Cafe/1.png' className='carousel_img_2 box-shadow' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/Cafe/2.png' className='carousel_img_2 box-shadow' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/Cafe/3.png' className='carousel_img_2 box-shadow' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/Cafe/4.png' className='carousel_img_2 box-shadow' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/Cafe/5.png' className='carousel_img_2 box-shadow' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                        </Carousel>
                    </Grid>

                    <Grid item xs={12} md={7} p={{xs: 0, md: 2}}>
                        <Typography variant='h6'>2022 - Today</Typography>
                        <Typography variant='h4' color='primary.blue'>Cafe 3.0</Typography>
                        <Typography variant='h6'>IEST Anáhuac</Typography>
                        <br />
                        <Typography variant='h7'>
                            Cafe 3.0 is a web platform where students can make food orders in the campus cafe, consult the current status of their orders and see the whole menu. Work on this project gave me experience in new languages, technologies, development methodologies and skills like self-learning. So satisfied with the results and potential use of students.                        
                        </Typography>
                    </Grid>

                    <Grid item xs={12} m={2} textAlign='center'>
                        <img src='./assets/vline.png' className='line'></img>
                    </Grid>
                </Grid>

                {/* Vertice App */}
                <Grid container mt={2} className='animate__animated animate__fadeInRight'>
                    <Grid item xs={12} md={5} p={{xs: 0, md: 2}}>
                        <Carousel animation='slide' duration='800' autoPlay>
                            <img src='./assets/Vertice/2.png' className='carousel_img_2 box-shadow' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/Vertice/1.png' className='carousel_img_2 box-shadow' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/Vertice/3.png' className='carousel_img_2 box-shadow' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/Vertice/4.png' className='carousel_img_2 box-shadow' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/Vertice/5.png' className='carousel_img_2 box-shadow' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                        </Carousel>
                    </Grid>

                    <Grid item xs={12} md={7} p={{xs: 0, md: 2}}>
                        <Typography variant='h6'>2023</Typography>
                        <Typography variant='h4' color='primary.blue'>Vértice App</Typography>
                        <Typography variant='h6'>IEST Anáhuac</Typography>
                        <br />
                        <Typography variant='h7'>
                            In 2023, I joined to the development team in this project. Vértice App is a web platform for excellence program "Vértice" and his members, applicants and administrators. On this web, members will have an entire information system about Vértice subjects, events, skills, points and more. So glad for the invite to take part of the development team and satisfied with the professional improvements that brought to me.                        
                        </Typography>
                    </Grid>

                    <Grid item xs={12} m={2} textAlign='center'>
                        <img src='./assets/vline.png' className='line'></img>
                    </Grid>
                </Grid>

                {/* Asistencias IEST */}
                <Grid container mt={2} className='animate__animated animate__fadeInLeft'>
                    <Grid item xs={12} md={5} p={{xs: 0, md: 2}}>
                        <Carousel animation='slide' duration='800' autoPlay>
                            <img src='./assets/Asistencias/1.png' className='carousel_img_2 box-shadow' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/Asistencias/2.png' className='carousel_img_2 box-shadow' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/Asistencias/3.png' className='carousel_img_2 box-shadow' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/Asistencias/4.png' className='carousel_img_2 box-shadow' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/Asistencias/5.png' className='carousel_img_2 box-shadow' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                        </Carousel>
                    </Grid>

                    <Grid item xs={12} md={7} p={{xs: 0, md: 2}}>
                        <Typography variant='h6'>2022</Typography>
                        <Typography variant='h4' color='primary.blue'>Asistencias IEST</Typography>
                        <Typography variant='h6'>IEST Anáhuac</Typography>
                        <br />
                        <Typography variant='h7'>
                            I developed this project for my college which was entrusted to me by human resources as part of make his training process more efficient. Asistencias IEST is a web platform where teachers can register their assistance to meetings and trainings in the school through QR codes. Administrators can create meetings, consult assistance and see the teacher's data. Developing this web makes me proud of myself for the given confidence in my skills. So satisfied with the results and use of teachers and human resources.                         
                        </Typography>
                    </Grid>

                    <Grid item xs={12} m={2} textAlign='center'>
                        <img src='./assets/vline.png' className='line'></img>
                    </Grid>
                </Grid>

                {/* ILAM */}
                <Grid container mt={2} className='animate__animated animate__fadeInRight'>
                    <Grid item xs={12} md={5} p={{xs: 0, md: 2}}>
                        <Carousel animation='slide' duration='800' autoPlay>
                            <img src='./assets/ILAM/1.png' className='carousel_img_2 box-shadow' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/ILAM/2.png' className='carousel_img_2 box-shadow' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/ILAM/3.png' className='carousel_img_2 box-shadow' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/ILAM/4.png' className='carousel_img_2 box-shadow' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/ILAM/5.png' className='carousel_img_2 box-shadow' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                        </Carousel>
                    </Grid>

                    <Grid item xs={12} md={7} p={{xs: 0, md: 2}}>
                        <Typography variant='h6'>2021</Typography>
                        <Typography variant='h4' color='primary.blue'>ILAM</Typography>
                        <Typography variant='h6'>IEST Anáhuac</Typography>
                        <br />
                        <Typography variant='h7'>
                            ILAM is a web platform where chemistry engineering students can reserve a laboratory in the campus, request private classes, etc. Work on this project gave me my first steps of coding with teammates and get acquainted with some development methodologies. So satisfied with the results and use of students.                        
                        </Typography>
                    </Grid>
                </Grid>
            </AppLayout>
        </>
    )
}
