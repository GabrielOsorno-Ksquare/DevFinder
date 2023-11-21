import { createContext, useState, useContext } from 'react';

interface DarkThemeContextProps {
  darkTheme: boolean;
  toggleDarkTheme: () => void;
};

const DarkThemeContext = createContext<DarkThemeContextProps>({
  darkTheme: true,
  toggleDarkTheme: () => {},
});

export const useDarkTheme = () => useContext(DarkThemeContext);

export const DarkThemeProvider = ({ children }: { children: any }) => {
  const [darkTheme, setDarkTheme] = useState<boolean>(true);

  const toggleDarkTheme = () => {
    setDarkTheme((prev) => !prev);
  };

  return(
    <DarkThemeContext.Provider value={{ darkTheme, toggleDarkTheme }}>
      {children}
    </DarkThemeContext.Provider>
  );
};