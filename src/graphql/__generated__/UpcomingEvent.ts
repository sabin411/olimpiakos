/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PublicationState } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: UpcomingEvent
// ====================================================

export interface UpcomingEvent_upcommingEvent_data_attributes {
  __typename: "UpcommingEvent";
  imageUrl: string;
  text: string | null;
  subText: string | null;
  title: string | null;
  Date: any;
}

export interface UpcomingEvent_upcommingEvent_data {
  __typename: "UpcommingEventEntity";
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
