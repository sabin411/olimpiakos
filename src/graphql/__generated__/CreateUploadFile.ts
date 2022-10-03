/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UploadFileInput } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: CreateUploadFile
// ====================================================

export interface CreateUploadFile_createUploadFile_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface CreateUploadFile_createUploadFile_data {
  __typename: "UploadFileEntity";
  id: string | null;
  attributes: CreateUploadFile_createUploadFile_data_attributes | null;
}

export interface CreateUploadFile_createUploadFile {
  __typename: "UploadFileEntityResponse";
  data: CreateUploadFile_createUploadFile_data | null;
}

export interface CreateUploadFile {
  createUploadFile: CreateUploadFile_createUploadFile | null;
}

export interface CreateUploadFileVariables {
  data: UploadFileInput;
}
