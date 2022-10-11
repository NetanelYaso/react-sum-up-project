import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Footer, Header, Router } from './components';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Router />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
