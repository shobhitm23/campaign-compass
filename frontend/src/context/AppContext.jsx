import { createContext, useContext, useEffect, useState } from 'react';
import client from '../api/client.js';

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [sectors, setSectors] = useState([]);
  const [sectorsLoading, setSectorsLoading] = useState(true);
  const [sectorsError, setSectorsError] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    client.get('/sectors')
      .then(res => setSectors(res.data))
      .catch(err => setSectorsError(err.message))
      .finally(() => setSectorsLoading(false));
  }, []);

  return (
    <AppContext.Provider value={{ sectors, sectorsLoading, sectorsError, sidebarOpen, setSidebarOpen }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}
