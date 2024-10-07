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
                    '& .MuiDrawer-paper': {borderWidth: 0, boxSizing: 'border-box', width: drawerWidth}
                }}
                PaperProps={{sx: {backgroundColor: 'primary.main'}}}
            >
                <Box sx={{textAlign: 'left', p: 2}} color='primary.font'>

                    <Grid item textAlign='center' mb={2}>
                        <IconButton sx={{display: {md: 'none'}, color: 'primary.font'}} onClick={onToggle}>
                            <Close />
                        </IconButton>
                    </Grid>
                    
                    <Grid p={1}>
                        <Link 
                            component={RouterLink} 
                            color='inherit' 
                            to='/' 
                            style={{textDecoration: 'none'}}
                            onClick={onToggleLink}
                        > 
                            <Typography variant='h6' m={4} sx={{"&:hover": {color: "primary.highlight"}}}>🧑🏽‍💻 About me</Typography>
                        </Link>

                        <Link 
                            component={RouterLink} 
                            color='inherit' 
                            to='/education' 
                            style={{textDecoration: 'none'}}
                            onClick={onToggleLink}
                        > 
                            <Typography variant='h6' m={4} sx={{"&:hover": {color: "primary.highlight"}}}>📚 Education</Typography>
                        </Link>

                        <Link 
                            component={RouterLink} 
                            color='inherit' 
                            to='/tech' 
                            style={{textDecoration: 'none'}}
                            onClick={onToggleLink}
                        > 
                            <Typography variant='h6' m={4} sx={{"&:hover": {color: "primary.highlight"}}}>💻 Tech stack</Typography>
                        </Link>

                        <Link 
                            component={RouterLink} 
                            color='inherit' 
                            to='/tamfy' 
                            style={{textDecoration: 'none'}}
                            onClick={onToggleLink}
                        > 
                            <Typography variant='h6' m={4} sx={{"&:hover": {color: "primary.highlight"}}}>🌴 Tamfy</Typography>
                        </Link>

                        <Link 
                            component={RouterLink} 
                            color='inherit' 
                            to='/cloud' 
                            style={{textDecoration: 'none'}}
                            onClick={onToggleLink}
                        > 
                            <Typography variant='h6' m={4} sx={{"&:hover": {color: "primary.highlight"}}}>☁️ Cloud apps</Typography>
                        </Link>

                        <Link 
                            component={RouterLink} 
                            color='inherit' 
                            to='/web' 
                            style={{textDecoration: 'none'}}
                            onClick={onToggleLink}
                        > 
                            <Typography variant='h6' m={4} sx={{"&:hover": {color: "primary.highlight"}}}>💼 Web</Typography>
                        </Link>

                        <Link 
                            component={RouterLink} 
                            color='inherit' 
                            to='/android' 
                            style={{textDecoration: 'none'}}
                            onClick={onToggleLink}
                        > 
                            <Typography variant='h6' m={4} sx={{"&:hover": {color: "primary.highlight"}}}>📱 Android</Typography>
                        </Link>

                        <Link 
                            component={RouterLink} 
                            color='inherit' 
                            to='/ios' 
                            style={{textDecoration: 'none'}}
                            onClick={onToggleLink}
                        > 
                            <Typography variant='h6' m={4} sx={{"&:hover": {color: "primary.highlight"}}}>📱 iOS</Typography>
                        </Link>

                        <Link 
                            component={RouterLink} 
                            color='inherit' 
                            to='/lectures' 
                            style={{textDecoration: 'none'}}
                            onClick={onToggleLink}
                        > 
                            <Typography variant='h6' m={4} sx={{"&:hover": {color: "primary.highlight"}}}>👨🏽‍🏫 Lectures</Typography>
                        </Link>

                        <Link 
                            component={RouterLink} 
                            color='inherit' 
                            to='/awards' 
                            style={{textDecoration: 'none'}}
                            onClick={onToggleLink}
                        > 
                            <Typography variant='h6' m={4} sx={{"&:hover": {color: "primary.highlight"}}}>🏆 Awards</Typography>
                        </Link>

                    </Grid>
                </Box>
            </Drawer>
        </Box>
    )
}