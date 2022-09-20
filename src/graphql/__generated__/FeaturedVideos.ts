/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PaginationArg } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: FeaturedVideos
// ====================================================

export interface FeaturedVideos_featuredEvents_data_attributes_liked_bies_data_attributes {
  __typename: "UsersPermissionsUser";
  email: string;
}

export interface FeaturedVideos_featuredEvents_data_attributes_liked_bies_data {
  __typename: "UsersPermissionsUserEntity";
  attributes: FeaturedVideos_featuredEvents_data_attributes_liked_bies_data_attributes | null;
}

export interface FeaturedVideos_featuredEvents_data_attributes_liked_bies {
  __typename: "UsersPermissionsUserRelationResponseCollection";
  data: FeaturedVideos_featuredEvents_data_attributes_liked_bies_data[];
}

export interface FeaturedVideos_featuredEvents_data_attributes_dislikedBy_data_attributes {
  __typename: "UsersPermissionsUser";
  email: string;
}

export interface FeaturedVideos_featuredEvents_data_attributes_dislikedBy_data {
  __typename: "UsersPermissionsUserEntity";
  attributes: FeaturedVideos_featuredEvents_data_attributes_dislikedBy_data_attributes | null;
}

export interface FeaturedVideos_featuredEvents_data_attributes_dislikedBy {
  __typename: "UsersPermissionsUserRelationResponseCollection";
  data: FeaturedVideos_featuredEvents_data_attributes_dislikedBy_data[];
}

export interface FeaturedVideos_featuredEvents_data_attributes_viewd_bies_data_attributes {
  __typename: "UsersPermissionsUser";
  email: string;
}

export interface FeaturedVideos_featuredEvents_data_attributes_viewd_bies_data {
  __typename: "UsersPermissionsUserEntity";
  attributes: FeaturedVideos_featuredEvents_data_attributes_viewd_bies_data_attributes | null;
}

export interface FeaturedVideos_featuredEvents_data_attributes_viewd_bies {
  __typename: "UsersPermissionsUserRelationResponseCollection";
  data: FeaturedVideos_featuredEvents_data_attributes_viewd_bies_data[];
}

export interface FeaturedVideos_featuredEvents_data_attributes_comments_data_attributes_user_data_attributes {
  __typename: "UsersPermissionsUser";
  email: string;
  name: string | null;
}

export interface FeaturedVideos_featuredEvents_data_attributes_comments_data_attributes_user_data {
  __typename: "UsersPermissionsUserEntity";
  attributes: FeaturedVideos_featuredEvents_data_attributes_comments_data_attributes_user_data_attributes | null;
}

export interface FeaturedVideos_featuredEvents_data_attributes_comments_data_attributes_user {
  __typename: "UsersPermissionsUserEntityResponse";
  data: FeaturedVideos_featuredEvents_data_attributes_comments_data_attributes_user_data | null;
}

export interface FeaturedVideos_featuredEvents_data_attributes_comments_data_attributes {
  __typename: "Comment";
  user: FeaturedVideos_featuredEvents_data_attributes_comments_data_attributes_user | null;
  publishedAt: any | null;
}

export interface FeaturedVideos_featuredEvents_data_attributes_comments_data {
  __typename: "CommentEntity";
  attributes: FeaturedVideos_featuredEvents_data_attributes_comments_data_attributes | null;
}

export interface FeaturedVideos_featuredEvents_data_attributes_comments {
  __typename: "CommentRelationResponseCollection";
  data: FeaturedVideos_featuredEvents_data_attributes_comments_data[];
}

export interface FeaturedVideos_featuredEvents_data_attributes_thumbnail_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface FeaturedVideos_featuredEvents_data_attributes_thumbnail_data {
  __typename: "UploadFileEntity";
  attributes: FeaturedVideos_featuredEvents_data_attributes_thumbnail_data_attributes | null;
}

export interface FeaturedVideos_featuredEvents_data_attributes_thumbnail {
  __typename: "UploadFileEntityResponse";
  data: FeaturedVideos_featuredEvents_data_attributes_thumbnail_data | null;
}

export interface FeaturedVideos_featuredEvents_data_attributes {
  __typename: "FeaturedEvent";
  title: string;
  description: string;
  embedId: string;
  liked_bies: FeaturedVideos_featuredEvents_data_attributes_liked_bies | null;
  dislikedBy: FeaturedVideos_featuredEvents_data_attributes_dislikedBy | null;
  viewd_bies: FeaturedVideos_featuredEvents_data_attributes_viewd_bies | null;
  comments: FeaturedVideos_featuredEvents_data_attributes_comments | null;
  publishedAt: any | null;
  thumbnail: FeaturedVideos_featuredEvents_data_attributes_thumbnail;
  duration: string;
}

export interface FeaturedVideos_featuredEvents_data {
  __typename: "FeaturedEventEntity";
  id: string | null;
  attributes: FeaturedVideos_featuredEvents_data_attributes | null;
}

export interface FeaturedVideos_featuredEvents {
  __typename: "FeaturedEventEntityResponseCollection";
  data: FeaturedVideos_featuredEvents_data[];
}

export interface FeaturedVideos {
  featuredEvents: FeaturedVideos_featuredEvents | null;
}

export interface FeaturedVideosVariables {
  pagination?: PaginationArg | null;
  sort?: (string | null)[] | null;
}
