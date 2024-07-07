import { Button, Grid, Typography } from '@mui/material'
import { AppLayout } from '../layout/AppLayout'
import Carousel from 'react-material-ui-carousel'
import { Language } from '@mui/icons-material'

export const TamfyPage = () => {
    return (
        <>
            <AppLayout>
                <Grid item className='animate__animated animate__fadeInRight'>

                    <Grid item textAlign='center'>
                        <img src='./assets/Tamfy/tamfy_logo.png' className='tamfy_logo'></img>
                        <Typography variant='h4' >Chief Executive Officer since 2023</Typography>
                        <Button
                            onClick={() => window.open('https://tamfy.mx/')}
                            sx={{
                                m: 1,
                                backgroundColor: 'primary.main',
                                color: 'primary.highlight', 
                                ':hover': {
                                    backgroundColor: 'primary.main',
                                    color: 'primary.highlight',
                                },
                            }}
                        >
                            <Language />
                            <Typography ml={2}>Website</Typography>
                        </Button>
                    </Grid>

                    <Grid item>
                        <Carousel animation='slide' duration='800' autoPlay>
                            <img src='./assets/Tamfy/1.png' className='carousel_img_tamfy box-shadow' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/Tamfy/2.png' className='carousel_img_tamfy box-shadow' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/Tamfy/3.png' className='carousel_img_tamfy box-shadow' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/Tamfy/4.png' className='carousel_img_tamfy box-shadow' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/Tamfy/5.png' className='carousel_img_tamfy box-shadow' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                        </Carousel>
                    </Grid> 

                    <Grid item mt={2} textAlign='center'>
                        <Typography variant='h7'>
                            I'm excited to showcase a project that exemplifies my passion for technology, entrepreneurship, and community engagement – Tamfy. This venture was born out of a deep commitment to support and promote local businesses in my city while harnessing the power of technology to connect communities. <br></br> <br></br>
                            Tamfy was conceptualized as a platform dedicated to empowering local businesses and fostering connections within Tampico, Madero and Altamira. The vision was to create an online space where small and medium-sized enterprises (SMEs) could showcase their products and services, reach a wider audience, and thrive in a digital age. <br></br> <br></br>
                            Developing and managing Tamfy came with challenges, from user acquisition to maintaining a positive and engaging community atmosphere. However, these challenges have been invaluable learning experiences that have strengthened my skills in project management, community building, and technology. <br></br> <br></br>
                            Tamfy is an ongoing project, and I remain committed to its growth and success. It's a testament to my belief in the power of technology to make a positive impact on our communities and support the businesses that enrich our city.
                        </Typography>
                    </Grid>
                </Grid>

            </AppLayout>
        </>
    )
}
