import React, { useRef, useState } from 'react';

// package
import { Avatar } from '@mui/material';

//icons
import SendIcon from '@mui/icons-material/Send';

// types
import { SearchInputProps } from './types';

//const
const comments = [
  {
    text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    userImage:
      'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    userImage:
      'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    userImage:
      'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    userImage:
      'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    userImage:
      'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    userImage:
      'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    userImage:
      'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    userImage:
      'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    userImage:
      'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    userImage:
      'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    userImage:
      'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    userImage:
      'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    userImage:
      'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
];

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
  onSubmit,
  containerStyle,
}) => {
  return (
    <form
      className={`flex h-12 rounded-lg 
      items-center border 
      border-primary-800 
      relative bg-primary-800 
      ${containerStyle}`}
      onSubmit={e => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <input
        type='text'
        value={value}
        onChange={e => onChange(e.target.value)}
        className={`h-full w-full pl-3 
        border-none rounded-lg
        text-neutral-400
        bg-primary-800 
        placeholder:text-neutral-600 
        focus:outline-none 
        focus:outline-secondary-700 
        focus:border-primary-800
        `}
        placeholder='Write comment...'
      />

      <button
        className={`w-6 h-6 flex justify-center 
        text-secondary-700 
        hover:text-secondary-800 
        active:text-secondary-800 
        items-center absolute 
        right-4 text-h6
      `}
        type='submit'
      >
        <SendIcon />
      </button>
    </form>
  );
};

function CommentBox() {
  const [value, setValue] = useState('');
  const [liveComments, setLiveComments] = useState(comments);
  const bottomRef = useRef(null);

  // This function returns jsx for each comment
  const Comment = ({ avatar, text }: { avatar: string; text: string }) => {
    return (
      <div className='flex items-center p-4'>
        <Avatar src={avatar} />
        <p className='ml-3 text-neutral-400'>{text}</p>
      </div>
    );
  };

  // This function is used to add new comment to the list of comments
  const handleCommentSubmit = () => {
    setLiveComments([
      ...liveComments,
      {
        text: value,
        userImage:
          'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      },
    ]);
    setValue('');
    // 👇️ scroll to bottom every time messages change
    //@ts-ignore
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='w-full flex flex-col justify-between bg-primary-900 p-5'>
      <div
        ref={bottomRef}
        className='flex-1 flex flex-col max-h-[500px] overflow-y-scroll'
      >
        {liveComments.map((cmnt, i) => {
          return <Comment key={i} avatar={cmnt.userImage} text={cmnt.text} />;
        })}
        <div ref={bottomRef} />
      </div>
      <SearchInput
        value={value}
        onChange={e => {
          setValue(e);
        }}
        onSubmit={handleCommentSubmit}
      />
    </div>
  );
}

export default CommentBox;
