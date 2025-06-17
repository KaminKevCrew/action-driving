"use client";

import { useState, useEffect } from 'react';

type Theme = 'default' | 'light' | 'high-contrast' | 'solarized-dark';

const themes: { id: Theme; name: string }[] = [
  { id: 'default', name: 'Dark Theme' },
  { id: 'light', name: 'Light Theme' },
  { id: 'high-contrast', name: 'High Contrast' },
  { id: 'solarized-dark', name: 'Solarized Dark' },
];

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<Theme>('default');
  const [isOpen, setIsOpen] = useState(false);

  // Initialize theme from localStorage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    if (savedTheme && themes.some(t => t.id === savedTheme)) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    }
  }, []);

  const applyTheme = (newTheme: Theme) => {
    // Remove all theme classes
    document.documentElement.classList.remove('theme-light', 'theme-high-contrast', 'theme-solarized-dark');

    // Add the selected theme class (except for default which is on :root)
    if (newTheme !== 'default') {
      document.documentElement.classList.add(`theme-${newTheme}`);
    }

    // Save to localStorage
    localStorage.setItem('theme', newTheme);
  };

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
    applyTheme(newTheme);
    setIsOpen(false);

    // Dispatch a custom event for theme changes within the same window
    window.dispatchEvent(new Event('themeChange'));
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center px-3 py-2 rounded text-text hover:bg-ui-hover transition-colors duration-default"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <span className="mr-1">Theme</span>
        <span className="text-xs">▼</span>
      </button>

      {isOpen && (
        <div 
          className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-background-secondary ring-1 ring-black ring-opacity-5 z-10"
          role="menu"
          aria-orientation="vertical"
        >
          <div className="py-1" role="none">
            {themes.map((themeOption) => (
              <button
                key={themeOption.id}
                onClick={() => handleThemeChange(themeOption.id)}
                className={`block w-full text-left px-4 py-2 text-sm ${
                  theme === themeOption.id 
                    ? 'bg-accent' 
                    : 'text-text hover:bg-ui-hover'
                } transition-colors duration-default`}
                role="menuitem"
              >
                {themeOption.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
