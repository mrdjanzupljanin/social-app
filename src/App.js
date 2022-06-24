import { BrowserRouter as Router } from 'react-router-dom';
import AnimatedRoutes from './AnimatedRoutes';
import './App.css';
import Navbar from './components/Layout/Navbar';

function App() {
  return (
   <Router>
    <Navbar />
    <AnimatedRoutes />
   </Router>
  );
}

export default App;
