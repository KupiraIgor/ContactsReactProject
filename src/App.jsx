import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="font-poppins selection:bg-black selection:text-white">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact/:id" element={<ContactPage />} />
      </Routes>
      <ToastContainer
        autoClose={4000}
        position={'top-right'}
        hideProgressBar={true}
        theme="dark"
      />
    </div>
  );
}

export default App;
