import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRouter from './components/AppRouter';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>        
      <AppRouter /> 
      <Footer />            
    </BrowserRouter> 
  )
}

export default App;
