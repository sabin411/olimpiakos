import react from 'react';

// components
import Button from '@/components/Button';

// packages
import { Route, Routes } from 'react-router-dom';

// screens
import Feed from '@/screens/feed';
import Watch from '@/screens/watch';
import Layout from '@/screens/layout';
import Preview from '@/screens/previews';
import Gallery from '@/screens/gallery';
import MainPage from '@/screens/mainPage';
import Category from '@/screens/category';
import Sports from '@/screens/category/Sports';
import VideoPanel from '@/screens/previews/VideoPanelPreview';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='' element={<MainPage />} />
        <Route path='watch' element={<Watch />} />
        <Route path='video-panel' element={<VideoPanel />} />
        <Route path='gallery' element={<Gallery />} />
        <Route path='feed/:list' element={<Feed />} />
      </Route>

      <Route path='category' element={<Category />}>
        <Route path='sports/:game' element={<Sports />} />
      </Route>
    </Routes>
  );
}

export default App;
