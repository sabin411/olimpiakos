/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { VideoFiltersInput } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: VideoByCategory
// ====================================================

export interface VideoByCategory_videos_data_attributes_likedBy_data_attributes {
  __typename: "UsersPermissionsUser";
  email: string;
}

export interface VideoByCategory_videos_data_attributes_likedBy_data {
  __typename: "UsersPermissionsUserEntity";
  id: string | null;
  attributes: VideoByCategory_videos_data_attributes_likedBy_data_attributes | null;
}

export interface VideoByCategory_videos_data_attributes_likedBy {
  __typename: "UsersPermissionsUserRelationResponseCollection";
  data: VideoByCategory_videos_data_attributes_likedBy_data[];
}

export interface VideoByCategory_videos_data_attributes_viewedBy_data_attributes {
  __typename: "UsersPermissionsUser";
  email: string;
}

export interface VideoByCategory_videos_data_attributes_viewedBy_data {
  __typename: "UsersPermissionsUserEntity";
  attributes: VideoByCategory_videos_data_attributes_viewedBy_data_attributes | null;
}

export interface VideoByCategory_videos_data_attributes_viewedBy {
  __typename: "UsersPermissionsUserRelationResponseCollection";
  data: VideoByCategory_videos_data_attributes_viewedBy_data[];
}

export interface VideoByCategory_videos_data_attributes_thumbnail_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface VideoByCategory_videos_data_attributes_thumbnail_data {
  __typename: "UploadFileEntity";
  attributes: VideoByCategory_videos_data_attributes_thumbnail_data_attributes | null;
}

export interface VideoByCategory_videos_data_attributes_thumbnail {
  __typename: "UploadFileRelationResponseCollection";
  data: VideoByCategory_videos_data_attributes_thumbnail_data[];
}

export interface VideoByCategory_videos_data_attributes {
  __typename: "Video";
  embedId: string;
  title: string;
  description: string;
  likedBy: VideoByCategory_videos_data_attributes_likedBy | null;
  viewedBy: VideoByCategory_videos_data_attributes_viewedBy | null;
  thumbnail: VideoByCategory_videos_data_attributes_thumbnail;
}

export interface VideoByCategory_videos_data {
  __typename: "VideoEntity";
  attributes: VideoByCategory_videos_data_attributes | null;
}

export interface VideoByCategory_videos {
  __typename: "VideoEntityResponseCollection";
  data: VideoByCategory_videos_data[];
}

export interface VideoByCategory {
  videos: VideoByCategory_videos | null;
}

export interface VideoByCategoryVariables {
  filters?: VideoFiltersInput | null;
}
