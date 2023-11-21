import { ThemeProvider } from '@mui/material';
import { useDarkTheme } from './store/DarkThemeContext';
import { UserInfoProvider } from './store/UserInfoContext';
import Searchbar from './components/Searchbar/Searchbar';
import Toolbar from './components/Toolbar/Toolbar';
import UserCard from './components/UserCard/UserCard';
import CustomTheme from './styles/CustomTheme';
import './App.css';
import colors from './styles/colors';

function App() {
  const { darkTheme } = useDarkTheme();

  return (
    <ThemeProvider theme={CustomTheme}>
      <div
        className='main-container'
        style={{ backgroundColor: darkTheme ? colors.backgroundDark : colors.white }}
      >
        <main className='main'>
          <Toolbar />
          
          <UserInfoProvider>
            <Searchbar />

            <UserCard />
          </UserInfoProvider>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
