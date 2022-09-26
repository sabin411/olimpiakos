/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PublicationState } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: UpcomingEvent
// ====================================================

export interface UpcomingEvent_upcommingEvent_data_attributes_imageUrl_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface UpcomingEvent_upcommingEvent_data_attributes_imageUrl_data {
  __typename: "UploadFileEntity";
  id: string | null;
  attributes: UpcomingEvent_upcommingEvent_data_attributes_imageUrl_data_attributes | null;
}

export interface UpcomingEvent_upcommingEvent_data_attributes_imageUrl {
  __typename: "UploadFileEntityResponse";
  data: UpcomingEvent_upcommingEvent_data_attributes_imageUrl_data | null;
}

export interface UpcomingEvent_upcommingEvent_data_attributes {
  __typename: "UpcommingEvent";
  text: string | null;
  subText: string | null;
  title: string | null;
  Date: any;
  imageUrl: UpcomingEvent_upcommingEvent_data_attributes_imageUrl;
  createdAt: any | null;
}

export interface UpcomingEvent_upcommingEvent_data {
  __typename: "UpcommingEventEntity";
  id: string | null;
  attributes: UpcomingEvent_upcommingEvent_data_attributes | null;
}

export interface UpcomingEvent_upcommingEvent {
  __typename: "UpcommingEventEntityResponse";
  data: UpcomingEvent_upcommingEvent_data | null;
}

export interface UpcomingEvent {
  upcommingEvent: UpcomingEvent_upcommingEvent | null;
}

export interface UpcomingEventVariables {
  publicationState?: PublicationState | null;
}
