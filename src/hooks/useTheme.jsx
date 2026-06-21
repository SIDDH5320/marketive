import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

// Helper to calculate appropriate contrasting colors and RGB for glow
const getThemeVariables = (hexColor) => {
  let r = 0, g = 0, b = 0;
  if (hexColor.length === 4) {
    r = parseInt(hexColor[1] + hexColor[1], 16);
    g = parseInt(hexColor[2] + hexColor[2], 16);
    b = parseInt(hexColor[3] + hexColor[3], 16);
  } else if (hexColor.length === 7) {
    r = parseInt(hexColor.slice(1, 3), 16);
    g = parseInt(hexColor.slice(3, 5), 16);
    b = parseInt(hexColor.slice(5, 7), 16);
  }
  
  const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;

  // Darken a too-bright accent (e.g. lime #D4FF00) so it stays readable as TEXT
  // on light backgrounds while keeping its hue — instead of falling back to black.
  const clampHex = (v) => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, '0');
  const darken = (factor) => `#${clampHex(r * factor)}${clampHex(g * factor)}${clampHex(b * factor)}`;

  return {
    primary: hexColor,
    glow: `rgba(${r}, ${g}, ${b}, 0.5)`,
    foreground: yiq >= 128 ? '#000000' : '#ffffff',
    onDark: yiq <= 80 ? '#ffffff' : hexColor,
    onLight: yiq >= 200 ? darken(0.45) : hexColor
  };
};

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('marketive-theme') || 'dark';
    }
    return 'dark';
  });

  const [accentColor, setAccentColor] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme-color') || '#D4FF00';
    }
    return '#D4FF00';
  });

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('marketive-theme', theme);
  }, [theme]);

  useEffect(() => {
    const vars = getThemeVariables(accentColor);
    
    document.documentElement.style.setProperty('--primary', vars.primary);
    document.documentElement.style.setProperty('--color-primary-300', vars.primary);
    document.documentElement.style.setProperty('--color-primary-400', vars.primary);
    document.documentElement.style.setProperty('--color-primary-500', vars.primary);
    document.documentElement.style.setProperty('--color-primary-600', vars.primary);
    document.documentElement.style.setProperty('--primary-glow', vars.glow);
    document.documentElement.style.setProperty('--primary-foreground', vars.foreground);
    document.documentElement.style.setProperty('--primary-on-dark', vars.onDark);
    document.documentElement.style.setProperty('--primary-on-light', vars.onLight);
    
    localStorage.setItem('theme-color', accentColor);
  }, [accentColor]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, accentColor, setAccentColor }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
