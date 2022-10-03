/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UserInformationInput } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: CreateUserInformation
// ====================================================

export interface CreateUserInformation_createUserInformation_data_attributes_users_permissions_user_data_attributes {
  __typename: "UsersPermissionsUser";
  email: string;
  username: string;
}

export interface CreateUserInformation_createUserInformation_data_attributes_users_permissions_user_data {
  __typename: "UsersPermissionsUserEntity";
  id: string | null;
  attributes: CreateUserInformation_createUserInformation_data_attributes_users_permissions_user_data_attributes | null;
}

export interface CreateUserInformation_createUserInformation_data_attributes_users_permissions_user {
  __typename: "UsersPermissionsUserEntityResponse";
  data: CreateUserInformation_createUserInformation_data_attributes_users_permissions_user_data | null;
}

export interface CreateUserInformation_createUserInformation_data_attributes_profilePic_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface CreateUserInformation_createUserInformation_data_attributes_profilePic_data {
  __typename: "UploadFileEntity";
  id: string | null;
  attributes: CreateUserInformation_createUserInformation_data_attributes_profilePic_data_attributes | null;
}

export interface CreateUserInformation_createUserInformation_data_attributes_profilePic {
  __typename: "UploadFileEntityResponse";
  data: CreateUserInformation_createUserInformation_data_attributes_profilePic_data | null;
}

export interface CreateUserInformation_createUserInformation_data_attributes {
  __typename: "UserInformation";
  fullName: string;
  Country: string;
  phoneNumber: any;
  isOnline: boolean | null;
  createdAt: any | null;
  users_permissions_user: CreateUserInformation_createUserInformation_data_attributes_users_permissions_user | null;
  profilePic: CreateUserInformation_createUserInformation_data_attributes_profilePic;
}

export interface CreateUserInformation_createUserInformation_data {
  __typename: "UserInformationEntity";
  id: string | null;
  attributes: CreateUserInformation_createUserInformation_data_attributes | null;
}

export interface CreateUserInformation_createUserInformation {
  __typename: "UserInformationEntityResponse";
  data: CreateUserInformation_createUserInformation_data | null;
}

export interface CreateUserInformation {
  createUserInformation: CreateUserInformation_createUserInformation | null;
}

export interface CreateUserInformationVariables {
  data: UserInformationInput;
}
