import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';

export const sidebar = {
  primaryLinks: [
    { title: 'Home', icon: HomeOutlinedIcon, linkTo: '/' },
    {
      title: 'Categories',
      icon: CategoryOutlinedIcon,
      linkTo: '/categories',
    },
    {
      title: 'Explore',
      icon: ExploreOutlinedIcon,
      linkTo: '/explore',
    },
  ],
  secondaryLinks: [
    { title: 'Trending', icon: TrendingUpIcon, linkTo: '/trending' },
    { title: 'Latest', icon: FiberNewIcon, linkTo: '/latest' },
    { title: 'Liked Videos', icon: ThumbUpOutlinedIcon, linkTo: '/liked' },
    { title: 'Watched', icon: LiveTvOutlinedIcon, linkTo: '/history' },
    { title: 'Video Panel', icon: LiveTvOutlinedIcon, linkTo: 'video-panel' },
  ],
};
