import { Grid, IconButton, Typography } from '@mui/material'
import { AppLayout } from '../layout/AppLayout'
import Carousel from 'react-material-ui-carousel'
import { GitHub, Language } from '@mui/icons-material'

export const CloudPage = () => {
    return (
        <>
            <AppLayout>
                <Typography variant='h3' textAlign='center' className='animate__animated animate__fadeInRight'>☁️ Cloud apps</Typography>

                {/* Cloudate */}
                <Grid container mt={2} bgcolor='#1F8A70' borderRadius={5} className='animate__animated animate__fadeInLeft'>
                    <Grid item width='100%' mt={2} mb={2} xs={12} sm={4}>
                        <Carousel animation='slide' duration='800' autoPlay>
                            <img src='./assets/Cloudate/1.png' className='carousel_img' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/Cloudate/2.png' className='carousel_img' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/Cloudate/3.png' className='carousel_img' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/Cloudate/4.png' className='carousel_img' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/Cloudate/5.png' className='carousel_img' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/Cloudate/6.png' className='carousel_img' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/Cloudate/7.png' className='carousel_img' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/Cloudate/8.png' className='carousel_img' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                        </Carousel>
                    </Grid>

                    <Grid item display='block' color='white' p={3} xs={12} sm={8}>
                        <Typography variant='h4' textAlign='center'>☁️ Cloudate</Typography>

                        <Grid container mt={1} justifyContent='center'>
                            <IconButton sx={{color: 'primary.main'}} onClick={() => window.open('https://github.com/4ubio/Cloudate')}>
                                <GitHub sx={{fontSize: 30}}/>
                            </IconButton>

                            <IconButton sx={{color: 'primary.main'}} onClick={() => window.open('https://cloudate.netlify.app/')}>
                                <Language sx={{fontSize: 30}}/>
                            </IconButton>
                        </Grid>

                        <Grid item mt={2}>
                            <Typography variant='h7'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque rem saepe inventore enim nobis quisquam corrupti commodi sit maiores. Accusantium fuga aspernatur impedit sunt delectus saepe doloremque maiores officia perferendis.
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi asperiores, voluptas iure fuga omnis eum quibusdam eaque, sapiente quo culpa dignissimos, ipsam dolorum quidem facere! Eum doloribus aut molestias facere?
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>

                {/* Cloudybook */}
                <Grid container mt={2} bgcolor='#213555' borderRadius={5} className='animate__animated animate__fadeInRight'>
                    <Grid item width='100%' mt={2} mb={2} xs={12} sm={4}>
                        <Carousel animation='slide' duration='800' autoPlay>
                            <img src='./assets/Cloudybook/1.png' className='carousel_img' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/Cloudybook/2.png' className='carousel_img' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/Cloudybook/3.png' className='carousel_img' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/Cloudybook/4.png' className='carousel_img' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/Cloudybook/5.png' className='carousel_img' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/Cloudybook/6.png' className='carousel_img' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                        </Carousel>
                    </Grid>

                    <Grid item display='block' color='white' p={3} xs={12} sm={8}>
                        <Typography variant='h4' textAlign='center'>☁️ Cloudybook</Typography>

                        <Grid container mt={1} justifyContent='center'>
                            <IconButton sx={{color: 'primary.main'}} onClick={() => window.open('https://github.com/4ubio/Cloudybook')}>
                                <GitHub sx={{fontSize: 30}}/>
                            </IconButton>

                            <IconButton sx={{color: 'primary.main'}} onClick={() => window.open('https://cloudybook.netlify.app/')}>
                                <Language sx={{fontSize: 30}}/>
                            </IconButton>
                        </Grid>

                        <Grid item mt={2}>
                            <Typography variant='h7'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque rem saepe inventore enim nobis quisquam corrupti commodi sit maiores. Accusantium fuga aspernatur impedit sunt delectus saepe doloremque maiores officia perferendis.
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi asperiores, voluptas iure fuga omnis eum quibusdam eaque, sapiente quo culpa dignissimos, ipsam dolorum quidem facere! Eum doloribus aut molestias facere?
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </AppLayout>
        </>
    )
}
