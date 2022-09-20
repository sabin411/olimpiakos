/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PhotoFiltersInput, PaginationArg } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: LimitedPhotos
// ====================================================

export interface LimitedPhotos_photos_data_attributes {
  __typename: "Photo";
  imageUrl: string | null;
  title: string;
  description: string;
  publishedAt: any | null;
}

export interface LimitedPhotos_photos_data {
  __typename: "PhotoEntity";
  id: string | null;
  attributes: LimitedPhotos_photos_data_attributes | null;
}

export interface LimitedPhotos_photos {
  __typename: "PhotoEntityResponseCollection";
  data: LimitedPhotos_photos_data[];
}

export interface LimitedPhotos {
  photos: LimitedPhotos_photos | null;
}

export interface LimitedPhotosVariables {
  filters?: PhotoFiltersInput | null;
  pagination?: PaginationArg | null;
  sort?: (string | null)[] | null;
}
