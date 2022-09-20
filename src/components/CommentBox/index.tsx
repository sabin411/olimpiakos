import React, { useRef, useState } from 'react';

// package
import { Avatar, Tooltip } from '@mui/material';
import { formatDistanceToNowStrict } from 'date-fns';

//icons
import SendIcon from '@mui/icons-material/Send';

// images
import dummyImage from '@/assets/images/dummy.jpg';

// types
import { SearchInputProps, SingleCommentProps } from './types';
import { CommentDataProp } from '@/global/types';

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
  onSubmit,
  containerStyle,
}) => {
  return (
    <form
      className={`flex h-12 min-h-[48px] rounded-lg 
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

function CommentBox({
  comments,
  containerStyle,
}: {
  comments: CommentDataProp[];
  containerStyle?: string;
}) {
  const [value, setValue] = useState('');
  const [liveComments, setLiveComments] = useState(comments);
  const bottomRef = useRef(null);

  React.useEffect(() => {
    setLiveComments(comments);
  }, [comments]);

  console.log({ liveComments, comments });

  // This function returns jsx for each comment
  const Comment = ({
    avatar,
    text,
    timeStamp,
    userName,
  }: SingleCommentProps) => {
    return (
      <div className='py-3 mr-3'>
        <div className='flex'>
          <Avatar src={'http://localhost:1337' + avatar} className='mr-3' />
          <div>
            <h6 className='text-p font-semi-bold text-neutral-400'>
              {userName}
              <span className='text-s font-regular text-primary-600 ml-5'>
                {formatDistanceToNowStrict(timeStamp, { addSuffix: true })}
              </span>
            </h6>
            <Tooltip title={text} className='mt-1'>
              <p className='text-neutral-500 text-[12px] line-clamp-3'>
                {text}
              </p>
            </Tooltip>
          </div>
        </div>
      </div>
    );
  };

  // This function is used to add new comment to the list of comments
  const handleCommentSubmit = () => {
    setLiveComments([
      ...liveComments,
      {
        commentId: liveComments.length + 1,
        comment: value,
        commentUserImg:
          'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        timeStamp: new Date(),
        userName: 'John Doe',
      },
    ]);
    setValue('');
    // 👇️ scroll to bottom every time messages change
    //@ts-ignore
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className={`w-full flex max-h-full flex-col justify-between bg-primary-900 p-5 ${containerStyle}`}
    >
      <div ref={bottomRef} className='flex-1 flex flex-col  overflow-y-scroll'>
        {liveComments.map((cmnt, i) => {
          return (
            <Comment
              key={i}
              avatar={cmnt.commentUserImg ?? dummyImage}
              text={cmnt.comment}
              timeStamp={cmnt.timeStamp}
              userName={cmnt.userName || 'John Doe'}
            />
          );
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
