import { Button, Grid, IconButton, Typography } from '@mui/material'
import { Favorite, GitHub, InsertDriveFile, Instagram, LinkedIn, Mail, Phone } from '@mui/icons-material'
import ReactTyped from "react-typed";
import { AppLayout } from '../layout/AppLayout'

export const IndexPage = () => {
    return (
        <>
            <AppLayout>
                <Grid container className='animate__animated animate__fadeInRight'>
                    <Grid item xs={12} md={7} >
                        <Typography variant='h4'>Nice to meet you 👋🏽, I'm</Typography>
                        <Typography variant='h1' color='primary.blue'>
                            <ReactTyped
                                strings={["Sebastián Rubio"]}
                                typeSpeed={100}
                                backSpeed={50}
                                loop
                            />
                        </Typography>
                        <Typography variant='h6'>
                            <ReactTyped
                                strings={["Software Engineer based in Tampico, México 🇲🇽"]}
                                typeSpeed={50}
                            />
                        </Typography>
                    </Grid>

                    <Grid item xs={12} md={5} display='flex' justifyContent='center' alignItems='center'>
                        <img src='./assets/me.png' className='img_me box-shadow'></img>
                    </Grid>
                </Grid>

                <Grid container mt={2} display='flex' justifyContent='center' className='animate__animated animate__fadeInLeft'>
                    <Typography variant='h4'>Reach me at</Typography>

                    <Grid container mt={1} justifyContent='center'>
                        <IconButton sx={{color: 'primary.blue'}} onClick={() => window.open('https://www.instagram.com/4ubio/')}>
                            <Instagram sx={{fontSize: 30}}/>
                        </IconButton>

                        <IconButton sx={{color: 'primary.blue'}} onClick={() => window.open('https://www.linkedin.com/in/sebastiánrubi0/')}>
                            <LinkedIn sx={{fontSize: 30}}/>
                        </IconButton>

                        <IconButton sx={{color: 'primary.blue'}} onClick={() => window.open('https://github.com/4ubio')}>
                            <GitHub sx={{fontSize: 30}}/>
                        </IconButton>

                        <IconButton sx={{color: 'primary.blue'}} onClick={() => window.open('mailto: sebastianrubioquiroz@gmail.com')}>
                            <Mail sx={{fontSize: 30}}/>
                        </IconButton>

                        <IconButton sx={{color: 'primary.blue'}} onClick={() => window.open('tel: 8334279418')}>
                            <Phone sx={{fontSize: 30}}/>
                        </IconButton>
                    </Grid>
                </Grid>

                <Grid item textAlign='center' mt={2} className='animate__animated animate__fadeInLeft'>
                    <Button
                        sx={{
                            backgroundColor: 'primary.main',
                            color: 'primary.blue', 
                            border: 'primary.blue', 
                            ':hover': {
                                backgroundColor: 'primary.main',
                                color: 'primary.blue',
                                borderColor: 'primary.blue', 
                            },
                        }}
                        onClick={() => window.open('https://drive.google.com/file/d/1URepRGFksN9s57gpL6i_coxt0ybhZm-R/view?usp=sharing')}
                    >
                        <InsertDriveFile />
                        <Typography ml={2}>Check my resume</Typography>
                    </Button>
                </Grid>

                <Grid p={3} mt={2} borderRadius={5} bgcolor='primary.blue' className='animate__animated animate__fadeInRight box-shadow'>
                    <Typography variant='h6' color='white'>
                        I'm Sebastián, but you can call me Sebas. I'm a passionate and dedicated professional in the field of software engineering, where I've had the privilege of building a career that blends my love for technology and software development with my expertise in coding. <br></br> <br></br>
                        My career in software engineering began in 2020 with a profound fascination for coding. From that point forward, I've been on a continuous quest to deepen my knowledge, acquire new skills, and contribute to the ever-evolving landscape of software development. <br></br> <br></br>
                        My career journey has equipped me with a versatile skill set, including proficiency in programming languages such as Python, R, Swift, Kotlin and JavaScript. I'm particularly passionate about web development and machine learning, where I've demonstrated a track record of stunning web apps and projects that you can explore in my portfolio. <br></br> <br></br>
                        If you're interested in collaborating, discussing job opportunities, or simply sharing ideas, I'd love to hear from you. Please feel free to explore my whole portfolio and reach out to me. ✌🏽 <br></br> <br></br>
                    </Typography>

                    <Grid item mt={2} display='flex'>
                        <Favorite sx={{color: 'white'}} />
                        <Typography variant='h7' color='white' ml={2}>
                            Fun fact: I'm a sneakerhead 👟. Sneakers and clothing design is my personal passion.
                        </Typography>
                    </Grid>
                </Grid>

            </AppLayout>
        </>
    )
}
