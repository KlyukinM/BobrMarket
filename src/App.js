import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRouter from './components/AppRouter';
import Footer from './components/Footer';
import { Header } from './components/Header';


function App() {
  return (
    <BrowserRouter>  
      <Header />
      <AppRouter /> 
      <Footer />            
    </BrowserRouter> 
  )
}

export default App;
