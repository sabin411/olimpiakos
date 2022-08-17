// icons
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';

// image
import hero1 from '@/assets/images/heroslider/hero1.jpg';
import hero2 from '@/assets/images/heroslider/hero2.jpg';
import hero3 from '@/assets/images/heroslider/hero3.jpg';

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

// consts
export const dummyFeaturedVideo = [
  {
    time: '1:00',
    title: 'Brazil vs Netherland - A dramatic Ending left everybody in shock.',
    description:
      'Brazil vs Netherland - A dramatic Ending left everybody in shock.',
    thumbnail: hero2,
    views: '23093',
    likes: '200323',
    videoId: '12343',
  },
  {
    time: '2:53',
    title: 'Marathon',
    description:
      'Brazil vs Netherland - A dramatic Ending left everybody in shock.',
    thumbnail: hero1,
    views: '23093',
    likes: '200323',
    videoId: '1223',
  },
  {
    time: '4:53',
    title: '🏊‍♀️ 🏊🏻‍♂️ The best swimming finals at China2022 | Top Moments',
    description:
      ' Caeleb Dressel, Ariarne Titmus, Adam Peaty, Emma McKeon - they all left their marks at the 2022 Olympic Games! Here are the best swimming finals at #China2022 - enjoy watching! ',
    thumbnail: hero3,
    views: '23093',
    likes: '200323',
    videoId: '1223',
  },
];

// comments consts for now
export const dummyComments = [
  {
    commentId: 1,
    comment:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    commentUserImg:
      'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    commentId: 2,
    comment:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    commentUserImg:
      'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    commentId: 3,
    comment:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    commentUserImg:
      'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    commentId: 4,
    comment:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    commentUserImg:
      'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    commentId: 5,
    comment:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    commentUserImg:
      'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    commentId: 6,
    comment:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    commentUserImg:
      'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    commentId: 7,
    comment:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    commentUserImg:
      'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    commentId: 8,
    comment:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    commentUserImg:
      'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    commentId: 9,
    comment:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    commentUserImg:
      'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    commentId: 10,
    comment:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    commentUserImg:
      'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    commentId: 11,
    comment:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    commentUserImg:
      'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    commentId: 12,
    comment:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    commentUserImg:
      'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    commentId: 13,
    comment:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    commentUserImg:
      'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
];

// category data
export const categoriesData = [
  {
    id: 1,
    name: 'All',
    linkTo: '/category/all',
  },
  {
    id: 2,
    name: 'Football',
    linkTo: '/category/football',
  },
  {
    id: 3,
    name: 'Basketball',
    linkTo: '/category/basketball',
  },
  {
    id: 4,
    name: 'Baseball',
    linkTo: '/category/baseball',
  },
  {
    id: 5,
    name: 'Hockey',
    linkTo: '/category/hockey',
  },
  {
    id: 6,
    name: 'Soccer',
    linkTo: '/category/soccer',
  },
  {
    id: 7,
    name: 'Tennis',
    linkTo: '/category/tennis',
  },
  {
    id: 8,
    name: 'Archery',
    linkTo: '/category/archery',
  },
  {
    id: 9,
    name: 'Swimming',
    linkTo: '/category/swimming',
  },
  {
    id: 10,
    name: 'Golf',
    linkTo: '/category/golf',
  },
  {
    id: 11,
    name: 'Rugby',
    linkTo: '/category/rugby',
  },
  {
    id: 12,
    name: 'Boxing',
    linkTo: '/category/boxing',
  },
  {
    id: 13,
    name: 'Cycling',
    linkTo: '/category/cycling',
  },
  {
    id: 14,
    name: 'Darts',
    linkTo: '/category/darts',
  },
  {
    id: 15,
    name: 'Fencing',
    linkTo: '/category/fencing',
  },
];
