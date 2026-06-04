import ListIcon from '@mui/icons-material/ListOutlined';
import PersonIcon from '@mui/icons-material/PersonOutlined';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
function Header() {
    return (
        <>
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
        </>
    );
}

export default Header;