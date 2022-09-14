import react from 'react';

// components
import Button from '@/components/Button';

// packages
import { Route, Routes } from 'react-router-dom';

// screens
import Feed from '@/screens/feed';
import News from '@/screens/news';
import Watch from '@/screens/watch';
import Login from '@/screens/login';
import Layout from '@/screens/layout';
import Gallery from '@/screens/gallery';
import NewsFeed from '@/screens/newsFeed';
import MainPage from '@/screens/mainPage';
import Category from '@/screens/category';
import Sports from '@/screens/category/sports';
import VideoPanel from '@/screens/previews/VideoPanelPreview';

function App() {
  return (
    <Routes>
      <Route path='login' element={<Login/>}/>

      <Route path='/' element={<Layout />}>
        <Route path='' element={<MainPage />} />
        <Route path='watch' element={<Watch />} />
        <Route path='video-panel' element={<VideoPanel />} />
        <Route path='gallery' element={<Gallery />} />
        <Route path='feed/:list' element={<Feed />} />
        <Route path='news-feed' element={<NewsFeed />} />
        <Route path='news/:newsId' element={<News />} />
      </Route>

      <Route path='category' element={<Category />}>
        <Route path='sports/:game' element={<Sports />} />
      </Route>
    </Routes>
  );
}

export default App;
