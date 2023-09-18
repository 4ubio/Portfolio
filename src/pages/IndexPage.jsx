import { Grid, IconButton, Typography } from '@mui/material'
import { AppLayout } from '../layout/AppLayout'
import { GitHub, Instagram, LinkedIn, Mail, Phone } from '@mui/icons-material'

export const IndexPage = () => {
    return (
        <>
            <AppLayout>
                <Grid container className='animate__animated animate__fadeInRight'>
                    <Grid item xs={12} md={7} >
                        <Typography variant='h4'>Nice to meet you 👋🏽, I'm</Typography>
                        <Typography variant='h1' color='primary.blue'>Sebastián Rubio</Typography>
                        <Typography variant='h6'>Software developer</Typography>
                    </Grid>

                    <Grid item xs={12} md={5} display='flex' justifyContent='center' alignItems='center'>
                        <img src='./assets/me.png' className='img_me'></img>
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

                <Grid p={3} mt={2} borderRadius={5} bgcolor='primary.blue' className='animate__animated animate__fadeInRight'>
                    <Typography variant='h6' color='white'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fringilla auctor justo sed eleifend. Vivamus maximus cursus accumsan. Integer dui neque, mollis vitae orci ut, porttitor volutpat urna. Sed sollicitudin neque quis maximus porttitor. Nam mi nibh, sagittis sit amet diam non, malesuada elementum turpis. In vitae lacus ac eros aliquam vehicula ut ac orci. Nam pulvinar commodo gravida. Aliquam erat volutpat. Donec ac enim tincidunt, malesuada lectus non, laoreet purus. Donec quis pulvinar justo. Cras quis est rutrum, volutpat metus in, ultricies sem. Suspendisse blandit, nunc et accumsan commodo, mi neque maximus orci, sit amet blandit nibh risus eu orci. Nam in rhoncus diam. Mauris mattis ultricies sapien, ut suscipit enim suscipit placerat.
                    </Typography>
                </Grid>
            </AppLayout>
        </>
    )
}
