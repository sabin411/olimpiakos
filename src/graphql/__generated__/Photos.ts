/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Photos
// ====================================================

export interface Photos_photos_data_attributes {
  __typename: "Photo";
  imageUrl: string | null;
  title: string;
  description: string;
  createdAt: any | null;
}

export interface Photos_photos_data {
  __typename: "PhotoEntity";
  attributes: Photos_photos_data_attributes | null;
}

export interface Photos_photos {
  __typename: "PhotoEntityResponseCollection";
  data: Photos_photos_data[];
}

export interface Photos {
  photos: Photos_photos | null;
}
