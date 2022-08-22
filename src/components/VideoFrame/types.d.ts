export type VideoFrameProps = {
  embedId: string;
  videoTitle: string;
  videoDescription: string;
  videoLikes: string;
  videoDislikes: string;
  videoViews: string;
  isLiked?: boolean;
  isDisliked?: boolean;
  handleLikes: (likeStatus: boolean) => void;
  handleDislikes: (isDisliked: boolean) => void;
  videoComments?: CommentDataProp[];
  reportHandler: () => void;
  containerStyle?: string;
};
