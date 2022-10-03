/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { VideoInput } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateVideoUserInteraction
// ====================================================

export interface UpdateVideoUserInteraction_updateVideo_data {
  __typename: "VideoEntity";
  id: string | null;
}

export interface UpdateVideoUserInteraction_updateVideo {
  __typename: "VideoEntityResponse";
  data: UpdateVideoUserInteraction_updateVideo_data | null;
}

export interface UpdateVideoUserInteraction {
  updateVideo: UpdateVideoUserInteraction_updateVideo | null;
}

export interface UpdateVideoUserInteractionVariables {
  updateVideoId: string;
  data: VideoInput;
}
