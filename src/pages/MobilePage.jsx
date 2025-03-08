import { Grid, Typography } from '@mui/material'
import { AppLayout } from '../layout/AppLayout'
import Carousel from 'react-material-ui-carousel'

export const MobilePage = () => {
    return (
        <>
            <AppLayout>
                <Typography variant='h3' textAlign='center' className='animate__animated animate__fadeInRight'>📱 Mobile projects</Typography>

                {/*La Cafe App*/}
                <Grid container mt={2} className='animate__animated animate__fadeInLeft'>

                    <Grid item xs={12} md={5} p={{xs: 0, md: 2}}>
                        <Carousel animation='slide' duration='800' autoPlay>
                            <img src='./assets/MOB2/1.png' className='carousel_img_mobile box-shadow' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/MOB2/2.png' className='carousel_img_mobile box-shadow' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/MOB2/3.png' className='carousel_img_mobile box-shadow' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/MOB2/4.png' className='carousel_img_mobile box-shadow' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/MOB2/5.png' className='carousel_img_mobile box-shadow' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                        </Carousel>
                    </Grid>

                    <Grid item xs={12} md={7} p={{xs: 0, md: 2}} alignContent='center'>
                        <Typography variant='h6'>2024</Typography>
                        <Typography variant='h4' color='primary.highlight'>La Cafe App</Typography>
                        <Typography variant='h6'>IEST Anáhuac</Typography>
                        <br />
                        <Typography variant='h7'>
                            La Cafe Android app lets users browse the menu, place orders, and check order status as in the web. Built with Kotlin and Jetpack Compose, it supports English and Spanish, integrates the PayPal SDK for payments, uses Retrofit for network requests, and features a custom API for database interaction. This project highlights my full-stack and mobile development skills.
                        </Typography>
                    </Grid>

                    <Grid item xs={12} m={2} textAlign='center'>
                        <img src='./assets/vline.png' className='line'></img>
                    </Grid>
                </Grid>

                {/*Winfit App*/}
                <Grid container mt={2} className='animate__animated animate__fadeInRight'>

                    <Grid item xs={12} md={5} p={{xs: 0, md: 2}}>
                        <Carousel animation='slide' duration='800' autoPlay>
                            <img src='./assets/MOB1/1.PNG' className='carousel_img_mobile box-shadow' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/MOB1/2.PNG' className='carousel_img_mobile box-shadow' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/MOB1/3.PNG' className='carousel_img_mobile box-shadow' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/MOB1/4.PNG' className='carousel_img_mobile box-shadow' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/MOB1/5.PNG' className='carousel_img_mobile box-shadow' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                        </Carousel>
                    </Grid>

                    <Grid item xs={12} md={7} p={{xs: 0, md: 2}} alignContent='center'>
                        <Typography variant='h6'>2024</Typography>
                        <Typography variant='h4' color='primary.highlight'>Winfit</Typography>
                        <br />
                        <Typography variant='h7'>
                            Winfit is an iOS app using Swift and SwiftUI to calculate aluminum profiles of different series for efficient window crafting. The app also enables users to create, share, and print PDFs with various measurements. This project highlights my skills in iOS development and practical application creation.
                        </Typography>
                    </Grid>

                </Grid>
            </AppLayout>
        </>
    )
}
