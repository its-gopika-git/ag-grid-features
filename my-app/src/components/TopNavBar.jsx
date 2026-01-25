import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

export default function TopNavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: '#f5b800' }}>
        <Toolbar variant="dense">
          <Typography sx={{
            textAlign: 'center',
            width: '100%',
            fontSize:'20px',
            fontFamily: 'Roboto Serif, serif',
            fontWeight: '600',
            color: '#ffffff',
            letterSpacing: '1px',
          }}>
            Mango Metrics
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
