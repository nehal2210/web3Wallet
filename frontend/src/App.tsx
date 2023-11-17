import { useSelector } from 'react-redux';
import './App.css';
import VerifyPassword from './components/VerifyPassword';
import AppRouter from './router';
import { BrowserRouter } from 'react-router-dom';
import { RootState } from './redux/store';

function App() {
  const passwordVerify = useSelector((state: RootState) => state.user.passwordVerify);

  return (

    <BrowserRouter>
      {/* This animated-circle is used for background animations and its styling in app.css file */}
      <div className='animated-circle'></div>
      {
        passwordVerify ?
          <VerifyPassword />
          :
          null
      }
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
