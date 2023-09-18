import { Grid, Typography, Chip } from '@mui/material'
import { AppLayout } from '../layout/AppLayout'

export const TechPage = () => {
    return (
        <>
            <AppLayout>
                <Typography variant='h3' textAlign='center' className='animate__animated animate__fadeInRight'>💻 Tech stack</Typography>

                {/* Frontend */}
                <Grid container mt={2} className='animate__animated animate__fadeInLeft'>
                    <Typography variant='h4'>Frontend Development</Typography>
                    <Typography variant='h7' mt={2}>
                        Pellentesque aliquam dui vitae sodales ultrices. Mauris a pellentesque odio. Morbi metus arcu, tempus vel blandit efficitur, tempor sit amet justo. In iaculis egestas urna eu scelerisque. Etiam vehicula semper elit vitae tristique. Nulla fermentum leo bibendum orci tincidunt, id posuere tellus semper. Aliquam rhoncus vel felis aliquet pharetra.
                    </Typography>

                    <Grid container mt={2} gap={1}>
                        <Chip label='React.js' variant='outlined' sx={{backgroundColor: 'primary.main', color: 'primary.blue', borderColor: 'primary.blue'}}/>
                        <Chip label='Redux' variant='outlined' sx={{backgroundColor: 'primary.main', color: 'primary.blue', borderColor: 'primary.blue'}}/>
                        <Chip label='React Router Dom' variant='outlined' sx={{backgroundColor: 'primary.main', color: 'primary.blue', borderColor: 'primary.blue'}}/>
                        <Chip label='MaterialUI' variant='outlined' sx={{backgroundColor: 'primary.main', color: 'primary.blue', borderColor: 'primary.blue'}}/>
                        <Chip label='Bootstrap' variant='outlined' sx={{backgroundColor: 'primary.main', color: 'primary.blue', borderColor: 'primary.blue'}}/>
                        <Chip label='HTML' variant='outlined' sx={{backgroundColor: 'primary.main', color: 'primary.blue', borderColor: 'primary.blue'}}/>
                        <Chip label='CSS' variant='outlined' sx={{backgroundColor: 'primary.main', color: 'primary.blue', borderColor: 'primary.blue'}}/>
                        <Chip label='Javascript' variant='outlined' sx={{backgroundColor: 'primary.main', color: 'primary.blue', borderColor: 'primary.blue'}}/>
                        <Chip label='Sass' variant='outlined' sx={{backgroundColor: 'primary.main', color: 'primary.blue', borderColor: 'primary.blue'}}/>
                        <Chip label='Vite.js' variant='outlined' sx={{backgroundColor: 'primary.main', color: 'primary.blue', borderColor: 'primary.blue'}}/>
                    </Grid>

                    <Grid item xs={12} m={2} textAlign='center'>
                        <img src='./assets/vline.png' className='line'></img>
                    </Grid>
                </Grid>

                {/* Backend */}
                <Grid container mt={2} className='animate__animated animate__fadeInRight'>
                    <Typography variant='h4'>Backend Development</Typography>
                    <Typography variant='h7' mt={2}>
                        Pellentesque aliquam dui vitae sodales ultrices. Mauris a pellentesque odio. Morbi metus arcu, tempus vel blandit efficitur, tempor sit amet justo. In iaculis egestas urna eu scelerisque. Etiam vehicula semper elit vitae tristique. Nulla fermentum leo bibendum orci tincidunt, id posuere tellus semper. Aliquam rhoncus vel felis aliquet pharetra.
                    </Typography>

                    <Grid container mt={2} gap={1}>
                        <Chip label='Node.js' variant='outlined' sx={{backgroundColor: 'primary.main', color: 'primary.blue', borderColor: 'primary.blue'}}/>
                        <Chip label='MongoDB' variant='outlined' sx={{backgroundColor: 'primary.main', color: 'primary.blue', borderColor: 'primary.blue'}}/>
                        <Chip label='Mongoose' variant='outlined' sx={{backgroundColor: 'primary.main', color: 'primary.blue', borderColor: 'primary.blue'}}/>
                        <Chip label='Express' variant='outlined' sx={{backgroundColor: 'primary.main', color: 'primary.blue', borderColor: 'primary.blue'}}/>
                        <Chip label='Firebase' variant='outlined' sx={{backgroundColor: 'primary.main', color: 'primary.blue', borderColor: 'primary.blue'}}/>
                        <Chip label='Firestore' variant='outlined' sx={{backgroundColor: 'primary.main', color: 'primary.blue', borderColor: 'primary.blue'}}/>
                        <Chip label='PHP' variant='outlined' sx={{backgroundColor: 'primary.main', color: 'primary.blue', borderColor: 'primary.blue'}}/>
                        <Chip label='SQL' variant='outlined' sx={{backgroundColor: 'primary.main', color: 'primary.blue', borderColor: 'primary.blue'}}/>
                        <Chip label='APIs' variant='outlined' sx={{backgroundColor: 'primary.main', color: 'primary.blue', borderColor: 'primary.blue'}}/>
                        <Chip label='Axios' variant='outlined' sx={{backgroundColor: 'primary.main', color: 'primary.blue', borderColor: 'primary.blue'}}/>
                    </Grid>

                    <Grid item xs={12} m={2} textAlign='center'>
                        <img src='./assets/vline.png' className='line'></img>
                    </Grid>
                </Grid>

                {/* iOS */}
                <Grid container mt={2} className='animate__animated animate__fadeInLeft'>
                    <Typography variant='h4'>iOS Development</Typography>
                    <Typography variant='h7' mt={2}>
                        Pellentesque aliquam dui vitae sodales ultrices. Mauris a pellentesque odio. Morbi metus arcu, tempus vel blandit efficitur, tempor sit amet justo. In iaculis egestas urna eu scelerisque. Etiam vehicula semper elit vitae tristique. Nulla fermentum leo bibendum orci tincidunt, id posuere tellus semper. Aliquam rhoncus vel felis aliquet pharetra.
                    </Typography>

                    <Grid container mt={2} gap={1}>
                        <Chip label='Swift' variant='outlined' sx={{backgroundColor: 'primary.main', color: 'primary.blue', borderColor: 'primary.blue'}}/>
                        <Chip label='Xcode' variant='outlined' sx={{backgroundColor: 'primary.main', color: 'primary.blue', borderColor: 'primary.blue'}}/>
                        <Chip label='Cocoapods' variant='outlined' sx={{backgroundColor: 'primary.main', color: 'primary.blue', borderColor: 'primary.blue'}}/>
                        <Chip label='SwiftUI' variant='outlined' sx={{backgroundColor: 'primary.main', color: 'primary.blue', borderColor: 'primary.blue'}}/>
                        <Chip label='Realm' variant='outlined' sx={{backgroundColor: 'primary.main', color: 'primary.blue', borderColor: 'primary.blue'}}/>
                        <Chip label='Apple StoreKit' variant='outlined' sx={{backgroundColor: 'primary.main', color: 'primary.blue', borderColor: 'primary.blue'}}/>
                        <Chip label='Core ML' variant='outlined' sx={{backgroundColor: 'primary.main', color: 'primary.blue', borderColor: 'primary.blue'}}/>
                        <Chip label='ARKit' variant='outlined' sx={{backgroundColor: 'primary.main', color: 'primary.blue', borderColor: 'primary.blue'}}/>                    
                    </Grid>

                    <Grid item xs={12} m={2} textAlign='center'>
                        <img src='./assets/vline.png' className='line'></img>
                    </Grid>
                </Grid>

                {/* Programming languages */}
                <Grid container mt={2} className='animate__animated animate__fadeInRight'>
                    <Typography variant='h4'>Programming languages</Typography>
                    <Typography variant='h7' mt={2}>
                        Pellentesque aliquam dui vitae sodales ultrices. Mauris a pellentesque odio. Morbi metus arcu, tempus vel blandit efficitur, tempor sit amet justo. In iaculis egestas urna eu scelerisque. Etiam vehicula semper elit vitae tristique. Nulla fermentum leo bibendum orci tincidunt, id posuere tellus semper. Aliquam rhoncus vel felis aliquet pharetra.
                    </Typography>

                    <Grid container mt={2} gap={1}>
                        <Chip label='Python' variant='outlined' sx={{backgroundColor: 'primary.main', color: 'primary.blue', borderColor: 'primary.blue'}}/>                  
                        <Chip label='Java' variant='outlined' sx={{backgroundColor: 'primary.main', color: 'primary.blue', borderColor: 'primary.blue'}}/>                  
                        <Chip label='C++' variant='outlined' sx={{backgroundColor: 'primary.main', color: 'primary.blue', borderColor: 'primary.blue'}}/>                  
                        <Chip label='R' variant='outlined' sx={{backgroundColor: 'primary.main', color: 'primary.blue', borderColor: 'primary.blue'}}/>                  
                        <Chip label='Kotlin' variant='outlined' sx={{backgroundColor: 'primary.main', color: 'primary.blue', borderColor: 'primary.blue'}}/>                  
                    </Grid>

                    <Grid item xs={12} m={2} textAlign='center'>
                        <img src='./assets/vline.png' className='line'></img>
                    </Grid>
                </Grid>

                {/* Tech */}
                <Grid container mt={2} className='animate__animated animate__fadeInLeft'>
                    <Typography variant='h4'>Technologies</Typography>
                    <Typography variant='h7' mt={2}>
                        Pellentesque aliquam dui vitae sodales ultrices. Mauris a pellentesque odio. Morbi metus arcu, tempus vel blandit efficitur, tempor sit amet justo. In iaculis egestas urna eu scelerisque. Etiam vehicula semper elit vitae tristique. Nulla fermentum leo bibendum orci tincidunt, id posuere tellus semper. Aliquam rhoncus vel felis aliquet pharetra.
                    </Typography>

                    <Grid container mt={2} gap={1}>
                        <Chip label='Git' variant='outlined' sx={{backgroundColor: 'primary.main', color: 'primary.blue', borderColor: 'primary.blue'}}/>                        
                        <Chip label='Github' variant='outlined' sx={{backgroundColor: 'primary.main', color: 'primary.blue', borderColor: 'primary.blue'}}/>                        
                        <Chip label='Jira' variant='outlined' sx={{backgroundColor: 'primary.main', color: 'primary.blue', borderColor: 'primary.blue'}}/>                        
                        <Chip label='Figma' variant='outlined' sx={{backgroundColor: 'primary.main', color: 'primary.blue', borderColor: 'primary.blue'}}/>                        
                        <Chip label='Terminal' variant='outlined' sx={{backgroundColor: 'primary.main', color: 'primary.blue', borderColor: 'primary.blue'}}/>                                          
                    </Grid>
                </Grid>
            </AppLayout>
        </>
    )
}
