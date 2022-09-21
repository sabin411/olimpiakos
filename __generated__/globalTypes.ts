/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum PublicationState {
  LIVE = "LIVE",
  PREVIEW = "PREVIEW",
}

export interface BooleanFilterInput {
  and?: (boolean | null)[] | null;
  or?: (boolean | null)[] | null;
  not?: BooleanFilterInput | null;
  eq?: boolean | null;
  eqi?: boolean | null;
  ne?: boolean | null;
  startsWith?: boolean | null;
  endsWith?: boolean | null;
  contains?: boolean | null;
  notContains?: boolean | null;
  containsi?: boolean | null;
  notContainsi?: boolean | null;
  gt?: boolean | null;
  gte?: boolean | null;
  lt?: boolean | null;
  lte?: boolean | null;
  null?: boolean | null;
  notNull?: boolean | null;
  in?: (boolean | null)[] | null;
  notIn?: (boolean | null)[] | null;
  between?: (boolean | null)[] | null;
}

export interface CategoryFiltersInput {
  id?: IDFilterInput | null;
  name?: StringFilterInput | null;
  videos?: VideoFiltersInput | null;
  featured_events?: FeaturedEventFiltersInput | null;
  createdAt?: DateTimeFilterInput | null;
  updatedAt?: DateTimeFilterInput | null;
  publishedAt?: DateTimeFilterInput | null;
  and?: (CategoryFiltersInput | null)[] | null;
  or?: (CategoryFiltersInput | null)[] | null;
  not?: CategoryFiltersInput | null;
}

export interface CommentFiltersInput {
  id?: IDFilterInput | null;
  comment?: StringFilterInput | null;
  video?: VideoFiltersInput | null;
  user?: UsersPermissionsUserFiltersInput | null;
  featured_event?: FeaturedEventFiltersInput | null;
  createdAt?: DateTimeFilterInput | null;
  updatedAt?: DateTimeFilterInput | null;
  publishedAt?: DateTimeFilterInput | null;
  and?: (CommentFiltersInput | null)[] | null;
  or?: (CommentFiltersInput | null)[] | null;
  not?: CommentFiltersInput | null;
}

export interface DateTimeFilterInput {
  and?: (any | null)[] | null;
  or?: (any | null)[] | null;
  not?: DateTimeFilterInput | null;
  eq?: any | null;
  eqi?: any | null;
  ne?: any | null;
  startsWith?: any | null;
  endsWith?: any | null;
  contains?: any | null;
  notContains?: any | null;
  containsi?: any | null;
  notContainsi?: any | null;
  gt?: any | null;
  gte?: any | null;
  lt?: any | null;
  lte?: any | null;
  null?: boolean | null;
  notNull?: boolean | null;
  in?: (any | null)[] | null;
  notIn?: (any | null)[] | null;
  between?: (any | null)[] | null;
}

export interface FeaturedEventFiltersInput {
  id?: IDFilterInput | null;
  title?: StringFilterInput | null;
  description?: StringFilterInput | null;
  embedId?: StringFilterInput | null;
  category?: CategoryFiltersInput | null;
  liked_bies?: UsersPermissionsUserFiltersInput | null;
  dislikedBy?: UsersPermissionsUserFiltersInput | null;
  viewd_bies?: UsersPermissionsUserFiltersInput | null;
  comments?: CommentFiltersInput | null;
  duration?: StringFilterInput | null;
  createdAt?: DateTimeFilterInput | null;
  updatedAt?: DateTimeFilterInput | null;
  publishedAt?: DateTimeFilterInput | null;
  and?: (FeaturedEventFiltersInput | null)[] | null;
  or?: (FeaturedEventFiltersInput | null)[] | null;
  not?: FeaturedEventFiltersInput | null;
}

export interface FeaturedVideoFiltersInput {
  id?: IDFilterInput | null;
  videos?: VideoFiltersInput | null;
  createdAt?: DateTimeFilterInput | null;
  updatedAt?: DateTimeFilterInput | null;
  publishedAt?: DateTimeFilterInput | null;
  and?: (FeaturedVideoFiltersInput | null)[] | null;
  or?: (FeaturedVideoFiltersInput | null)[] | null;
  not?: FeaturedVideoFiltersInput | null;
}

export interface IDFilterInput {
  and?: (string | null)[] | null;
  or?: (string | null)[] | null;
  not?: IDFilterInput | null;
  eq?: string | null;
  eqi?: string | null;
  ne?: string | null;
  startsWith?: string | null;
  endsWith?: string | null;
  contains?: string | null;
  notContains?: string | null;
  containsi?: string | null;
  notContainsi?: string | null;
  gt?: string | null;
  gte?: string | null;
  lt?: string | null;
  lte?: string | null;
  null?: boolean | null;
  notNull?: boolean | null;
  in?: (string | null)[] | null;
  notIn?: (string | null)[] | null;
  between?: (string | null)[] | null;
}

export interface LongFilterInput {
  and?: (any | null)[] | null;
  or?: (any | null)[] | null;
  not?: LongFilterInput | null;
  eq?: any | null;
  eqi?: any | null;
  ne?: any | null;
  startsWith?: any | null;
  endsWith?: any | null;
  contains?: any | null;
  notContains?: any | null;
  containsi?: any | null;
  notContainsi?: any | null;
  gt?: any | null;
  gte?: any | null;
  lt?: any | null;
  lte?: any | null;
  null?: boolean | null;
  notNull?: boolean | null;
  in?: (any | null)[] | null;
  notIn?: (any | null)[] | null;
  between?: (any | null)[] | null;
}

export interface NewsFiltersInput {
  id?: IDFilterInput | null;
  title?: StringFilterInput | null;
  imageUrl?: StringFilterInput | null;
  description?: StringFilterInput | null;
  createdAt?: DateTimeFilterInput | null;
  updatedAt?: DateTimeFilterInput | null;
  publishedAt?: DateTimeFilterInput | null;
  and?: (NewsFiltersInput | null)[] | null;
  or?: (NewsFiltersInput | null)[] | null;
  not?: NewsFiltersInput | null;
}

export interface PaginationArg {
  page?: number | null;
  pageSize?: number | null;
  start?: number | null;
  limit?: number | null;
}

export interface PhotoFiltersInput {
  id?: IDFilterInput | null;
  imageUrl?: StringFilterInput | null;
  title?: StringFilterInput | null;
  description?: StringFilterInput | null;
  createdAt?: DateTimeFilterInput | null;
  updatedAt?: DateTimeFilterInput | null;
  publishedAt?: DateTimeFilterInput | null;
  and?: (PhotoFiltersInput | null)[] | null;
  or?: (PhotoFiltersInput | null)[] | null;
  not?: PhotoFiltersInput | null;
}

export interface StringFilterInput {
  and?: (string | null)[] | null;
  or?: (string | null)[] | null;
  not?: StringFilterInput | null;
  eq?: string | null;
  eqi?: string | null;
  ne?: string | null;
  startsWith?: string | null;
  endsWith?: string | null;
  contains?: string | null;
  notContains?: string | null;
  containsi?: string | null;
  notContainsi?: string | null;
  gt?: string | null;
  gte?: string | null;
  lt?: string | null;
  lte?: string | null;
  null?: boolean | null;
  notNull?: boolean | null;
  in?: (string | null)[] | null;
  notIn?: (string | null)[] | null;
  between?: (string | null)[] | null;
}

export interface UserInformationFiltersInput {
  id?: IDFilterInput | null;
  fullName?: StringFilterInput | null;
  Country?: StringFilterInput | null;
  phoneNumber?: LongFilterInput | null;
  isOnline?: BooleanFilterInput | null;
  users_permissions_user?: UsersPermissionsUserFiltersInput | null;
  createdAt?: DateTimeFilterInput | null;
  updatedAt?: DateTimeFilterInput | null;
  and?: (UserInformationFiltersInput | null)[] | null;
  or?: (UserInformationFiltersInput | null)[] | null;
  not?: UserInformationFiltersInput | null;
}

export interface UsersPermissionsPermissionFiltersInput {
  id?: IDFilterInput | null;
  action?: StringFilterInput | null;
  role?: UsersPermissionsRoleFiltersInput | null;
  createdAt?: DateTimeFilterInput | null;
  updatedAt?: DateTimeFilterInput | null;
  and?: (UsersPermissionsPermissionFiltersInput | null)[] | null;
  or?: (UsersPermissionsPermissionFiltersInput | null)[] | null;
  not?: UsersPermissionsPermissionFiltersInput | null;
}

export interface UsersPermissionsRoleFiltersInput {
  id?: IDFilterInput | null;
  name?: StringFilterInput | null;
  description?: StringFilterInput | null;
  type?: StringFilterInput | null;
  permissions?: UsersPermissionsPermissionFiltersInput | null;
  users?: UsersPermissionsUserFiltersInput | null;
  createdAt?: DateTimeFilterInput | null;
  updatedAt?: DateTimeFilterInput | null;
  and?: (UsersPermissionsRoleFiltersInput | null)[] | null;
  or?: (UsersPermissionsRoleFiltersInput | null)[] | null;
  not?: UsersPermissionsRoleFiltersInput | null;
}

export interface UsersPermissionsUserFiltersInput {
  id?: IDFilterInput | null;
  username?: StringFilterInput | null;
  email?: StringFilterInput | null;
  provider?: StringFilterInput | null;
  password?: StringFilterInput | null;
  resetPasswordToken?: StringFilterInput | null;
  confirmationToken?: StringFilterInput | null;
  confirmed?: BooleanFilterInput | null;
  blocked?: BooleanFilterInput | null;
  role?: UsersPermissionsRoleFiltersInput | null;
  likedvideos?: VideoFiltersInput | null;
  disliked_videos?: VideoFiltersInput | null;
  viewed_videos?: VideoFiltersInput | null;
  comments?: CommentFiltersInput | null;
  LIkedFeaturedEvents?: FeaturedEventFiltersInput | null;
  dislikedFeaturedEvents?: FeaturedEventFiltersInput | null;
  viewedFeaturedEvents?: FeaturedEventFiltersInput | null;
  user_information?: UserInformationFiltersInput | null;
  createdAt?: DateTimeFilterInput | null;
  updatedAt?: DateTimeFilterInput | null;
  and?: (UsersPermissionsUserFiltersInput | null)[] | null;
  or?: (UsersPermissionsUserFiltersInput | null)[] | null;
  not?: UsersPermissionsUserFiltersInput | null;
}

export interface VideoFiltersInput {
  id?: IDFilterInput | null;
  embedId?: StringFilterInput | null;
  title?: StringFilterInput | null;
  description?: StringFilterInput | null;
  category?: CategoryFiltersInput | null;
  likedBy?: UsersPermissionsUserFiltersInput | null;
  dislikedBy?: UsersPermissionsUserFiltersInput | null;
  viewedBy?: UsersPermissionsUserFiltersInput | null;
  comments?: CommentFiltersInput | null;
  featured_video?: FeaturedVideoFiltersInput | null;
  duration?: StringFilterInput | null;
  createdAt?: DateTimeFilterInput | null;
  updatedAt?: DateTimeFilterInput | null;
  publishedAt?: DateTimeFilterInput | null;
  and?: (VideoFiltersInput | null)[] | null;
  or?: (VideoFiltersInput | null)[] | null;
  not?: VideoFiltersInput | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
