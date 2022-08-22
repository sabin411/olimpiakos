import react from 'react';

// components
import Button from '@/components/Button';

// packages
import { Route, Routes } from 'react-router-dom';

// screens
import Home from '@/screens/Home';
import Preview from '@/screens/previews';
import MainPage from '@/screens/MainPage';
import VideoPanel from '@/screens/previews/VideoPanelPreview';
import Category from '@/screens/Category';
import Sports from '@/screens/Category/Sports';
import Watch from '@/screens/Watch';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}>
        <Route path='' element={<MainPage />} />
        <Route path='watch' element={<Watch />} />
        <Route path='video-panel' element={<VideoPanel />} />
      </Route>

      <Route path='category' element={<Category />}>
        <Route path='sports/:game' element={<Sports />} />
      </Route>
    </Routes>
  );
}

export default App;
