/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: VideoById
// ====================================================

export interface VideoById_video_data_attributes_likedBy_data_attributes {
  __typename: "UsersPermissionsUser";
  email: string;
}

export interface VideoById_video_data_attributes_likedBy_data {
  __typename: "UsersPermissionsUserEntity";
  attributes: VideoById_video_data_attributes_likedBy_data_attributes | null;
}

export interface VideoById_video_data_attributes_likedBy {
  __typename: "UsersPermissionsUserRelationResponseCollection";
  data: VideoById_video_data_attributes_likedBy_data[];
}

export interface VideoById_video_data_attributes_dislikedBy_data_attributes {
  __typename: "UsersPermissionsUser";
  email: string;
}

export interface VideoById_video_data_attributes_dislikedBy_data {
  __typename: "UsersPermissionsUserEntity";
  attributes: VideoById_video_data_attributes_dislikedBy_data_attributes | null;
}

export interface VideoById_video_data_attributes_dislikedBy {
  __typename: "UsersPermissionsUserRelationResponseCollection";
  data: VideoById_video_data_attributes_dislikedBy_data[];
}

export interface VideoById_video_data_attributes_comments_data_attributes_user_data_attributes {
  __typename: "UsersPermissionsUser";
  email: string;
}

export interface VideoById_video_data_attributes_comments_data_attributes_user_data {
  __typename: "UsersPermissionsUserEntity";
  attributes: VideoById_video_data_attributes_comments_data_attributes_user_data_attributes | null;
}

export interface VideoById_video_data_attributes_comments_data_attributes_user {
  __typename: "UsersPermissionsUserEntityResponse";
  data: VideoById_video_data_attributes_comments_data_attributes_user_data | null;
}

export interface VideoById_video_data_attributes_comments_data_attributes {
  __typename: "Comment";
  comment: string;
  user: VideoById_video_data_attributes_comments_data_attributes_user | null;
}

export interface VideoById_video_data_attributes_comments_data {
  __typename: "CommentEntity";
  attributes: VideoById_video_data_attributes_comments_data_attributes | null;
}

export interface VideoById_video_data_attributes_comments {
  __typename: "CommentRelationResponseCollection";
  data: VideoById_video_data_attributes_comments_data[];
}

export interface VideoById_video_data_attributes_viewedBy_data_attributes {
  __typename: "UsersPermissionsUser";
  email: string;
}

export interface VideoById_video_data_attributes_viewedBy_data {
  __typename: "UsersPermissionsUserEntity";
  attributes: VideoById_video_data_attributes_viewedBy_data_attributes | null;
}

export interface VideoById_video_data_attributes_viewedBy {
  __typename: "UsersPermissionsUserRelationResponseCollection";
  data: VideoById_video_data_attributes_viewedBy_data[];
}

export interface VideoById_video_data_attributes {
  __typename: "Video";
  embedId: string;
  title: string;
  description: string;
  likedBy: VideoById_video_data_attributes_likedBy | null;
  dislikedBy: VideoById_video_data_attributes_dislikedBy | null;
  comments: VideoById_video_data_attributes_comments | null;
  viewedBy: VideoById_video_data_attributes_viewedBy | null;
}

export interface VideoById_video_data {
  __typename: "VideoEntity";
  attributes: VideoById_video_data_attributes | null;
}

export interface VideoById_video {
  __typename: "VideoEntityResponse";
  data: VideoById_video_data | null;
}

export interface VideoById {
  video: VideoById_video | null;
}

export interface VideoByIdVariables {
  videoId?: string | null;
}
