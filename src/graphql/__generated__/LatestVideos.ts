/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PaginationArg } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: LatestVideos
// ====================================================

export interface LatestVideos_videos_data_attributes_likedBy_data {
  __typename: "UsersPermissionsUserEntity";
  id: string | null;
}

export interface LatestVideos_videos_data_attributes_likedBy {
  __typename: "UsersPermissionsUserRelationResponseCollection";
  data: LatestVideos_videos_data_attributes_likedBy_data[];
}

export interface LatestVideos_videos_data_attributes_thumbnail_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface LatestVideos_videos_data_attributes_thumbnail_data {
  __typename: "UploadFileEntity";
  attributes: LatestVideos_videos_data_attributes_thumbnail_data_attributes | null;
}

export interface LatestVideos_videos_data_attributes_thumbnail {
  __typename: "UploadFileRelationResponseCollection";
  data: LatestVideos_videos_data_attributes_thumbnail_data[];
}

export interface LatestVideos_videos_data_attributes_viewedBy_data {
  __typename: "UsersPermissionsUserEntity";
  id: string | null;
}

export interface LatestVideos_videos_data_attributes_viewedBy {
  __typename: "UsersPermissionsUserRelationResponseCollection";
  data: LatestVideos_videos_data_attributes_viewedBy_data[];
}

export interface LatestVideos_videos_data_attributes {
  __typename: "Video";
  embedId: string;
  title: string;
  description: string;
  likedBy: LatestVideos_videos_data_attributes_likedBy | null;
  thumbnail: LatestVideos_videos_data_attributes_thumbnail;
  viewedBy: LatestVideos_videos_data_attributes_viewedBy | null;
  duration: string;
}

export interface LatestVideos_videos_data {
  __typename: "VideoEntity";
  id: string | null;
  attributes: LatestVideos_videos_data_attributes | null;
}

export interface LatestVideos_videos {
  __typename: "VideoEntityResponseCollection";
  data: LatestVideos_videos_data[];
}

export interface LatestVideos {
  videos: LatestVideos_videos | null;
}

export interface LatestVideosVariables {
  pagination?: PaginationArg | null;
  sort?: (string | null)[] | null;
}
