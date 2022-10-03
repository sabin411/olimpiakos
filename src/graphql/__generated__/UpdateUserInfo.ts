/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UserInformationInput } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateUserInfo
// ====================================================

export interface UpdateUserInfo_updateUserInformation_data_attributes_profilePic_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface UpdateUserInfo_updateUserInformation_data_attributes_profilePic_data {
  __typename: "UploadFileEntity";
  attributes: UpdateUserInfo_updateUserInformation_data_attributes_profilePic_data_attributes | null;
}

export interface UpdateUserInfo_updateUserInformation_data_attributes_profilePic {
  __typename: "UploadFileEntityResponse";
  data: UpdateUserInfo_updateUserInformation_data_attributes_profilePic_data | null;
}

export interface UpdateUserInfo_updateUserInformation_data_attributes_users_permissions_user_data {
  __typename: "UsersPermissionsUserEntity";
  id: string | null;
}

export interface UpdateUserInfo_updateUserInformation_data_attributes_users_permissions_user {
  __typename: "UsersPermissionsUserEntityResponse";
  data: UpdateUserInfo_updateUserInformation_data_attributes_users_permissions_user_data | null;
}

export interface UpdateUserInfo_updateUserInformation_data_attributes {
  __typename: "UserInformation";
  fullName: string;
  Country: string;
  phoneNumber: any;
  profilePic: UpdateUserInfo_updateUserInformation_data_attributes_profilePic;
  users_permissions_user: UpdateUserInfo_updateUserInformation_data_attributes_users_permissions_user | null;
}

export interface UpdateUserInfo_updateUserInformation_data {
  __typename: "UserInformationEntity";
  id: string | null;
  attributes: UpdateUserInfo_updateUserInformation_data_attributes | null;
}

export interface UpdateUserInfo_updateUserInformation {
  __typename: "UserInformationEntityResponse";
  data: UpdateUserInfo_updateUserInformation_data | null;
}

export interface UpdateUserInfo {
  updateUserInformation: UpdateUserInfo_updateUserInformation | null;
}

export interface UpdateUserInfoVariables {
  updateUserInformationId: string;
  data: UserInformationInput;
}
