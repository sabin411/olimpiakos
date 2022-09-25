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
import thumbnail from '../assets/images/thumbnail.webp';

// errror image
export const errorMessages = {
  fullNameRequired: 'Please enter your full name.',
  fullNameMin: 'Name must be at least 3 characters.',
  fullNameMax: 'Name must be less than 25 characters.',

  phoneNumberRequired: 'Please enter your phone number.',
  phoneNumberMin: 'Phone number must be at least 10 characters.',
  phoneNumberMax: 'Phone number must be less than 15 characters.',

  userNameRequired: 'Please enter your username.',
  userNameMin: 'Username must be at least 4 characters.',
  userNameMax: 'Username must be less than 20 characters.',
  userNameInvalid:
    'Username must contain only letters, numbers, and underscores.',

  countryRequired: 'Please select your country.',

  emailRequired: 'Please enter your email.',
  emailInvalid: 'Please enter a valid email.',

  passwordRequired: 'Please enter your password.',
  passwordMin: 'Password must be at least 8 characters.',
  passwordMax: 'Password must be at most 20 characters.',
  passwordRequirements:
    'Password must contain at least one uppercase, one lowercase, one number and one special character.',

  confirmPasswordRequired: 'Please re-enter your password.',
  confirmPasswordMisMatch: 'Passwords do not match.',

  oldPasswordRequired: 'Please enter your old password.',
};

export const sidebar = {
  primaryLinks: [
    { title: 'Home', icon: HomeOutlinedIcon, linkTo: '/' },
    {
      title: 'Categories',
      icon: CategoryOutlinedIcon,
      linkTo: '/category/sports/all',
    },
    {
      title: 'Explore',
      icon: ExploreOutlinedIcon,
      linkTo: '/category/sports/all',
    },
  ],
  secondaryLinks: [
    { title: 'Trending', icon: TrendingUpIcon, linkTo: '/feed/trending' },
    { title: 'Latest', icon: FiberNewIcon, linkTo: '/feed/latest' },
    {
      title: 'Liked Videos',
      icon: ThumbUpOutlinedIcon,
      linkTo: '/feed/likedVideos',
    },
    { title: 'Watched', icon: LiveTvOutlinedIcon, linkTo: '/feed/history' },
    { title: 'Video Panel', icon: LiveTvOutlinedIcon, linkTo: 'video-panel' },
  ],
};

// latest news constants
export const latestNews = {
  title: 'Latest News',
  moreNews: 'More news...',
  news: [
    {
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      createdAt: new Date('2022-04-01'),
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      createdAt: new Date('2022-02-01'),
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      createdAt: new Date('2022-05-01'),
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      createdAt: new Date('2022-03-07'),
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      createdAt: new Date('2022-03-07'),
    },
  ],
};

// latest photos
export const latestPhotos = {
  title: 'Latest Photos',
  morePhotos: 'More Photos...',
  photos: [
    {
      id: 1,
      image:
        'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?cs=srgb&dl=pexels-pixabay-274422.jpg&fm=jpg',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      timeStamp: new Date('2022-04-01'),
    },
    {
      id: 2,
      image:
        'https://images.pexels.com/photos/1618200/pexels-photo-1618200.jpeg?cs=srgb&dl=pexels-football-wife-1618200.jpg&fm=jpg',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      timeStamp: new Date('2022-02-01'),
    },
  ],
};

// consts
export const dummyFeaturedVideo = [
  {
    time: '1:00',
    title: 'Brazil vs Netherland - A dramatic Ending left everybody in shock.',
    description:
      'Brazil vs Netherland - A dramatic Ending left everybody in shock.',
    thumbnail: hero1,
    views: 23093,
    likes: 200323,
    videoId: '12343',
    embedId: 'dQw4w9WgXcQ',
  },
];

// Explore more
export const categoriesData = {
  title: 'Explore More',
  items: [
    {
      id: 8,
      name: 'All',
      linkTo: '/category/sports/all',
    },
    {
      id: 1,
      name: 'Football',
      linkTo: '/category/sports/football',
    },
    {
      id: 2,
      name: 'Volleyball',
      linkTo: '/category/sports/volleyball',
    },
    {
      id: 3,
      name: 'Cricket',
      linkTo: '/category/sports/cricket',
    },
    {
      id: 4,
      name: 'Swimming',
      linkTo: '/category/sports/swimming',
    },
    {
      id: 6,
      name: 'Golf',
      linkTo: '/category/sports/golf',
    },
    {
      id: 7,
      name: 'Marathon',
      linkTo: '/category/sports/marathon',
    },
    {
      id: 8,
      name: 'Archery',
      linkTo: '/category/sports/archery',
    },
    {
      id: 9,
      name: 'Basketball',
      linkTo: '/category/sports/basketball',
    },
    {
      id: 10,
      name: 'Baseball',
      linkTo: '/category/sports/baseball',
    },
    {
      id: 11,
      name: 'Rugby',
      linkTo: '/category/sports/rugby',
    },
    {
      id: 12,
      name: 'Boxing',
      linkTo: '/category/sports/boxing',
    },
    {
      id: 13,
      name: 'Cycling',
      linkTo: '/category/sports/cycling',
    },
    {
      id: 14,
      name: 'Darts',
      linkTo: '/category/sports/darts',
    },
    {
      id: 15,
      name: 'Fencing',
      linkTo: '/category/sports/fencing',
    },
  ],
};

// latest section constants
export const latestSection = {
  title: 'Latest',
  button: 'Explore more',
  items: [
    {
      embedId: 'kn5uevla61U',
      isLiked: true,
      videoDescription:
        ' The Football final of the Olympic Games 2016 was between the host nation Brazil and the reigning World Cup Champion Germany. With top players like Neymar, Gabriel Jesus, Marquinhos, Niklas Süle and the Bender Twins on the pitch, it promised to be an exciting fight for the gold medal - and indeed, it was a more than thrilling showdown at the Maracanã!',
      videoTitle:
        "Brazil vs Germany - FULL Match - Men's Football Final Rio 2016 | Throwback Thursday",
      videoLikes: '76322',
      videoViews: '8900818',
      videoDislikes: '7235',
      videoDuration: '5:18',
      isDisliked: false,
      thumbnail:
        'https://i.ytimg.com/vi/kn5uevla61U/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFbyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDLddt-pQGPdhV44O8Np5pEJl_GCQ',
    },
    {
      embedId: '8tIUTAahr5g',
      isLiked: false,
      videoDescription:
        'Murali Sreeshankar becomes the first Indian man to qualify for the finals of the long jump event at the World Athletics Championships. The 23-year-old national record holder registered a jump of 8 meters to be eligible for the finals.',
      videoTitle:
        "Men's Long Jump | Highlights | World Athletics Championships | 16th July 2022",
      videoLikes: '240323',
      videoViews: '15203093',
      videoDislikes: '7235',
      videoDuration: '5:18',
      isDisliked: false,
      thumbnail:
        'https://i.ytimg.com/vi/8tIUTAahr5g/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFbyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLATXIzB913bUaV98MXsvBz3FwMtMA',
    },
    {
      embedId: 'L-rqg2ug7dE',
      isLiked: false,
      videoDescription:
        'In a brutal race of attrition, Joshua Cheptegei of Uganda capped a glorious year by securing the world 10,000m title to add to the world cross-country crown he secured in March.',
      videoTitle:
        "Men's 10,000m Final | World Athletics Championships Doha 2019",
      videoLikes: '17032',
      videoViews: '3039956',
      videoDislikes: '4565',
      videoDuration: '28:18',
      isDisliked: false,
      thumbnail:
        'https://i.ytimg.com/vi/L-rqg2ug7dE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFbyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCLo-0QqvArBH8ffkOOj7-oBIf7ZQ',
    },
    {
      embedId: 'l9wUr-CK1Y4',
      isLiked: false,
      videoDescription:
        ' BK42  - Men -  Gold Final - Basketball - 12 August 2012 - London 2012 Olympic Games.',
      videoTitle:
        "Basketball - USA vs Spain - Men's Gold Final | London 2022 Olympic Games",
      videoLikes: '1597032',
      videoViews: '809956',
      videoDislikes: '75332',
      videoDuration: '2:53:54',
      isDisliked: false,
      thumbnail:
        'https://i.ytimg.com/vi/l9wUr-CK1Y4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFbyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC9M7wf_-IQMASfwY6lXpvlAwChAg',
    },
  ],
};

// trending section constants
export const trendingSection = {
  title: 'Trending',
  button: 'Explore more',
  items: [
    {
      embedId: 'kn5uevla61U',
      isLiked: true,
      videoDescription:
        ' The Football final of the Olympic Games 2016 was between the host nation Brazil and the reigning World Cup Champion Germany. With top players like Neymar, Gabriel Jesus, Marquinhos, Niklas Süle and the Bender Twins on the pitch, it promised to be an exciting fight for the gold medal - and indeed, it was a more than thrilling showdown at the Maracanã!',
      videoTitle:
        "Brazil vs Germany - FULL Match - Men's Football Final Rio 2016 | Throwback Thursday",
      videoLikes: '76322',
      videoViews: '8900818',
      videoDislikes: '7235',
      videoDuration: '5:18',
      isDisliked: false,
      thumbnail:
        'https://i.ytimg.com/vi/kn5uevla61U/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFbyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDLddt-pQGPdhV44O8Np5pEJl_GCQ',
    },
    {
      embedId: '8tIUTAahr5g',
      isLiked: false,
      videoDescription:
        'Murali Sreeshankar becomes the first Indian man to qualify for the finals of the long jump event at the World Athletics Championships. The 23-year-old national record holder registered a jump of 8 meters to be eligible for the finals.',
      videoTitle:
        "Men's Long Jump | Highlights | World Athletics Championships | 16th July 2022",
      videoLikes: '240323',
      videoViews: '15203093',
      videoDislikes: '7235',
      videoDuration: '5:18',
      isDisliked: false,
      thumbnail:
        'https://i.ytimg.com/vi/8tIUTAahr5g/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFbyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLATXIzB913bUaV98MXsvBz3FwMtMA',
    },
    {
      embedId: 'L-rqg2ug7dE',
      isLiked: false,
      videoDescription:
        'In a brutal race of attrition, Joshua Cheptegei of Uganda capped a glorious year by securing the world 10,000m title to add to the world cross-country crown he secured in March.',
      videoTitle:
        "Men's 10,000m Final | World Athletics Championships Doha 2019",
      videoLikes: '17032',
      videoViews: '3039956',
      videoDislikes: '4565',
      videoDuration: '28:18',
      isDisliked: false,
      thumbnail:
        'https://i.ytimg.com/vi/L-rqg2ug7dE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFbyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCLo-0QqvArBH8ffkOOj7-oBIf7ZQ',
    },
    {
      embedId: 'l9wUr-CK1Y4',
      isLiked: false,
      videoDescription:
        ' BK42  - Men -  Gold Final - Basketball - 12 August 2012 - London 2012 Olympic Games.',
      videoTitle:
        "Basketball - USA vs Spain - Men's Gold Final | London 2022 Olympic Games",
      videoLikes: '1597032',
      videoViews: '809956',
      videoDislikes: '75332',
      videoDuration: '2:53:54',
      isDisliked: false,
      thumbnail:
        'https://i.ytimg.com/vi/l9wUr-CK1Y4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFbyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC9M7wf_-IQMASfwY6lXpvlAwChAg',
    },
  ],
};

// comments consts for now
export const dummyComments = [
  {
    commentId: '1',
    comment:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    commentUserImg:
      'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    timeStamp: new Date(),
    userName: 'John Doe',
  },
];

// news feed
export const newsFeed = {
  title: 'News Feed',
  news: [
    {
      id: 1,
      createdAt: new Date('2022-04-01'),
      image:
        'https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      title: "Bangladesh ponder over Mahmudullah's selection for T20 World Cup",
      description:
        "Bangladesh selectors are in two minds regarding the inclusion of Mahmudullah in the T20 squad for the World Cup to be played in Australia in October-November.Mahmudullah, the former national skipper, and with the most number of caps for Bangladesh in the shortest format, has averaged just over 20 in T20Is since the start of the World Cup last year.Incidentally, Bangladesh had rested Mahmudullah for the T20 series in Zimbabwe but called him back for the last game following the injuries to Liton Das and Nurul Hasan. He was also part of Bangladesh's set-up in the just-concluded Asia Cup.",
    },
    {
      id: 2,
      createdAt: new Date('2022-04-01'),
      image:
        'https://images.unsplash.com/photo-1663001244000-5a8880e2e6b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80',
      title: 'Siraj strikes leave Somerset reeling on opening day',
      description:
        'On a rain-curtailed day at Headingley, Essex elected to bowl first and managed to bowl out Yorkshire for a paltry total of 134. Right-arm pacer Sam Cook was quite impressive with the new ball as he dismissed opener Finlay Bean for a duck. Cook picked three wickets and was the pick of the bowlers for Essex as most of them were top-order scalps. Barring George Hill and Jonathan Tattersall, none of the batters were able to chip in with handy contributions as Yorkshire kept losing wickets at regular intervals throughout the innings.',
    },
    {
      id: 3,
      createdAt: new Date('2022-04-01'),
      image:
        'https://images.unsplash.com/photo-1661961110671-77b71b929d52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      title:
        'England vs Australia: Steve Smith, David Warner to miss first Ashes Test',
      description:
        'Steve Smith and David Warner will miss the first Ashes Test against England at Edgbaston, starting on August 1, Cricket Australia (CA) confirmed on Tuesday. The duo, who were banned for a year for their involvement in the ball-tampering scandal in South Africa in March, will return to international cricket in the second Test at Lord’s, starting on August 14. The third Test will be played at Headingley from August 22.',
    },
    {
      id: 4,
      createdAt: new Date('2022-04-01'),
      image:
        'https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      title: "Bangladesh ponder over Mahmudullah's selection for T20 World Cup",
      description:
        "Bangladesh selectors are in two minds regarding the inclusion of Mahmudullah in the T20 squad for the World Cup to be played in Australia in October-November.Mahmudullah, the former national skipper, and with the most number of caps for Bangladesh in the shortest format, has averaged just over 20 in T20Is since the start of the World Cup last year.Incidentally, Bangladesh had rested Mahmudullah for the T20 series in Zimbabwe but called him back for the last game following the injuries to Liton Das and Nurul Hasan. He was also part of Bangladesh's set-up in the just-concluded Asia Cup.",
    },
    {
      id: 5,
      createdAt: new Date('2022-04-01'),
      image:
        'https://images.unsplash.com/photo-1663001244000-5a8880e2e6b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80',
      title: 'Siraj strikes leave Somerset reeling on opening day',
      description:
        'On a rain-curtailed day at Headingley, Essex elected to bowl first and managed to bowl out Yorkshire for a paltry total of 134. Right-arm pacer Sam Cook was quite impressive with the new ball as he dismissed opener Finlay Bean for a duck. Cook picked three wickets and was the pick of the bowlers for Essex as most of them were top-order scalps. Barring George Hill and Jonathan Tattersall, none of the batters were able to chip in with handy contributions as Yorkshire kept losing wickets at regular intervals throughout the innings.',
    },
  ],
  latestPhotostitle: 'Latest Photos',
  latestPhotosMore: 'More phots...',
};

// individual news constant
export const individualNews = {
  sponser: 'Fun Olympic 2022',
  latestNews: {
    title: 'Latest News',
    more: 'More news...',
  },
};

// Sign up page
export const signUp = {
  title: "Let's get started",
  subTitle: 'Create an account to get all features',
  errorMessage: {
    unableToRegister: 'Unable to register your accont.',
    description: 'Please try again or contact us.',
    termsAndCondition: 'Please check the terms and conditions.',
    acceptTermsAndCondition: 'Your have to accept the terms and conditions.',
  },
  successMessage: {
    successfullyRegistered: 'Your account has been successfully registered',
    successfullyRegisteredSubTitle:
      'Please upload your profile picture to complete your profile.',
  },
  uploadImage: {
    title: 'Welcome! Let’s create your profile.',
    subTitle: 'Upload your profile picture.',
    addAvatar: 'Add an avatar',
    successMessages: {
      successfullyUploaded:
        'Your profile picture has been successfully uploaded.',

      successfullyCreatedAccount: 'Your account has been successfully created.',
      successfullyCreatedAccountSubTitle: "Let's get started.",
    },
    errorMessages: {
      unableToUpload: 'Unable to upload your profile picture.',

      fileSize: 'File size is too large.',
      fileSizeSubTitle: 'Please upload a file less than 4MB.',

      fileFormat: 'File format is not supported.',
      fileFormatSubtitle: "Please upload 'jpg', 'jpeg' or 'png' file.",

      failedToCreateAccount: 'Failed to create your account.',
      failedToCreateAccountSubTitle: 'Please try again or contact us.',
    },
  },
  form: {
    inputFields: {
      fullName: {
        name: 'fullName',
        label: 'Full Name',
        type: 'text',
      },
      email: {
        name: 'email',
        label: 'Email',
        type: 'email',
      },
      userName: {
        name: 'userName',
        label: 'User Name',
        type: 'text',
      },
      phoneNumber: {
        name: 'phoneNumber',
        label: 'Phone Number',
        type: 'number',
      },
      country: {
        name: 'country',
        label: 'Country',
      },
      password: {
        name: 'password',
        label: 'Password',
        type: 'password',
      },
    },
    termsAndconditions: {
      text: 'I agree to the',
      terms: 'Terms & Conditions',
      privacyPolicy: 'Privacy Policy.',
    },
    submitButton: 'Register',
    alreadyHaveAccount: 'Already have an account?',
    login: 'Login',
  },
};

// login constant
export const login = {
  title: 'Welcome back',
  subTitle: 'Login to your account',
  errorMessage: {
    unableToLogin: 'Unable to login.',
    description: 'Please try again or contact us.',
  },
  form: {
    inputFields: {
      email: {
        name: 'email',
        label: 'Email',
        type: 'email',
      },
      password: {
        name: 'password',
        label: 'Password',
        type: 'password',
      },
    },
    submitButton: 'Login',
    forgotPassword: 'Forgot Password?',
    dontHaveAccount: "Don't have an account?",
    signUp: 'Sign Up',
  },
};

// profile constant
export const profile = {
  editButton: 'Edit',
  changeButton: 'Change',
  signOutButton: 'Sign Out',
  profileLabels: {
    displayName: 'Display Name',
    email: 'Email',
    userName: 'User Name',
    phoneNumber: 'Phone Number',
    password: 'Password',
  },

  form: {
    inputFields: {
      fullName: {
        name: 'fullName',
        label: 'Full Name',
        type: 'text',
      },
      email: {
        name: 'email',
        label: 'Email',
        type: 'email',
      },
      phoneNumber: {
        name: 'phoneNumber',
        label: 'Phone Number',
        type: 'number',
      },
      oldPassword: {
        name: 'oldPassword',
        label: 'Old Password',
        type: 'password',
      },
      newPassword: {
        name: 'newPassword',
        label: 'New Password',
        type: 'password',
      },
    },
    termsAndconditions: {
      text: 'I agree to the',
      terms: 'Terms & Conditions',
      privacyPolicy: 'Privacy Policy.',
    },
    submitButton: 'Register',
    alreadyHaveAccount: 'Already have an account?',
    login: 'Login',
  },

  errorMessage: {
    unableToUpdate: 'Unable to update your profile.',
    nameUpdateFailed: 'Unable to update your name.',
    emailUpdateFailed: 'Unable to update your email.',
    phoneNumberUpdateFailed: 'Unable to update your phone number.',
    passwordUpdateFailed: 'Unable to update your password.',
  },
  successMessage: {
    nameUpdateSuccess: 'Your name has been successfully updated.',
    emailUpdateSuccess: 'Your email has been successfully updated.',
    phoneNumberUpdateSuccess:
      'Your phone number has been successfully updated.',
    passwordUpdateSuccess: 'Your password has been successfully updated.',
  },
};

// search screen constant
export const search = {
  searchResult: 'Search Result for:',
};

// footer constants
export const footer = {
  exploreMoreButton: 'Explore More',
  description:
    'Watch your favorite sports, discover award-winning Original Films and Series and explore our 24/7 thematic linear channels.',
  footerConst: [
    {
      title: 'Games',
      links: [
        {
          title: 'Football',
          linkTo: 'category/sports/football',
        },
        {
          title: 'Cricket',
          linkTo: 'category/sports/cricket',
        },
        {
          title: 'Tennis',
          linkTo: 'category/sports/tennis',
        },
        {
          title: 'Swimming',
          linkTo: 'category/sports/swimming',
        },
        {
          title: 'More...',
          linkTo: 'category/sports/all',
        },
      ],
    },
    {
      title: 'Follow us',
      links: [
        {
          title: 'Facebook',
          linkTo: 'https://www.facebook.com/olympics',
        },
        {
          title: 'Instagram',
          linkTo: 'https://www.instagram.com/olympics/',
        },
        {
          title: 'Twitter',
          linkTo: 'https://twitter.com/Olympics',
        },
      ],
    },
    {
      title: 'Other',
      links: [
        {
          title: 'News',
          linkTo: '/all-news',
        },
        {
          title: 'Gallery',
          linkTo: '/gallery',
        },
      ],
    },
  ],
};
