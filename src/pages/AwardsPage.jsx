import { Grid, Typography } from '@mui/material'
import { AppLayout } from '../layout/AppLayout'
import Carousel from 'react-material-ui-carousel'

export const AwardsPage = () => {
    return (
        <>
            <AppLayout>
                <Typography variant='h3' textAlign='center' className='animate__animated animate__fadeInRight'>🏆 Awards</Typography>

                {/* Academic excellence 2023 */}
                <Grid container mt={2} className='animate__animated animate__fadeInLeft'>
                    <Grid item xs={12} md={4} p={{xs: 0, md: 2}}>
                        <Carousel animation='slide' duration='800' autoPlay>
                            <img src='./assets/AW3/1.jpg' className='carousel_img_3 box-shadow' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/AW3/2.jpg' className='carousel_img_3 box-shadow' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/AW3/3.jpg' className='carousel_img_3 box-shadow' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/AW3/4.jpg' className='carousel_img_3 box-shadow' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/AW3/5.jpg' className='carousel_img_3 box-shadow' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                        </Carousel>
                    </Grid>

                    <Grid item xs={12} md={8} p={{xs: 0, md: 2}}>
                        <Typography variant='h6'>September 2023</Typography>
                        <Typography variant='h4' color='primary.blue'>🏅 Academic excellence</Typography>
                        <Typography variant='h6'>IEST Anáhuac</Typography>
                        <br />
                        <Typography variant='h7'>
                            I once again received an academic excellence award due to my grade point average for the January–June 2023 semester. With 9.98 out of 10, this is the second time I have received this award in my career, and it encourages me to keep growing and providing the finest performance possible. It's always a pleasure to be recognized for my efforts. Thanks to IEST Anahuac for this award.                        
                        </Typography>
                    </Grid>

                    <Grid item xs={12} m={2} textAlign='center'>
                        <img src='./assets/vline.png' className='line'></img>
                    </Grid>
                </Grid>

                {/* Essay */}
                <Grid container mt={2} className='animate__animated animate__fadeInRight'>
                    <Grid item xs={12} md={4} p={{xs: 0, md: 2}}>
                        <Carousel animation='slide' duration='800' autoPlay>
                            <img src='./assets/AW2/1.JPG' className='carousel_img_3 box-shadow' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/AW2/2.JPG' className='carousel_img_3 box-shadow' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/AW2/3.jpg' className='carousel_img_3 box-shadow' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/AW2/4.JPG' className='carousel_img_3 box-shadow' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                        </Carousel>
                    </Grid>

                    <Grid item xs={12} md={8} p={{xs: 0, md: 2}}>
                        <Typography variant='h6'>December 2022</Typography>
                        <Typography variant='h4' color='primary.blue'>🥇 Essay contest</Typography>
                        <Typography variant='h6'>IEST Anáhuac</Typography>
                        <br />
                        <Typography variant='h7'>
                            I won first place in a college writing contest for students in classical and contemporary humanism. My essay entitled "Cognitive biases of adults with youngers" discusses how the perspective of adults and older generations may be influenced by many factors about the younger generations. Winning competitions like these and standing out in areas outside of my career makes me proud and inspires me to keep learning in new areas.                         
                        </Typography>
                    </Grid>

                    <Grid item xs={12} m={2} textAlign='center'>
                        <img src='./assets/vline.png' className='line'></img>
                    </Grid>
                </Grid>

                {/* Academic excellence 2022 */}
                <Grid container mt={2} className='animate__animated animate__fadeInLeft'>
                    <Grid item xs={12} md={4} p={{xs: 0, md: 2}}>
                        <Carousel animation='slide' duration='800' autoPlay>
                            <img src='./assets/AW1/1.jpg' className='carousel_img_3 box-shadow' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/AW1/2.jpg' className='carousel_img_3 box-shadow' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/AW1/3.jpg' className='carousel_img_3 box-shadow' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/AW1/4.jpg' className='carousel_img_3 box-shadow' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/AW1/5.jpg' className='carousel_img_3 box-shadow' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                        </Carousel>
                    </Grid>

                    <Grid item xs={12} md={8} p={{xs: 0, md: 2}}>
                        <Typography variant='h6'>August 2022</Typography>
                        <Typography variant='h4' color='primary.blue'>🏅 Academic excellence</Typography>
                        <Typography variant='h6'>IEST Anáhuac</Typography>
                        <br />
                        <Typography variant='h7'>
                            I received an academic excellence award due to my grade point average for the January–June 2022 semester. With a remarkable GPA of 9.98 out of 10, this recognition stands as a testament to my commitment to learning, relentless pursuit of knowledge, and unwavering passion for academic pursuits. Thanks to IEST Anahuac for this award.                     
                        </Typography>
                    </Grid>
                </Grid>
            </AppLayout>
        </>
    )
}
