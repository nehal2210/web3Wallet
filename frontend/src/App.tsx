import './App.css';
import AppRouter from './router';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (

    <BrowserRouter>
    {/* This animated-circle is used for background animations and its styling in app.css file */}
    <div className='animated-circle'></div>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
