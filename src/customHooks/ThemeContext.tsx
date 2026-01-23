import React, { createContext, useContext, ReactNode } from 'react';
import useTheme from './useTheme';

interface ThemeContextProps {
  isLightMode: boolean;
  toggleLightMode: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const CustomThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // const [isLightMode, toggleLightMode] = useTheme();

  // FORCED LIGHT THEME 
  const isLightMode = true;
  const toggleLightMode = () => {
    // console.log("Theme toggle is currently disabled");
  };

  return (
    <ThemeContext.Provider value={{ isLightMode, toggleLightMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useCustomThemeContext = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useCustomThemeContext must be used within a CustomThemeProvider');
  }
  return context;
};