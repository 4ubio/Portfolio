import { Grid, Typography } from '@mui/material'
import { AppLayout } from '../layout/AppLayout'
import Carousel from 'react-material-ui-carousel'

export const IOSPage = () => {
    return (
        <>
            <AppLayout>
                <Typography variant='h3' textAlign='center' className='animate__animated animate__fadeInRight'>📱 iOS experience</Typography>

                {/*Winfit App*/}
                <Grid container mt={2} className='animate__animated animate__fadeInLeft'>

                    <Grid item xs={12} md={5} p={{xs: 0, md: 2}}>
                        <Carousel animation='slide' duration='800' autoPlay>
                            <img src='./assets/IOS1/1.PNG' className='carousel_img_mobile box-shadow' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/IOS1/2.PNG' className='carousel_img_mobile box-shadow' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/IOS1/3.PNG' className='carousel_img_mobile box-shadow' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/IOS1/4.PNG' className='carousel_img_mobile box-shadow' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/IOS1/5.PNG' className='carousel_img_mobile box-shadow' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
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
