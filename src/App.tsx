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

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}>
        <Route path='main' element={<MainPage />} />
      </Route>
      <Route path='preview' element={<Preview />}>
        <Route path='video-panel' element={<VideoPanel />} />
      </Route>
    </Routes>
  );
}

export default App;
