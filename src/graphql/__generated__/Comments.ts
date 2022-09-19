/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CommentFiltersInput } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: Comments
// ====================================================

export interface Comments_comments_data_attributes_user_data_attributes {
  __typename: "UsersPermissionsUser";
  email: string;
}

export interface Comments_comments_data_attributes_user_data {
  __typename: "UsersPermissionsUserEntity";
  attributes: Comments_comments_data_attributes_user_data_attributes | null;
}

export interface Comments_comments_data_attributes_user {
  __typename: "UsersPermissionsUserEntityResponse";
  data: Comments_comments_data_attributes_user_data | null;
}

export interface Comments_comments_data_attributes {
  __typename: "Comment";
  comment: string;
  user: Comments_comments_data_attributes_user | null;
}

export interface Comments_comments_data {
  __typename: "CommentEntity";
  id: string | null;
  attributes: Comments_comments_data_attributes | null;
}

export interface Comments_comments {
  __typename: "CommentEntityResponseCollection";
  data: Comments_comments_data[];
}

export interface Comments {
  comments: Comments_comments | null;
}

export interface CommentsVariables {
  filters?: CommentFiltersInput | null;
}
