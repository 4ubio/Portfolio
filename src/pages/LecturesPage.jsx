import { Grid, Typography } from '@mui/material'
import { AppLayout } from '../layout/AppLayout'
import Carousel from 'react-material-ui-carousel'

export const LecturesPage = () => {
    return (
        <>
            <AppLayout>
                <Typography variant='h3' textAlign='center' className='animate__animated animate__fadeInRight'>👨🏽‍🏫 Lectures</Typography>

                {/* Build a Career in Web Dev */}
                <Grid container mt={2} className='animate__animated animate__fadeInLeft'>
                    <Grid item xs={12} md={4} p={{xs: 0, md: 2}}>
                        <Carousel animation='slide' duration='800' autoPlay>
                            <img src='./assets/L3/1.JPG' className='carousel_img_3 box-shadow' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/L3/2.JPG' className='carousel_img_3 box-shadow' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/L3/3.JPG' className='carousel_img_3 box-shadow' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/L3/4.JPG' className='carousel_img_3 box-shadow' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/L3/5.JPG' className='carousel_img_3 box-shadow' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                        </Carousel>
                    </Grid>

                    <Grid item xs={12} md={8} p={{xs: 0, md: 2}}>
                        <Typography variant='h6'>October 2024</Typography>
                        <Typography variant='h4' color='primary.highlight'>Build a career in Web Development</Typography>
                        <Typography variant='h6'>ISND IEST Anáhuac</Typography>
                        <br />
                        <Typography variant='h7'>
                            I had the honor of giving a lecture alongside my partner Josue Arreola for the students in my career on "Building a Career in Web Development". We shared a roadmap of key technologies and skills essential for anyone looking to master web development in today’s fast-paced digital world. From front-end frameworks to back-end tools, it was exciting to see so much enthusiasm from future developers eager to dive into the world of tech. 
                        </Typography>
                    </Grid>

                    <Grid item xs={12} m={2} textAlign='center'>
                        <img src='./assets/vline.png' className='line'></img>
                    </Grid>
                </Grid>

                {/* SIM */}
                <Grid container mt={2} className='animate__animated animate__fadeInRight'>
                    <Grid item xs={12} md={4} p={{xs: 0, md: 2}}>
                        <Carousel animation='slide' duration='800' autoPlay>
                            <img src='./assets/L2/1.jpg' className='carousel_img_3 box-shadow' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/L2/2.jpg' className='carousel_img_3 box-shadow' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/L2/3.jpg' className='carousel_img_3 box-shadow' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/L2/4.jpg' className='carousel_img_3 box-shadow' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/L2/5.jpg' className='carousel_img_3 box-shadow' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                        </Carousel>
                    </Grid>

                    <Grid item xs={12} md={8} p={{xs: 0, md: 2}}>
                        <Typography variant='h6'>September 2023</Typography>
                        <Typography variant='h4' color='primary.highlight'>Introduction to coding with Python</Typography>
                        <Typography variant='h6'>SIM IEST Anáhuac</Typography>
                        <br />
                        <Typography variant='h7'>
                            I once again had the opportunity to share my knowledge of Python programming in September 2023. Mechatronics engineering students attended this session with the intention of learning and reinforcing the fundamentals of coding in this language. It's always a pleasure to talk and help others with teaching coding, which is one of my biggest passions. Special thanks to the Sociedad de Ingeniería Mecatronica for inviting me and to Gerardo Schekaiban for teaching alongside me.                        
                        </Typography>
                    </Grid>

                    <Grid item xs={12} m={2} textAlign='center'>
                        <img src='./assets/vline.png' className='line'></img>
                    </Grid>
                </Grid>

                {/* FPE */}
                <Grid container mt={2} className='animate__animated animate__fadeInLeft'>
                    <Grid item xs={12} md={4} p={{xs: 0, md: 2}}>
                        <Carousel animation='slide' duration='800' autoPlay>
                            <img src='./assets/L1/1.jpg' className='carousel_img_3 box-shadow' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/L1/2.jpg' className='carousel_img_3 box-shadow' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/L1/3.jpg' className='carousel_img_3 box-shadow' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/L1/4.jpg' className='carousel_img_3 box-shadow' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/L1/5.jpg' className='carousel_img_3 box-shadow' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                        </Carousel>
                    </Grid>

                    <Grid item xs={12} md={8} p={{xs: 0, md: 2}}>
                        <Typography variant='h6'>April 2023</Typography>
                        <Typography variant='h4' color='primary.highlight'>Introduction to coding with Python</Typography>
                        <Typography variant='h6'>Foro Proyecciones Empresariales</Typography>
                        <br />
                        <Typography variant='h7'>
                            In April 2023, I had the opportunity to share my knowledge of Python programming. This session had the purpose of teaching the fundamentals of coding in this language and creating some applications. It's always a pleasure to talk and teach about my career and encourage people to enter the CS field. Special thanks to FPE (Foro Proyecciones Empresariales) for inviting me and to Josué Arreola for teaching alongside me.                        
                        </Typography>
                    </Grid>
                </Grid>
            </AppLayout>
        </>
    )
}
