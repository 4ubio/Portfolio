import { Grid, IconButton, Typography } from '@mui/material'
import { Favorite, GitHub, InsertDriveFile, Instagram, LinkedIn, Mail } from '@mui/icons-material'
import ReactTyped from "react-typed";
import { AppLayout } from '../layout/AppLayout'

export const IndexPage = () => {
    return (
        <>
            <AppLayout>
                <Grid container className='animate__animated animate__fadeInRight'>
                    <Grid item xs={12} md={7} color='primary.font'>
                        <Grid container>
                            <Typography variant='h4'>Nice to meet you 👋🏽, I'm</Typography>
                            <Typography variant='h1' color='primary.highlight'>Sebastián Rubio</Typography>
                            <Typography variant='h6' color='primary.highlight'>
                                <ReactTyped
                                    strings={["Software Engineer", "CEO of Tamfy", "Public Speaker"]}
                                    typeSpeed={50}
                                    backSpeed={50}
                                    loop
                                />
                                <span style={{ color: '#ffffff'}}>&nbsp;based in Tampico, México 🇲🇽</span>
                            </Typography>
                        </Grid>

                        <Grid container mt={2} justifyContent={{xs: "center", md: "start"}}>
                            <IconButton sx={{color: 'primary.highlight'}} onClick={() => window.open('https://www.instagram.com/4ubio/')}>
                                <Instagram sx={{fontSize: 30}}/>
                            </IconButton>

                            <IconButton sx={{color: 'primary.highlight'}} onClick={() => window.open('https://www.linkedin.com/in/sebastiánrubi0/')}>
                                <LinkedIn sx={{fontSize: 30}}/>
                            </IconButton>

                            <IconButton sx={{color: 'primary.highlight'}} onClick={() => window.open('https://github.com/4ubio')}>
                                <GitHub sx={{fontSize: 30}}/>
                            </IconButton>

                            <IconButton sx={{color: 'primary.highlight'}} onClick={() => window.open('https://redanahuac-my.sharepoint.com/:b:/g/personal/sebastian_rubio66_anahuac_mx/EZxO-p6ViBJHs5KLKt6cFlEBQ_iphAUg3QnBEv3CKr7Hug?e=sbmRdQ')}>
                                <InsertDriveFile sx={{fontSize: 30}}/>
                            </IconButton>

                            <IconButton sx={{color: 'primary.highlight'}} onClick={() => window.open('mailto: sebastianrubioquiroz@gmail.com')}>
                                <Mail sx={{fontSize: 30}}/>
                            </IconButton>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} md={5} display='flex' justifyContent='center' alignItems='center'>
                        <img src='./assets/me.png' className='img_me box-shadow'></img>
                    </Grid>
                </Grid>

                <Grid mt={2} className='animate__animated animate__fadeInLeft' color='primary.font'>
                    <Typography variant='h6'>🧑🏽‍💻 About me</Typography>

                    <Grid item mt={2}>
                        <Typography variant='h7'>
                            I'm a passionate and innovative professional with a strong background in software engineering, where I've had the privilege of building a career that blends my love for technology and coding. <br /> <br />
                            I began my career in software engineering in 2020, and since then, I have developed a diverse range of projects. My passion spans <span style={{ color: '#00ffbb'}}>web</span> and <span style={{ color: '#00ffbb'}}>mobile development</span>, as well as <span style={{ color: '#00ffbb'}}>machine learning</span>, driving me to continuously expand my skill set and craft innovative solutions. This commitment to growth and creativity is reflected in the projects showcased in my portfolio. <br /> <br />
                            If you're interested in collaborating, discussing job opportunities, or simply exchanging ideas, I'd love to hear from you. Feel free to explore my portfolio and reach out! ✌🏽
                        </Typography>
                    </Grid>
                    
                    <Grid item mt={3} display='flex'>
                        <Favorite sx={{color: 'primary.highlight'}} />
                        <Typography variant='h7' ml={2}>
                            Fun fact: I'm a sneakerhead 👟. Sneakers and clothing design are my personal passion.
                        </Typography>
                    </Grid>
                </Grid>

            </AppLayout>
        </>
    )
}
