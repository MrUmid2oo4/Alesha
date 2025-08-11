import React, { createContext, useState, useCallback } from 'react';
import Preloader from '../components/Preloader';

export const LoadingContext = createContext({
  isLoading: false,
  startLoading: () => {},
  stopLoading: () => {},
});

export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingConfig, setLoadingConfig] = useState({
    size: 'medium',
    color: '#333'
  });

  const startLoading = useCallback((config = {}) => {
    setLoadingConfig(prev => ({ ...prev, ...config }));
    setIsLoading(true);
  }, []);

  const stopLoading = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <LoadingContext.Provider value={{ isLoading, startLoading, stopLoading }}>
      {isLoading && <Preloader {...loadingConfig} />}
      {children}
    </LoadingContext.Provider>
  );
};