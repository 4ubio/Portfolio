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
                            <img src='./assets/Cafe3/1.png' className='carousel_img_2' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/Cafe3/1.png' className='carousel_img_2' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/Cafe3/1.png' className='carousel_img_2' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/Cafe3/1.png' className='carousel_img_2' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/Cafe3/1.png' className='carousel_img_2' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                        </Carousel>
                    </Grid>

                    <Grid item xs={12} md={7} p={{xs: 0, md: 2}}>
                        <Typography variant='h6'>2022 - Today</Typography>
                        <Typography variant='h4' color='primary.blue'>Cafe 3.0</Typography>
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

                {/* Vertice App */}
                <Grid container mt={2} className='animate__animated animate__fadeInRight'>
                    <Grid item xs={12} md={5} p={{xs: 0, md: 2}}>
                        <Carousel animation='slide' duration='800' autoPlay>
                            <img src='./assets/Cafe3/1.png' className='carousel_img_2' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/Cafe3/1.png' className='carousel_img_2' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/Cafe3/1.png' className='carousel_img_2' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/Cafe3/1.png' className='carousel_img_2' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/Cafe3/1.png' className='carousel_img_2' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                        </Carousel>
                    </Grid>

                    <Grid item xs={12} md={7} p={{xs: 0, md: 2}}>
                        <Typography variant='h6'>2023</Typography>
                        <Typography variant='h4' color='primary.blue'>Vértice App</Typography>
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

                {/* Asistencias IEST */}
                <Grid container mt={2} className='animate__animated animate__fadeInLeft'>
                    <Grid item xs={12} md={5} p={{xs: 0, md: 2}}>
                        <Carousel animation='slide' duration='800' autoPlay>
                            <img src='./assets/Cafe3/1.png' className='carousel_img_2' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/Cafe3/1.png' className='carousel_img_2' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/Cafe3/1.png' className='carousel_img_2' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/Cafe3/1.png' className='carousel_img_2' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/Cafe3/1.png' className='carousel_img_2' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                        </Carousel>
                    </Grid>

                    <Grid item xs={12} md={7} p={{xs: 0, md: 2}}>
                        <Typography variant='h6'>2022</Typography>
                        <Typography variant='h4' color='primary.blue'>Asistencias IEST</Typography>
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

                {/* ILAM */}
                <Grid container mt={2} className='animate__animated animate__fadeInRight'>
                    <Grid item xs={12} md={5} p={{xs: 0, md: 2}}>
                        <Carousel animation='slide' duration='800' autoPlay>
                            <img src='./assets/Cafe3/1.png' className='carousel_img_2' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/Cafe3/1.png' className='carousel_img_2' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/Cafe3/1.png' className='carousel_img_2' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/Cafe3/1.png' className='carousel_img_2' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/Cafe3/1.png' className='carousel_img_2' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                        </Carousel>
                    </Grid>

                    <Grid item xs={12} md={7} p={{xs: 0, md: 2}}>
                        <Typography variant='h6'>2021</Typography>
                        <Typography variant='h4' color='primary.blue'>ILAM</Typography>
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
