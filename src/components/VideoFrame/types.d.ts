export type VideoFrameProps = {
  embedId: string;
  videoTitle: string;
  videoDescription: string;
  videoLikes: number;
  videoDislikes: number;
  videoViews: number;
  isLiked?: boolean;
  isDisliked?: boolean;
  handleLikes: (likeStatus: boolean) => void;
  handleDislikes: (isDisliked: boolean) => void;
  videoComments?: CommentDataProp[];
  reportHandler: () => void;
  containerStyle?: string;
  likedBy?: CommonTypeProps;
  ViewedBy?: CommonTypeProps;
  dislikedBy?: CommonTypeProps;
  videoId: string;
};
