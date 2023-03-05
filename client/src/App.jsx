import { BrowserRouter, Navigation, Routes, Route } from 'react-router-dom';
import HomePage from './scenes/homePage';
import LoginPage from './scenes/loginPage';
import ProfilePage from './scenes/loginPage';

function App() {

  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/profile/:userId' element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App