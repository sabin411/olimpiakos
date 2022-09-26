/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { NewsFiltersInput, PaginationArg } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: AllNews
// ====================================================

export interface AllNews_allNews_data_attributes_imageUrl_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface AllNews_allNews_data_attributes_imageUrl_data {
  __typename: "UploadFileEntity";
  id: string | null;
  attributes: AllNews_allNews_data_attributes_imageUrl_data_attributes | null;
}

export interface AllNews_allNews_data_attributes_imageUrl {
  __typename: "UploadFileEntityResponse";
  data: AllNews_allNews_data_attributes_imageUrl_data | null;
}

export interface AllNews_allNews_data_attributes {
  __typename: "News";
  title: string;
  imageUrl: AllNews_allNews_data_attributes_imageUrl;
  description: string | null;
  createdAt: any | null;
}

export interface AllNews_allNews_data {
  __typename: "NewsEntity";
  id: string | null;
  attributes: AllNews_allNews_data_attributes | null;
}

export interface AllNews_allNews {
  __typename: "NewsEntityResponseCollection";
  data: AllNews_allNews_data[];
}

export interface AllNews {
  allNews: AllNews_allNews | null;
}

export interface AllNewsVariables {
  sort?: (string | null)[] | null;
  filters?: NewsFiltersInput | null;
  pagination?: PaginationArg | null;
}
