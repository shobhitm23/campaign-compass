import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext.jsx';
import AppShell from './components/layout/AppShell.jsx';
import HomePage from './components/home/HomePage.jsx';
import SubsectorPage from './components/subsector/SubsectorPage.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <AppShell>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/subsector/:subsectorId" element={<SubsectorPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AppShell>
      </AppProvider>
    </BrowserRouter>
  );
}
