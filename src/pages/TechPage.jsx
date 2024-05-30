import { Grid, Typography, Chip } from '@mui/material'
import { AppLayout } from '../layout/AppLayout'

export const TechPage = () => {
    return (
        <>
            <AppLayout>
                <Typography variant='h3' textAlign='center' className='animate__animated animate__fadeInRight'>💻 Tech stack</Typography>
                
                {/* Machine Learning */}
                <Grid container mt={2} className='animate__animated animate__fadeInLeft'>
                    <Typography variant='h4'>Machine Learning</Typography>
                    <Typography variant='h7' mt={2}>
                        Equipped with a robust Machine Learning tech stack, I harness the power of Python and R for efficient data manipulation, model development, and deployment. From statistical analysis to deep learning, I craft solutions that turn data into actionable insights. Here are some technologies and topics I leverage:
                    </Typography>

                    <Grid container mt={2} gap={1}>
                        <Chip label='Python' variant='outlined' sx={{backgroundColor: 'primary.main', color: 'primary.blue', borderColor: 'primary.blue'}}/>
                        <Chip label='R' variant='outlined' sx={{backgroundColor: 'primary.main', color: 'primary.blue', borderColor: 'primary.blue'}}/>
                        <Chip label='Tensoflow' variant='outlined' sx={{backgroundColor: 'primary.main', color: 'primary.blue', borderColor: 'primary.blue'}}/>
                        <Chip label='Scikit-learn' variant='outlined' sx={{backgroundColor: 'primary.main', color: 'primary.blue', borderColor: 'primary.blue'}}/>
                        <Chip label='NumPy' variant='outlined' sx={{backgroundColor: 'primary.main', color: 'primary.blue', borderColor: 'primary.blue'}}/>
                        <Chip label='Pandas' variant='outlined' sx={{backgroundColor: 'primary.main', color: 'primary.blue', borderColor: 'primary.blue'}}/>
                        <Chip label='Matplotlib' variant='outlined' sx={{backgroundColor: 'primary.main', color: 'primary.blue', borderColor: 'primary.blue'}}/>
                        <Chip label='Regression' variant='outlined' sx={{backgroundColor: 'primary.main', color: 'primary.blue', borderColor: 'primary.blue'}}/>
                        <Chip label='Classification' variant='outlined' sx={{backgroundColor: 'primary.main', color: 'primary.blue', borderColor: 'primary.blue'}}/>
                        <Chip label='Clustering' variant='outlined' sx={{backgroundColor: 'primary.main', color: 'primary.blue', borderColor: 'primary.blue'}}/>
                        <Chip label='Association Rule Learning' variant='outlined' sx={{backgroundColor: 'primary.main', color: 'primary.blue', borderColor: 'primary.blue'}}/>
                        <Chip label='Natural Language Processing' variant='outlined' sx={{backgroundColor: 'primary.main', color: 'primary.blue', borderColor: 'primary.blue'}}/>
                        <Chip label='Artificial Neural Networks' variant='outlined' sx={{backgroundColor: 'primary.main', color: 'primary.blue', borderColor: 'primary.blue'}}/>
                        <Chip label='Convolutional Neural Networks' variant='outlined' sx={{backgroundColor: 'primary.main', color: 'primary.blue', borderColor: 'primary.blue'}}/>
                    </Grid>

                    <Grid item xs={12} m={2} textAlign='center'>
                        <img src='./assets/vline.png' className='line'></img>
                    </Grid>
                </Grid>

                {/* Frontend */}
                <Grid container mt={2} className='animate__animated animate__fadeInRight'>
                    <Typography variant='h4'>Frontend Development</Typography>
                    <Typography variant='h7' mt={2}>
                        As a dedicated web developer, I am passionate about crafting engaging and user-friendly digital experiences. My expertise in frontend technologies allows me to bring your web projects to life with creativity and precision. Here are some of the key technologies I leverage to build beautiful and responsive websites:
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
                <Grid container mt={2} className='animate__animated animate__fadeInLeft'>
                    <Typography variant='h4'>Backend Development</Typography>
                    <Typography variant='h7' mt={2}>
                        Behind every great website, there's a robust backend infrastructure that ensures smooth functionality and data management. As a seasoned web developer, I'm well-versed in a variety of backend technologies to bring your projects to life. Here are the key backend technologies I leverage:
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

                {/* Android */}
                <Grid container mt={2} className='animate__animated animate__fadeInRight'>
                    <Typography variant='h4'>Android Development</Typography>
                    <Typography variant='h7' mt={2}>
                        In my Android development projects, I use Kotlin and Jetpack Compose to create robust, user-friendly apps. My work includes integrating third-party SDKs, using Retrofit for network communication, and developing custom APIs. I focus on delivering high-quality apps with intuitive user experiences.
                    </Typography>

                    <Grid container mt={2} gap={1}>
                        <Chip label='Kotlin' variant='outlined' sx={{backgroundColor: 'primary.main', color: 'primary.blue', borderColor: 'primary.blue'}}/>
                        <Chip label='Jetpack Compose' variant='outlined' sx={{backgroundColor: 'primary.main', color: 'primary.blue', borderColor: 'primary.blue'}}/>
                        <Chip label='Retrofit' variant='outlined' sx={{backgroundColor: 'primary.main', color: 'primary.blue', borderColor: 'primary.blue'}}/>
                        <Chip label='Coil' variant='outlined' sx={{backgroundColor: 'primary.main', color: 'primary.blue', borderColor: 'primary.blue'}}/>
                        <Chip label='Data Store' variant='outlined' sx={{backgroundColor: 'primary.main', color: 'primary.blue', borderColor: 'primary.blue'}}/>
                        <Chip label='NavHost' variant='outlined' sx={{backgroundColor: 'primary.main', color: 'primary.blue', borderColor: 'primary.blue'}}/>
                        <Chip label='Coroutines' variant='outlined' sx={{backgroundColor: 'primary.main', color: 'primary.blue', borderColor: 'primary.blue'}}/>
                    </Grid>

                    <Grid item xs={12} m={2} textAlign='center'>
                        <img src='./assets/vline.png' className='line'></img>
                    </Grid>
                </Grid>

                {/* iOS */}
                <Grid container mt={2} className='animate__animated animate__fadeInLeft'>
                    <Typography variant='h4'>iOS Development</Typography>
                    <Typography variant='h7' mt={2}>
                        Creating captivating and functional mobile experiences for iOS devices is a passion of mine. As an iOS developer, I specialize in building native applications that combine seamless performance with intuitive user interfaces. Here's what you can expect from my iOS development expertise:
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

                {/* Tech */}
                <Grid container mt={2} className='animate__animated animate__fadeInRight'>
                    <Typography variant='h4'>Technologies</Typography>
                    <Typography variant='h7' mt={2}>
                        In the world of development, having the right tools at your disposal is essential to create exceptional digital experiences. I'm committed to delivering high-quality work, and I rely on a range of software tools and platforms to achieve that goal. Here's a glimpse into the software I use in my development workflow:
                    </Typography>

                    <Grid container mt={2} gap={1}>
                        <Chip label='Visual Studio Code' variant='outlined' sx={{backgroundColor: 'primary.main', color: 'primary.blue', borderColor: 'primary.blue'}}/>                        
                        <Chip label='Git' variant='outlined' sx={{backgroundColor: 'primary.main', color: 'primary.blue', borderColor: 'primary.blue'}}/>                        
                        <Chip label='Github' variant='outlined' sx={{backgroundColor: 'primary.main', color: 'primary.blue', borderColor: 'primary.blue'}}/>                        
                        <Chip label='Jira' variant='outlined' sx={{backgroundColor: 'primary.main', color: 'primary.blue', borderColor: 'primary.blue'}}/>                        
                        <Chip label='Figma' variant='outlined' sx={{backgroundColor: 'primary.main', color: 'primary.blue', borderColor: 'primary.blue'}}/>                        
                        <Chip label='Terminal' variant='outlined' sx={{backgroundColor: 'primary.main', color: 'primary.blue', borderColor: 'primary.blue'}}/>                                          
                        <Chip label='WordPress' variant='outlined' sx={{backgroundColor: 'primary.main', color: 'primary.blue', borderColor: 'primary.blue'}}/>                                          
                        <Chip label='WooCommerce' variant='outlined' sx={{backgroundColor: 'primary.main', color: 'primary.blue', borderColor: 'primary.blue'}}/>                                          
                    </Grid>
                </Grid>
            </AppLayout>
        </>
    )
}
