import { Grid, Typography } from '@mui/material'
import { AppLayout } from '../layout/AppLayout'
import Carousel from 'react-material-ui-carousel'

export const AndroidPage = () => {
    return (
        <>
            <AppLayout>
                <Typography variant='h3' textAlign='center' className='animate__animated animate__fadeInRight'>📱 Android experience</Typography>

                {/*La Cafe App*/}
                <Grid container mt={2} className='animate__animated animate__fadeInLeft'>

                    <Grid item xs={12} md={5} p={{xs: 0, md: 2}}>
                        <Carousel animation='slide' duration='800' autoPlay>
                            <img src='./assets/AN1/1.png' className='carousel_img_mobile box-shadow' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/AN1/2.png' className='carousel_img_mobile box-shadow' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/AN1/3.png' className='carousel_img_mobile box-shadow' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/AN1/4.png' className='carousel_img_mobile box-shadow' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/AN1/5.png' className='carousel_img_mobile box-shadow' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                        </Carousel>
                    </Grid>

                    <Grid item xs={12} md={7} p={{xs: 0, md: 2}} alignContent='center'>
                        <Typography variant='h6'>2024</Typography>
                        <Typography variant='h4' color='primary.blue'>La Cafe App</Typography>
                        <Typography variant='h6'>IEST Anáhuac</Typography>
                        <br />
                        <Typography variant='h7'>
                            La Cafe Android app lets users browse the menu, place orders, and check order status as in the web. Built with Kotlin and Jetpack Compose, it supports English and Spanish, integrates the PayPal SDK for payments, uses Retrofit for network requests, and features a custom API for database interaction. This project highlights my full-stack and mobile development skills.
                        </Typography>
                    </Grid>

                </Grid>
            </AppLayout>
        </>
    )
}
