/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PaginationArg, PhotoFiltersInput } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: Photos
// ====================================================

export interface Photos_photos_data_attributes {
  __typename: "Photo";
  title: string;
  description: string;
  imageUrl: string | null;
  createdAt: any | null;
}

export interface Photos_photos_data {
  __typename: "PhotoEntity";
  id: string | null;
  attributes: Photos_photos_data_attributes | null;
}

export interface Photos_photos {
  __typename: "PhotoEntityResponseCollection";
  data: Photos_photos_data[];
}

export interface Photos {
  photos: Photos_photos | null;
}

export interface PhotosVariables {
  pagination?: PaginationArg | null;
  filters?: PhotoFiltersInput | null;
  sort?: (string | null)[] | null;
}
