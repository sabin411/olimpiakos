import react from 'react';

// components
import Button from '@/components/Button';

// packages
import { Route, Routes } from 'react-router-dom';

// PROTCTED ROUTER
import ProtectMe from '@/protctedRouter';

// screens
import Feed from '@/screens/feed';
import News from '@/screens/news';
import Test from '@/screens/test';
import Watch from '@/screens/watch';
import Login from '@/screens/login';
import Signup from '@/screens/signup';
import Search from '@/screens/search';
import Layout from '@/screens/layout';
import Gallery from '@/screens/gallery';
import NewsFeed from '@/screens/newsFeed';
import MainPage from '@/screens/mainPage';
import Category from '@/screens/category';
import Sports from '@/screens/category/sports';
import Redirecting from '@/screens/login/redirecting';
import UploadImage from '@/screens/signup/uploadImage';
import VideoPanel from '@/screens/previews/VideoPanelPreview';

function App() {
  return (
    <Routes>
      <Route path='test' element={<Test />} />

      <Route path='/' element={<Layout />}>
        <Route path='' element={<MainPage />} />
        <Route
          path='watch'
          element={
            <ProtectMe>
              <Watch />
            </ProtectMe>
          }
        />
        <Route path='video-panel' element={<VideoPanel />} />
        <Route path='gallery' element={<Gallery />} />
        <Route path='search' element={<Search />} />
        <Route path='feed/:list' element={<Feed />} />
        <Route path='news-feed' element={<NewsFeed />} />
        <Route path='news/:newsId' element={<News />} />
      </Route>
      <Route path='register' element={<Signup />} />
      <Route path='register-upload-image' element={<UploadImage />} />
      <Route path='login' element={<Login />} />
      <Route path='redirecting' element={<Redirecting />} />

      <Route path='category' element={<Category />}>
        <Route path='sports/:game' element={<Sports />} />
      </Route>
    </Routes>
  );
}

export default App;
