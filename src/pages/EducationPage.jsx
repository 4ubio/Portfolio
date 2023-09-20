import { Grid, Typography } from '@mui/material'
import { AppLayout } from '../layout/AppLayout'

export const EducationPage = () => {
    return (
        <>
            <AppLayout>
                <Typography variant='h3' textAlign='center' className='animate__animated animate__fadeInRight'>📚 Education</Typography>
                
                {/* Career */}
                <Grid container mt={2} className='animate__animated animate__fadeInLeft'>
                    <Grid item xs={12} md={3} textAlign='center'>
                        <img src='./assets/anahuac-logo.png' className='logo_education '></img>
                    </Grid>

                    <Grid item xs={12} md={9}>
                        <Typography variant='h6'>2020 - 2024</Typography>
                        <Typography variant='h4' color='primary.blue'>System and digital business engineering</Typography>
                        <Typography variant='h6'>IEST Anáhuac</Typography>
                        <br />
                        <Typography variant='h7'>
                            My educational journey in Systems and Digital Business Engineering has been a transformative and intellectually stimulating experience that has laid the foundation for my career in the dynamic intersection of technology and business.
                            My decision to pursue a degree in Systems and Digital Business Engineering stemmed from a deep fascination with technology and a strong desire to leverage it as a catalyst for innovation in the business world. 
                        </Typography>
                    </Grid>

                    <Grid item xs={12} m={2} textAlign='center'>
                        <img src='./assets/vline.png' className='line'></img>
                    </Grid>
                </Grid>

                {/* React */}
                <Grid container mt={2} className='animate__animated animate__fadeInRight'>
                    <Grid item xs={12} md={3} textAlign='center'>
                        <img src='./assets/udemy-logo.png' className='logo_education '></img>
                    </Grid>

                    <Grid item xs={12} md={9}>
                        <Typography variant='h6'>2023</Typography>
                        <Typography variant='h4' color='primary.blue'>React development bootcamp</Typography>
                        <Typography variant='h6'>Fernando Herrera</Typography>
                        <br />
                        <Typography variant='h7'>
                            The React Development Bootcamp was an intensive and hands-on program designed to equip participants with a comprehensive understanding of React.js and its ecosystem. During this immersive journey, I had the chance to explore React's core concepts, advanced features, and best practices.
                        </Typography>
                    </Grid>

                    <Grid item xs={12} m={2} textAlign='center'>
                        <img src='./assets/vline.png' className='line'></img>
                    </Grid>
                </Grid>

                {/* iOS */}
                <Grid container mt={2} className='animate__animated animate__fadeInLeft'>
                    <Grid item xs={12} md={3} textAlign='center'>
                        <img src='./assets/ab-logo.jpeg' className='logo_education '></img>
                    </Grid>

                    <Grid item xs={12} md={9}>
                        <Typography variant='h6'>2021</Typography>
                        <Typography variant='h4' color='primary.blue'>iOS Development Bootcamp</Typography>
                        <Typography variant='h6'>The App Brewery</Typography>
                        <br />
                        <Typography variant='h7'>
                            The iOS Development Bootcamp I attended was a rigorous and hands-on program designed to provide a comprehensive understanding of iOS app development using Swift, Apple's modern and powerful programming language. Throughout this transformative experience, I had the privilege of exploring the entire app development lifecycle, from concept to deployment on the App Store.                        
                        </Typography>
                    </Grid>

                    <Grid item xs={12} m={2} textAlign='center'>
                        <img src='./assets/vline.png' className='line'></img>
                    </Grid>
                </Grid>

                {/* Web */}
                <Grid container mt={2} className='animate__animated animate__fadeInRight'>
                    <Grid item xs={12} md={3} textAlign='center'>
                        <img src='./assets/udemy-logo.png' className='logo_education '></img>
                    </Grid>

                    <Grid item xs={12} md={9}>
                        <Typography variant='h6'>2021</Typography>
                        <Typography variant='h4' color='primary.blue'>Web development bootcamp</Typography>
                        <Typography variant='h6'>Código con Juan</Typography>
                        <br />
                        <Typography variant='h7'>
                            This intensive program equipped me with a comprehensive skill set and a deep understanding of web technologies, enabling me to craft exceptional digital experiences. Throughout this transformative experience, I had the privilege of diving into the realms of both frontend and backend development, building dynamic and interactive web applications.
                        </Typography>
                    </Grid>

                    <Grid item xs={12} m={2} textAlign='center'>
                        <img src='./assets/vline.png' className='line'></img>
                    </Grid>
                </Grid>

                {/* High school */}
                <Grid container mt={2} className='animate__animated animate__fadeInLeft'>
                    <Grid item xs={12} md={3} textAlign='center'>
                        <img src='./assets/anahuac-logo.png' className='logo_education '></img>
                    </Grid>

                    <Grid item xs={12} md={9}>
                        <Typography variant='h6'>2017 - 2020</Typography>
                        <Typography variant='h4' color='primary.blue'>High school</Typography>
                        <Typography variant='h6'>IEST Anáhuac</Typography>
                        <br />
                        <Typography variant='h7'>
                            My high school years were marked by a deep passion for the sciences, particularly physics and mathematics. These formative years provided me with a strong academic foundation and a fascination for the intricacies of the physical world and the beauty of mathematical concepts.                        
                        </Typography>
                    </Grid>
                </Grid>
            </AppLayout>
        </>
    )
}
