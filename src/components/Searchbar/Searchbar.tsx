import { ChangeEvent, KeyboardEvent, useState } from 'react';
import axios from 'axios';
import { Button, Paper, TextField, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useUserInfo } from '../../store/UserInfoContext';
import colors from '../../styles/colors';

const BASE_URL = 'https://api.github.com/users/';

const Searchbar = () => {
  const { setUserInfo, toggleInitialState } = useUserInfo();
  const [searchValue, setSearchValue] = useState<string>('');

  const handleSearchPressingEnter = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') handleSearchUser();
  };


  const handleSearchValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSearchUser = () => {
    axios.get(`${BASE_URL}${searchValue}`)
      .then(response => {
        if (response.status === 200) {
          setUserInfo(response.data);
          toggleInitialState();
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  return(
    <Paper
      elevation={10}
      sx={{
        alignItems: 'center',
        backgroundColor: colors.backgroundLightBlue,
        border: 0,
        borderRadius: '8px',
        display: 'flex',
        height: '3rem',
        marginTop: '1rem',
        justifyContent: 'space-around',
        padding: '0.25rem 0.5rem',
      }}
    >
      {/* ==================== S E A R C H   I C O N ==================== */}
      <SearchIcon htmlColor={colors.blue} />
      
      {/* ==================== S E A R C H   B A R ==================== */}
      <TextField
        fullWidth
        placeholder='Search Github username...'
        sx={{
          marginX: '0.5rem',
          '& input': {
            color: colors.lightGray,
            padding: '0.5rem',
          },
          '& fieldset': {
            border: 0,
          },
        }}
        onKeyDown={handleSearchPressingEnter}
        value={searchValue}
        onChange={handleSearchValueChange}
        />

        {/* ==================== S E A R C H   B U T T O N ==================== */}
        <Button
          disableElevation
          sx={{
            bgcolor: colors.blue,
            color: colors.white,
            padding: 0,
          }}
          variant='contained'
          onClick={handleSearchUser}
        >
          <Typography
            variant='searchBtnLabel'
          >
            Search
          </Typography>
        </Button>
    </Paper>
  );
};

export default Searchbar;
