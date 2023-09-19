import { Button, Grid, Typography } from '@mui/material'
import { AppLayout } from '../layout/AppLayout'
import Carousel from 'react-material-ui-carousel'
import { Language } from '@mui/icons-material'

export const TamfyPage = () => {
    return (
        <>
            <AppLayout>
                <Typography variant='h3' textAlign='center' className='animate__animated animate__fadeInRight'>🌴 Tamfy</Typography>

                <Grid item mt={2} className='animate__animated animate__fadeInLeft'>
                    <Grid item>
                        <Carousel animation='slide' duration='800' autoPlay>
                            <img src='./assets/Tamfy/1.png' className='carousel_img_tamfy box-shadow' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/Tamfy/1.png' className='carousel_img_tamfy box-shadow' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/Tamfy/1.png' className='carousel_img_tamfy box-shadow' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/Tamfy/1.png' className='carousel_img_tamfy box-shadow' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/Tamfy/1.png' className='carousel_img_tamfy box-shadow' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                        </Carousel>
                    </Grid>

                    <Grid item mt={2} textAlign='center'>
                        <img src='./assets/Tamfy/tamfy_logo.png' className='tamfy_logo'></img>
                        <Typography variant='h6'>Founder & Owner since 2023</Typography>
                        <Button
                            onClick={() => window.open('https://tamfy.mx/')}
                            sx={{
                                m: 1,
                                backgroundColor: 'primary.main',
                                color: 'primary.blue', 
                                ':hover': {
                                    backgroundColor: 'primary.main',
                                    color: 'primary.blue',
                                },
                            }}
                        >
                            <Language />
                            <Typography ml={2}>Website</Typography>
                        </Button>
                        <br />
                        <Typography variant='h7'>
                            Pellentesque aliquam dui vitae sodales ultrices. Mauris a pellentesque odio. Morbi metus arcu, tempus vel blandit efficitur, tempor sit amet justo. In iaculis egestas urna eu scelerisque. Etiam vehicula semper elit vitae tristique. Nulla fermentum leo bibendum orci tincidunt, id posuere tellus semper. Aliquam rhoncus vel felis aliquet pharetra.
                            Pellentesque aliquam dui vitae sodales ultrices. Mauris a pellentesque odio. Morbi metus arcu, tempus vel blandit efficitur, tempor sit amet justo. In iaculis egestas urna eu scelerisque. Etiam vehicula semper elit vitae tristique. Nulla fermentum leo bibendum orci tincidunt, id posuere tellus semper. Aliquam rhoncus vel felis aliquet pharetra.
                        </Typography>
                    </Grid>
                </Grid>

            </AppLayout>
        </>
    )
}
