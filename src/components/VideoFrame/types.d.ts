export type VideoFrameProps = {
  embedId: string;
  videoTitle: string;
  videoDescription: string;
  videoLikes: string;
  videoDislikes: string;
  videoViews: string;
  isLiked?: boolean;
  videoComments?: CommentDataProp[];
  reportHandler: () => void;
};
