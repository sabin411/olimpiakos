/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CommentInput } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: CreateComment
// ====================================================

export interface CreateComment_createComment_data_attributes {
  __typename: "Comment";
  comment: string;
}

export interface CreateComment_createComment_data {
  __typename: "CommentEntity";
  id: string | null;
  attributes: CreateComment_createComment_data_attributes | null;
}

export interface CreateComment_createComment {
  __typename: "CommentEntityResponse";
  data: CreateComment_createComment_data | null;
}

export interface CreateComment {
  createComment: CreateComment_createComment | null;
}

export interface CreateCommentVariables {
  data: CommentInput;
}
