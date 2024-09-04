import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import MainApp from './Routes/MainApp';
import './App.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainApp />} />
      </Routes>
    </Router>
  );
}
