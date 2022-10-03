/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PaginationArg, VideoFiltersInput } from "./../../../__generated__/globalTypes";

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

export interface Videos_videos_data_attributes_category_data_attributes {
  __typename: "Category";
  name: string;
}

export interface Videos_videos_data_attributes_category_data {
  __typename: "CategoryEntity";
  id: string | null;
  attributes: Videos_videos_data_attributes_category_data_attributes | null;
}

export interface Videos_videos_data_attributes_category {
  __typename: "CategoryEntityResponse";
  data: Videos_videos_data_attributes_category_data | null;
}

export interface Videos_videos_data_attributes_dislikedBy_data {
  __typename: "UsersPermissionsUserEntity";
  id: string | null;
}

export interface Videos_videos_data_attributes_dislikedBy {
  __typename: "UsersPermissionsUserRelationResponseCollection";
  data: Videos_videos_data_attributes_dislikedBy_data[];
}

export interface Videos_videos_data_attributes_viewedBy_data {
  __typename: "UsersPermissionsUserEntity";
  id: string | null;
}

export interface Videos_videos_data_attributes_viewedBy {
  __typename: "UsersPermissionsUserRelationResponseCollection";
  data: Videos_videos_data_attributes_viewedBy_data[];
}

export interface Videos_videos_data_attributes_comments_data_attributes_user_data_attributes_user_information_data_attributes {
  __typename: "UserInformation";
  fullName: string;
}

export interface Videos_videos_data_attributes_comments_data_attributes_user_data_attributes_user_information_data {
  __typename: "UserInformationEntity";
  id: string | null;
  attributes: Videos_videos_data_attributes_comments_data_attributes_user_data_attributes_user_information_data_attributes | null;
}

export interface Videos_videos_data_attributes_comments_data_attributes_user_data_attributes_user_information {
  __typename: "UserInformationEntityResponse";
  data: Videos_videos_data_attributes_comments_data_attributes_user_data_attributes_user_information_data | null;
}

export interface Videos_videos_data_attributes_comments_data_attributes_user_data_attributes {
  __typename: "UsersPermissionsUser";
  email: string;
  user_information: Videos_videos_data_attributes_comments_data_attributes_user_data_attributes_user_information | null;
}

export interface Videos_videos_data_attributes_comments_data_attributes_user_data {
  __typename: "UsersPermissionsUserEntity";
  id: string | null;
  attributes: Videos_videos_data_attributes_comments_data_attributes_user_data_attributes | null;
}

export interface Videos_videos_data_attributes_comments_data_attributes_user {
  __typename: "UsersPermissionsUserEntityResponse";
  data: Videos_videos_data_attributes_comments_data_attributes_user_data | null;
}

export interface Videos_videos_data_attributes_comments_data_attributes {
  __typename: "Comment";
  comment: string;
  user: Videos_videos_data_attributes_comments_data_attributes_user | null;
}

export interface Videos_videos_data_attributes_comments_data {
  __typename: "CommentEntity";
  id: string | null;
  attributes: Videos_videos_data_attributes_comments_data_attributes | null;
}

export interface Videos_videos_data_attributes_comments {
  __typename: "CommentRelationResponseCollection";
  data: Videos_videos_data_attributes_comments_data[];
}

export interface Videos_videos_data_attributes {
  __typename: "Video";
  embedId: string;
  title: string;
  description: string;
  likedBy: Videos_videos_data_attributes_likedBy | null;
  thumbnail: Videos_videos_data_attributes_thumbnail;
  category: Videos_videos_data_attributes_category | null;
  dislikedBy: Videos_videos_data_attributes_dislikedBy | null;
  viewedBy: Videos_videos_data_attributes_viewedBy | null;
  comments: Videos_videos_data_attributes_comments | null;
  duration: string;
  publishedAt: any | null;
}

export interface Videos_videos_data {
  __typename: "VideoEntity";
  id: string | null;
  attributes: Videos_videos_data_attributes | null;
}

export interface Videos_videos_meta_pagination {
  __typename: "Pagination";
  total: number;
  page: number;
  pageSize: number;
  pageCount: number;
}

export interface Videos_videos_meta {
  __typename: "ResponseCollectionMeta";
  pagination: Videos_videos_meta_pagination;
}

export interface Videos_videos {
  __typename: "VideoEntityResponseCollection";
  data: Videos_videos_data[];
  meta: Videos_videos_meta;
}

export interface Videos {
  videos: Videos_videos | null;
}

export interface VideosVariables {
  pagination?: PaginationArg | null;
  filters?: VideoFiltersInput | null;
  sort?: (string | null)[] | null;
}
