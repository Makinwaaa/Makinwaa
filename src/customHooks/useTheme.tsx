import { useState, useEffect } from 'react';

const useTheme = (): [boolean, () => void] => {
  const [isLightMode, setIsLightMode] = useState<boolean>(() => {
    const savedMode = localStorage.getItem('isLightMode');
    if (!savedMode) return false
    return savedMode === 'true';
  });

  const toggleLightMode = () => setIsLightMode(prevMode => !prevMode);

  useEffect(() => {
    if (isLightMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
    localStorage.setItem('isLightMode', isLightMode.toString());
  }, [isLightMode]);

  return [isLightMode, toggleLightMode];
};

export default useTheme;
