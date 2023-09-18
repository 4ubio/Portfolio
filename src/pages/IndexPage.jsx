import { Grid, IconButton, Typography } from '@mui/material'
import { AppLayout } from '../layout/AppLayout'
import { GitHub, Instagram, LinkedIn, Mail, Phone } from '@mui/icons-material'

export const IndexPage = () => {
    return (
        <>
            <AppLayout>
                <Grid container>
                    <Grid item xs={12} md={7} >
                        <Typography variant='h4'>Nice to meet you 👋🏽, I'm</Typography>
                        <Typography variant='h1' color='primary.blue'>Sebastián Rubio</Typography>
                        <Typography variant='h6'>Software developer</Typography>
                    </Grid>

                    <Grid item xs={12} md={5} display='flex' justifyContent='center' alignItems='center'>
                        <img src='./assets/me.png' className='img_me'></img>
                    </Grid>
                </Grid>

                <Grid container mt={2} display='flex' justifyContent='center'>
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
                    </Grid>

                    <Grid container display='block' mt={1}>
                        <Grid item color='primary.blue' display='flex' alignItems='center'>
                            <Mail />
                            <Typography variant='h6' ml={2}>sebastianrubioquiroz@gmail.com</Typography>
                        </Grid>

                        <Grid item color='primary.blue' display='flex' alignItems='center'>
                            <Phone />
                            <Typography variant='h6' ml={2}>8334279418</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </AppLayout>
        </>
    )
}
