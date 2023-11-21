import { Box, Button, Typography } from '@mui/material';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { useDarkTheme } from '../../store/DarkThemeContext';
import colors from '../../styles/colors';

const Toolbar = () => {
  const { darkTheme, toggleDarkTheme } = useDarkTheme();

  const handleThemeBtnClick = () => {
    toggleDarkTheme();
  };

  return(
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        margin: '1.5rem 0',
      }}
    >
      {/* ==================== T I T L E ==================== */}
      <Typography
        sx={{
          color: darkTheme ? colors.white : colors.black,
        }}
        variant='headline'
      >
        devfinder
      </Typography>

      {/* ==================== T H E M E   B U T T O N ==================== */}
      <Button
        endIcon={darkTheme ? <WbSunnyIcon /> : <ModeNightIcon />}
        sx={{
          color: darkTheme ? colors.white : colors.black,
        }}
        variant='text'
        onClick={handleThemeBtnClick}
      >
        <Typography
          variant='themeBtnLabel'
        >
          {darkTheme ? 'Light' : 'Dark'}
        </Typography>
      </Button>
    </Box>
  );
};

export default Toolbar;
