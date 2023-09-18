import { AppBar, Grid, IconButton, Toolbar } from '@mui/material'
import { MenuOutlined } from '@mui/icons-material'

export const Navbar = ({drawerWidth, toggle, setToggle}) => {
    const onToggle = () => setToggle(!toggle);

    return (
        <>
            <AppBar 
                position='fixed' 
                elevation={0}
                sx={{ 
                    width: { md: `calc(100% - ${ drawerWidth }px)` },
                    ml: { md: `${ drawerWidth }px` }
                }}
            >
                <Toolbar>
                    <IconButton 
                        color='inherit' 
                        edge='start' 
                        onClick={onToggle}
                        sx={{mr: 2, display: {md: 'none'}}} 
                    >
                        <MenuOutlined />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </>
    )
}