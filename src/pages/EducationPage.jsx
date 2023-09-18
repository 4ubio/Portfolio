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
                            Pellentesque aliquam dui vitae sodales ultrices. Mauris a pellentesque odio. Morbi metus arcu, tempus vel blandit efficitur, tempor sit amet justo. In iaculis egestas urna eu scelerisque. Etiam vehicula semper elit vitae tristique. Nulla fermentum leo bibendum orci tincidunt, id posuere tellus semper. Aliquam rhoncus vel felis aliquet pharetra.
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
                            Pellentesque aliquam dui vitae sodales ultrices. Mauris a pellentesque odio. Morbi metus arcu, tempus vel blandit efficitur, tempor sit amet justo. In iaculis egestas urna eu scelerisque. Etiam vehicula semper elit vitae tristique. Nulla fermentum leo bibendum orci tincidunt, id posuere tellus semper. Aliquam rhoncus vel felis aliquet pharetra.
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
                            Pellentesque aliquam dui vitae sodales ultrices. Mauris a pellentesque odio. Morbi metus arcu, tempus vel blandit efficitur, tempor sit amet justo. In iaculis egestas urna eu scelerisque. Etiam vehicula semper elit vitae tristique. Nulla fermentum leo bibendum orci tincidunt, id posuere tellus semper. Aliquam rhoncus vel felis aliquet pharetra.
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
                            Pellentesque aliquam dui vitae sodales ultrices. Mauris a pellentesque odio. Morbi metus arcu, tempus vel blandit efficitur, tempor sit amet justo. In iaculis egestas urna eu scelerisque. Etiam vehicula semper elit vitae tristique. Nulla fermentum leo bibendum orci tincidunt, id posuere tellus semper. Aliquam rhoncus vel felis aliquet pharetra.
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
                            Pellentesque aliquam dui vitae sodales ultrices. Mauris a pellentesque odio. Morbi metus arcu, tempus vel blandit efficitur, tempor sit amet justo. In iaculis egestas urna eu scelerisque. Etiam vehicula semper elit vitae tristique. Nulla fermentum leo bibendum orci tincidunt, id posuere tellus semper. Aliquam rhoncus vel felis aliquet pharetra.
                        </Typography>
                    </Grid>
                </Grid>
            </AppLayout>
        </>
    )
}
