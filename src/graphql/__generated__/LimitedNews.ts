/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PaginationArg, NewsFiltersInput } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: LimitedNews
// ====================================================

export interface LimitedNews_allNews_meta_pagination {
  __typename: "Pagination";
  total: number;
  page: number;
  pageSize: number;
  pageCount: number;
}

export interface LimitedNews_allNews_meta {
  __typename: "ResponseCollectionMeta";
  pagination: LimitedNews_allNews_meta_pagination;
}

export interface LimitedNews_allNews_data_attributes {
  __typename: "News";
  title: string;
  imageUrl: string;
  description: string | null;
  createdAt: any | null;
}

export interface LimitedNews_allNews_data {
  __typename: "NewsEntity";
  id: string | null;
  attributes: LimitedNews_allNews_data_attributes | null;
}

export interface LimitedNews_allNews {
  __typename: "NewsEntityResponseCollection";
  meta: LimitedNews_allNews_meta;
  data: LimitedNews_allNews_data[];
}

export interface LimitedNews {
  allNews: LimitedNews_allNews | null;
}

export interface LimitedNewsVariables {
  pagination?: PaginationArg | null;
  filters?: NewsFiltersInput | null;
  sort?: (string | null)[] | null;
}
