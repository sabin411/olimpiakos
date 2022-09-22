/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UserInformationFiltersInput } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: UserInfo
// ====================================================

export interface UserInfo_userInformations_data_attributes_users_permissions_user_data_attributes {
  __typename: "UsersPermissionsUser";
  email: string;
}

export interface UserInfo_userInformations_data_attributes_users_permissions_user_data {
  __typename: "UsersPermissionsUserEntity";
  attributes: UserInfo_userInformations_data_attributes_users_permissions_user_data_attributes | null;
}

export interface UserInfo_userInformations_data_attributes_users_permissions_user {
  __typename: "UsersPermissionsUserEntityResponse";
  data: UserInfo_userInformations_data_attributes_users_permissions_user_data | null;
}

export interface UserInfo_userInformations_data_attributes_profilePic_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface UserInfo_userInformations_data_attributes_profilePic_data {
  __typename: "UploadFileEntity";
  attributes: UserInfo_userInformations_data_attributes_profilePic_data_attributes | null;
}

export interface UserInfo_userInformations_data_attributes_profilePic {
  __typename: "UploadFileEntityResponse";
  data: UserInfo_userInformations_data_attributes_profilePic_data | null;
}

export interface UserInfo_userInformations_data_attributes {
  __typename: "UserInformation";
  fullName: string;
  users_permissions_user: UserInfo_userInformations_data_attributes_users_permissions_user | null;
  profilePic: UserInfo_userInformations_data_attributes_profilePic;
}

export interface UserInfo_userInformations_data {
  __typename: "UserInformationEntity";
  id: string | null;
  attributes: UserInfo_userInformations_data_attributes | null;
}

export interface UserInfo_userInformations {
  __typename: "UserInformationEntityResponseCollection";
  data: UserInfo_userInformations_data[];
}

export interface UserInfo {
  userInformations: UserInfo_userInformations | null;
}

export interface UserInfoVariables {
  filters?: UserInformationFiltersInput | null;
}
