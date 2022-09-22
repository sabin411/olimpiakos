/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ReportInput } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: Mutation
// ====================================================

export interface Mutation_createReport_data_attributes_video_data {
  __typename: "VideoEntity";
  id: string | null;
}

export interface Mutation_createReport_data_attributes_video {
  __typename: "VideoEntityResponse";
  data: Mutation_createReport_data_attributes_video_data | null;
}

export interface Mutation_createReport_data_attributes_User_data {
  __typename: "UsersPermissionsUserEntity";
  id: string | null;
}

export interface Mutation_createReport_data_attributes_User {
  __typename: "UsersPermissionsUserEntityResponse";
  data: Mutation_createReport_data_attributes_User_data | null;
}

export interface Mutation_createReport_data_attributes {
  __typename: "Report";
  message: string;
  video: Mutation_createReport_data_attributes_video | null;
  User: Mutation_createReport_data_attributes_User | null;
}

export interface Mutation_createReport_data {
  __typename: "ReportEntity";
  id: string | null;
  attributes: Mutation_createReport_data_attributes | null;
}

export interface Mutation_createReport {
  __typename: "ReportEntityResponse";
  data: Mutation_createReport_data | null;
}

export interface Mutation {
  createReport: Mutation_createReport | null;
}

export interface MutationVariables {
  data: ReportInput;
}
