/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FeaturedEvents
// ====================================================

export interface FeaturedEvents_featuredVideos_data_attributes_videos_data_attributes_thumbnail_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface FeaturedEvents_featuredVideos_data_attributes_videos_data_attributes_thumbnail_data {
  __typename: "UploadFileEntity";
  attributes: FeaturedEvents_featuredVideos_data_attributes_videos_data_attributes_thumbnail_data_attributes | null;
}

export interface FeaturedEvents_featuredVideos_data_attributes_videos_data_attributes_thumbnail {
  __typename: "UploadFileRelationResponseCollection";
  data: FeaturedEvents_featuredVideos_data_attributes_videos_data_attributes_thumbnail_data[];
}

export interface FeaturedEvents_featuredVideos_data_attributes_videos_data_attributes_likedBy_data {
  __typename: "UsersPermissionsUserEntity";
  id: string | null;
}

export interface FeaturedEvents_featuredVideos_data_attributes_videos_data_attributes_likedBy {
  __typename: "UsersPermissionsUserRelationResponseCollection";
  data: FeaturedEvents_featuredVideos_data_attributes_videos_data_attributes_likedBy_data[];
}

export interface FeaturedEvents_featuredVideos_data_attributes_videos_data_attributes_viewedBy_data {
  __typename: "UsersPermissionsUserEntity";
  id: string | null;
}

export interface FeaturedEvents_featuredVideos_data_attributes_videos_data_attributes_viewedBy {
  __typename: "UsersPermissionsUserRelationResponseCollection";
  data: FeaturedEvents_featuredVideos_data_attributes_videos_data_attributes_viewedBy_data[];
}

export interface FeaturedEvents_featuredVideos_data_attributes_videos_data_attributes {
  __typename: "Video";
  embedId: string;
  title: string;
  thumbnail: FeaturedEvents_featuredVideos_data_attributes_videos_data_attributes_thumbnail;
  description: string;
  likedBy: FeaturedEvents_featuredVideos_data_attributes_videos_data_attributes_likedBy | null;
  viewedBy: FeaturedEvents_featuredVideos_data_attributes_videos_data_attributes_viewedBy | null;
  duration: string;
}

export interface FeaturedEvents_featuredVideos_data_attributes_videos_data {
  __typename: "VideoEntity";
  id: string | null;
  attributes: FeaturedEvents_featuredVideos_data_attributes_videos_data_attributes | null;
}

export interface FeaturedEvents_featuredVideos_data_attributes_videos {
  __typename: "VideoRelationResponseCollection";
  data: FeaturedEvents_featuredVideos_data_attributes_videos_data[];
}

export interface FeaturedEvents_featuredVideos_data_attributes {
  __typename: "FeaturedVideo";
  videos: FeaturedEvents_featuredVideos_data_attributes_videos | null;
}

export interface FeaturedEvents_featuredVideos_data {
  __typename: "FeaturedVideoEntity";
  attributes: FeaturedEvents_featuredVideos_data_attributes | null;
}

export interface FeaturedEvents_featuredVideos {
  __typename: "FeaturedVideoEntityResponseCollection";
  data: FeaturedEvents_featuredVideos_data[];
}

export interface FeaturedEvents {
  featuredVideos: FeaturedEvents_featuredVideos | null;
}
