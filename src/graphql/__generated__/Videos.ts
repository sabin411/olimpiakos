/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Videos
// ====================================================

export interface Videos_videos_data_attributes_likedBy_data_attributes {
  __typename: "UsersPermissionsUser";
  email: string;
}

export interface Videos_videos_data_attributes_likedBy_data {
  __typename: "UsersPermissionsUserEntity";
  id: string | null;
  attributes: Videos_videos_data_attributes_likedBy_data_attributes | null;
}

export interface Videos_videos_data_attributes_likedBy {
  __typename: "UsersPermissionsUserRelationResponseCollection";
  data: Videos_videos_data_attributes_likedBy_data[];
}

export interface Videos_videos_data_attributes_thumbnail_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface Videos_videos_data_attributes_thumbnail_data {
  __typename: "UploadFileEntity";
  attributes: Videos_videos_data_attributes_thumbnail_data_attributes | null;
}

export interface Videos_videos_data_attributes_thumbnail {
  __typename: "UploadFileRelationResponseCollection";
  data: Videos_videos_data_attributes_thumbnail_data[];
}

export interface Videos_videos_data_attributes {
  __typename: "Video";
  embedId: string;
  title: string;
  description: string;
  likedBy: Videos_videos_data_attributes_likedBy | null;
  thumbnail: Videos_videos_data_attributes_thumbnail;
}

export interface Videos_videos_data {
  __typename: "VideoEntity";
  id: string | null;
  attributes: Videos_videos_data_attributes | null;
}

export interface Videos_videos {
  __typename: "VideoEntityResponseCollection";
  data: Videos_videos_data[];
}

export interface Videos {
  videos: Videos_videos | null;
}