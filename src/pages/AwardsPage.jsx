import { Grid, Typography } from '@mui/material'
import { AppLayout } from '../layout/AppLayout'
import Carousel from 'react-material-ui-carousel'

export const AwardsPage = () => {
    return (
        <>
            <AppLayout>
                <Typography variant='h3' textAlign='center' className='animate__animated animate__fadeInRight'>🏆 Awards</Typography>

                {/* Academic excellence 2024 - 2 */}
                <Grid container mt={2} className='animate__animated animate__fadeInLeft'>
                    <Grid item xs={12} md={4} p={{xs: 0, md: 2}}>
                        <Carousel animation='slide' duration='800' autoPlay>
                            <img src='./assets/AW5/1.jpg' className='carousel_img_3 box-shadow' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/AW5/2.jpg' className='carousel_img_3 box-shadow' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/AW5/3.jpg' className='carousel_img_3 box-shadow' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/AW5/4.jpg' className='carousel_img_3 box-shadow' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                        </Carousel>
                    </Grid>

                    <Grid item xs={12} md={8} p={{xs: 0, md: 2}}>
                        <Typography variant='h6'>September 2024</Typography>
                        <Typography variant='h4' color='primary.highlight'>🏅 Academic excellence</Typography>
                        <Typography variant='h6'>IEST Anáhuac</Typography>
                        <br />
                        <Typography variant='h7'>
                            I once again had the honor of receiving an academic excellence award for my performance in the January–June 2024 semester, with a perfect 10 GPA. This marks the fourth time I've received this recognition, which continues to inspire me to pursue excellence. Being acknowledged for my hard work is always rewarding, and I am thankful to IEST Anáhuac for this honor.
                        </Typography>
                    </Grid>

                    <Grid item xs={12} m={2} textAlign='center'>
                        <img src='./assets/vline.png' className='line'></img>
                    </Grid>
                </Grid>

                {/* Academic excellence 2024 - 1 */}
                <Grid container mt={2} className='animate__animated animate__fadeInRight'>
                    <Grid item xs={12} md={4} p={{xs: 0, md: 2}}>
                        <Carousel animation='slide' duration='800' autoPlay>
                            <img src='./assets/AW4/1.jpg' className='carousel_img_3 box-shadow' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/AW4/2.jpg' className='carousel_img_3 box-shadow' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/AW4/3.jpg' className='carousel_img_3 box-shadow' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                            <img src='./assets/AW4/4.jpg' className='carousel_img_3 box-shadow' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                        </Carousel>
                    </Grid>

                    <Grid item xs={12} md={8} p={{xs: 0, md: 2}}>
                        <Typography variant='h6'>February 2024</Typography>
                        <Typography variant='h4' color='primary.highlight'>🏅 Academic excellence</Typography>
                        <Typography variant='h6'>IEST Anáhuac</Typography>
                        <br />
                        <Typography variant='h7'>
                            I once again was honored to receive an academic excellence award for my performance in the August–December 2023 semester, achieving a grade point average of 9.92 out of 10. This is the third time I have received this award, and it serves as motivation for me to continue striving for excellence. Being recognized for my efforts is always gratifying, and I am grateful to IEST Anáhuac for this recognition. 
                        </Typography>
                    </Grid>

                    <Grid item xs={12} m={2} textAlign='center'>
                        <img src='./assets/vline.png' className='line'></img>
                    </Grid>
                </Grid>

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
                        <Typography variant='h4' color='primary.highlight'>🏅 Academic excellence</Typography>
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
                        <Typography variant='h4' color='primary.highlight'>🥇 Essay contest</Typography>
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
                        <Typography variant='h4' color='primary.highlight'>🏅 Academic excellence</Typography>
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
