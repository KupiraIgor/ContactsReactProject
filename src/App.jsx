import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <div className="font-poppins">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact/:id" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
