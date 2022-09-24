/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PaginationArg } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: VideoById
// ====================================================

export interface VideoById_video_data_attributes_likedBy_data_attributes_user_information_data {
  __typename: "UserInformationEntity";
  id: string | null;
}

export interface VideoById_video_data_attributes_likedBy_data_attributes_user_information {
  __typename: "UserInformationEntityResponse";
  data: VideoById_video_data_attributes_likedBy_data_attributes_user_information_data | null;
}

export interface VideoById_video_data_attributes_likedBy_data_attributes {
  __typename: "UsersPermissionsUser";
  email: string;
  user_information: VideoById_video_data_attributes_likedBy_data_attributes_user_information | null;
}

export interface VideoById_video_data_attributes_likedBy_data {
  __typename: "UsersPermissionsUserEntity";
  id: string | null;
  attributes: VideoById_video_data_attributes_likedBy_data_attributes | null;
}

export interface VideoById_video_data_attributes_likedBy {
  __typename: "UsersPermissionsUserRelationResponseCollection";
  data: VideoById_video_data_attributes_likedBy_data[];
}

export interface VideoById_video_data_attributes_dislikedBy_data {
  __typename: "UsersPermissionsUserEntity";
  id: string | null;
}

export interface VideoById_video_data_attributes_dislikedBy {
  __typename: "UsersPermissionsUserRelationResponseCollection";
  data: VideoById_video_data_attributes_dislikedBy_data[];
}

export interface VideoById_video_data_attributes_viewedBy_data {
  __typename: "UsersPermissionsUserEntity";
  id: string | null;
}

export interface VideoById_video_data_attributes_viewedBy {
  __typename: "UsersPermissionsUserRelationResponseCollection";
  data: VideoById_video_data_attributes_viewedBy_data[];
}

export interface VideoById_video_data_attributes_comments_data_attributes_user_data_attributes_user_information_data_attributes_profilePic_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface VideoById_video_data_attributes_comments_data_attributes_user_data_attributes_user_information_data_attributes_profilePic_data {
  __typename: "UploadFileEntity";
  id: string | null;
  attributes: VideoById_video_data_attributes_comments_data_attributes_user_data_attributes_user_information_data_attributes_profilePic_data_attributes | null;
}

export interface VideoById_video_data_attributes_comments_data_attributes_user_data_attributes_user_information_data_attributes_profilePic {
  __typename: "UploadFileEntityResponse";
  data: VideoById_video_data_attributes_comments_data_attributes_user_data_attributes_user_information_data_attributes_profilePic_data | null;
}

export interface VideoById_video_data_attributes_comments_data_attributes_user_data_attributes_user_information_data_attributes {
  __typename: "UserInformation";
  fullName: string;
  profilePic: VideoById_video_data_attributes_comments_data_attributes_user_data_attributes_user_information_data_attributes_profilePic;
}

export interface VideoById_video_data_attributes_comments_data_attributes_user_data_attributes_user_information_data {
  __typename: "UserInformationEntity";
  id: string | null;
  attributes: VideoById_video_data_attributes_comments_data_attributes_user_data_attributes_user_information_data_attributes | null;
}

export interface VideoById_video_data_attributes_comments_data_attributes_user_data_attributes_user_information {
  __typename: "UserInformationEntityResponse";
  data: VideoById_video_data_attributes_comments_data_attributes_user_data_attributes_user_information_data | null;
}

export interface VideoById_video_data_attributes_comments_data_attributes_user_data_attributes {
  __typename: "UsersPermissionsUser";
  user_information: VideoById_video_data_attributes_comments_data_attributes_user_data_attributes_user_information | null;
}

export interface VideoById_video_data_attributes_comments_data_attributes_user_data {
  __typename: "UsersPermissionsUserEntity";
  id: string | null;
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
  createdAt: any | null;
}

export interface VideoById_video_data_attributes_comments_data {
  __typename: "CommentEntity";
  id: string | null;
  attributes: VideoById_video_data_attributes_comments_data_attributes | null;
}

export interface VideoById_video_data_attributes_comments {
  __typename: "CommentRelationResponseCollection";
  data: VideoById_video_data_attributes_comments_data[];
}

export interface VideoById_video_data_attributes {
  __typename: "Video";
  embedId: string;
  title: string;
  description: string;
  likedBy: VideoById_video_data_attributes_likedBy | null;
  dislikedBy: VideoById_video_data_attributes_dislikedBy | null;
  viewedBy: VideoById_video_data_attributes_viewedBy | null;
  publishedAt: any | null;
  comments: VideoById_video_data_attributes_comments | null;
}

export interface VideoById_video_data {
  __typename: "VideoEntity";
  id: string | null;
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
  pagination?: PaginationArg | null;
  sort?: (string | null)[] | null;
}
