/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ReportInput } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: CreateReport
// ====================================================

export interface CreateReport_createReport_data_attributes_video_data {
  __typename: "VideoEntity";
  id: string | null;
}

export interface CreateReport_createReport_data_attributes_video {
  __typename: "VideoEntityResponse";
  data: CreateReport_createReport_data_attributes_video_data | null;
}

export interface CreateReport_createReport_data_attributes_User_data {
  __typename: "UsersPermissionsUserEntity";
  id: string | null;
}

export interface CreateReport_createReport_data_attributes_User {
  __typename: "UsersPermissionsUserEntityResponse";
  data: CreateReport_createReport_data_attributes_User_data | null;
}

export interface CreateReport_createReport_data_attributes {
  __typename: "Report";
  message: string;
  video: CreateReport_createReport_data_attributes_video | null;
  User: CreateReport_createReport_data_attributes_User | null;
}

export interface CreateReport_createReport_data {
  __typename: "ReportEntity";
  id: string | null;
  attributes: CreateReport_createReport_data_attributes | null;
}

export interface CreateReport_createReport {
  __typename: "ReportEntityResponse";
  data: CreateReport_createReport_data | null;
}

export interface CreateReport {
  createReport: CreateReport_createReport | null;
}

export interface CreateReportVariables {
  data: ReportInput;
}
