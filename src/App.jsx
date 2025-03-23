import './App.css';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar/NavigationBar';
import LandingPage from './pages/Landing';
import LoginScreen from './pages/LoginScreen';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
