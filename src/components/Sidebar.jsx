import { useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Drawer, Typography, Link, Grid, IconButton } from '@mui/material'
import { Close } from '@mui/icons-material';
import { useWindowSize } from "../hooks";

export const Sidebar = ({drawerWidth, toggle, setToggle}) => {
    
    const onToggle = () => setToggle(!toggle);
    const [width] = useWindowSize();

    useEffect(() => {
      if (width >= 900) setToggle(true);
      if (width < 900) setToggle(false);         //Hide and unhide sidebar only in small screens
    }, [width])

    const onToggleLink = () => {
        if (width < 900) setToggle(!toggle);     //Hide sidebar when click on link only in small screens
    }

    return (
        <Box 
            component="nav"
            sx={{width: {md: drawerWidth}, flexShrink: {md: 0}}}
        >
            <Drawer
                open={toggle}
                variant="persistent"
                sx={{ 
                    display: {xs: 'block'},
                    '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth}
                }}
            >
                <Box sx={{textAlign: 'left', p: 2}}>
                    <Grid item textAlign='center'>
                        <Typography variant='h4'>All about me</Typography>
                    </Grid>

                    <Grid item textAlign='center' mb={2}>
                        <IconButton sx={{display: {md: 'none'}}} onClick={onToggle}>
                            <Close />
                        </IconButton>
                    </Grid>
                    
                    <Grid bgcolor='primary.bg' borderRadius={5} p={1}>
                        <Link 
                            component={RouterLink} 
                            color='inherit' 
                            to='/about-me' 
                            style={{textDecoration: 'none'}}
                            onClick={onToggleLink}
                        > 
                            <Typography variant='h6' m={4}>🧑🏽‍💻 About me</Typography>
                        </Link>

                        <Link 
                            component={RouterLink} 
                            color='inherit' 
                            to='/' 
                            style={{textDecoration: 'none'}}
                            onClick={onToggleLink}
                        > 
                            <Typography variant='h6' m={4}>📚 Education</Typography>
                        </Link>

                        <Link 
                            component={RouterLink} 
                            color='inherit' 
                            to='/' 
                            style={{textDecoration: 'none'}}
                            onClick={onToggleLink}
                        > 
                            <Typography variant='h6' m={4}>💻 Tech stack</Typography>
                        </Link>

                        <Link 
                            component={RouterLink} 
                            color='inherit' 
                            to='/' 
                            style={{textDecoration: 'none'}}
                            onClick={onToggleLink}
                        > 
                            <Typography variant='h6' m={4}>🌴 Tamfy</Typography>
                        </Link>

                        <Link 
                            component={RouterLink} 
                            color='inherit' 
                            to='/' 
                            style={{textDecoration: 'none'}}
                            onClick={onToggleLink}
                        > 
                            <Typography variant='h6' m={4}>☁️ Cloud apps</Typography>
                        </Link>

                        <Link 
                            component={RouterLink} 
                            color='inherit' 
                            to='/' 
                            style={{textDecoration: 'none'}}
                            onClick={onToggleLink}
                        > 
                            <Typography variant='h6' m={4}>💼 Experience</Typography>
                        </Link>

                        <Link 
                            component={RouterLink} 
                            color='inherit' 
                            to='/' 
                            style={{textDecoration: 'none'}}
                            onClick={onToggleLink}
                        > 
                            <Typography variant='h6' m={4}>👨🏽‍🏫 Workshops</Typography>
                        </Link>

                        <Link 
                            component={RouterLink} 
                            color='inherit' 
                            to='/' 
                            style={{textDecoration: 'none'}}
                            onClick={onToggleLink}
                        > 
                            <Typography variant='h6' m={4}>🏆 Awards</Typography>
                        </Link>

                    </Grid>
                </Box>
            </Drawer>
        </Box>
    )
}