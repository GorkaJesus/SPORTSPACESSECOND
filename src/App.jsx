import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import FootballPage from './pages/football-page/FootballPage';
import BasketballPage from './pages/basketball-page/BasketballPage';
import PrivacyPolicyPage from './pages/privacity-terms/Privacity';
import SalesTermsPage from './pages/selling-conditions/Conditions';
import NewsXML from '../../myproject/src/components/news/News';  
import "./services/i18n";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/football-page" element={<FootballPage />} />
        <Route path="/basketball-page" element={<BasketballPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/sales-terms" element={<SalesTermsPage />} />
        <Route path="/news.xml" element={<NewsXML />} />
        {/*  */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
