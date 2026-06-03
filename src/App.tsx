import ListIcon from '@mui/icons-material/ListOutlined';
import PersonIcon from '@mui/icons-material/PersonOutlined';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import theme from './theme';
import { ThemeProvider } from '@mui/material';
import './styles/landingPage.css';

function App() {
  return (
    <ThemeProvider theme={theme} defaultMode="system">
      <CssBaseline />
      {/* Nav section */}
      <nav className='navbar'>
        <h2>ShopSmart</h2>
        <div className="navbar__actions">
          <TextField
            id="search-input"
            placeholder="Search"
            variant="outlined"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              },
            }}
            sx={{ backgroundColor: '#2a2a2e'}}
          />
          {/* TODO: Add FAB or button when integrating click handler for below actions */}
          <ShoppingCartIcon sx={{ marginLeft: '8px' }} />
          <PersonIcon sx={{ marginLeft: '8px' }}  />
          <ListIcon sx={{ marginLeft: '8px' }}  />
        </div>
      </nav>

      {/* Hero section */}
      <div className="hero-container">
        <img src="/hero.jpg" className='hero-container__img'/>
        <div className='hero-container__content'>
          <h2 className='hero-container__heading'>Elevate your everyday</h2>
          <p>Discover a curated collection of premium products designed for the modern lifestyle. Quality meets elegance in every detail.</p>
          <Button variant="contained">Shop Now</Button>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App;
