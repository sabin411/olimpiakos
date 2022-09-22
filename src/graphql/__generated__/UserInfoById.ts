/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: UserInfoById
// ====================================================

export interface UserInfoById_userInformation_data_attributes_profilePic_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface UserInfoById_userInformation_data_attributes_profilePic_data {
  __typename: "UploadFileEntity";
  attributes: UserInfoById_userInformation_data_attributes_profilePic_data_attributes | null;
}

export interface UserInfoById_userInformation_data_attributes_profilePic {
  __typename: "UploadFileEntityResponse";
  data: UserInfoById_userInformation_data_attributes_profilePic_data | null;
}

export interface UserInfoById_userInformation_data_attributes_users_permissions_user_data_attributes {
  __typename: "UsersPermissionsUser";
  email: string;
  username: string;
}

export interface UserInfoById_userInformation_data_attributes_users_permissions_user_data {
  __typename: "UsersPermissionsUserEntity";
  id: string | null;
  attributes: UserInfoById_userInformation_data_attributes_users_permissions_user_data_attributes | null;
}

export interface UserInfoById_userInformation_data_attributes_users_permissions_user {
  __typename: "UsersPermissionsUserEntityResponse";
  data: UserInfoById_userInformation_data_attributes_users_permissions_user_data | null;
}

export interface UserInfoById_userInformation_data_attributes {
  __typename: "UserInformation";
  fullName: string;
  profilePic: UserInfoById_userInformation_data_attributes_profilePic;
  users_permissions_user: UserInfoById_userInformation_data_attributes_users_permissions_user | null;
}

export interface UserInfoById_userInformation_data {
  __typename: "UserInformationEntity";
  id: string | null;
  attributes: UserInfoById_userInformation_data_attributes | null;
}

export interface UserInfoById_userInformation {
  __typename: "UserInformationEntityResponse";
  data: UserInfoById_userInformation_data | null;
}

export interface UserInfoById {
  userInformation: UserInfoById_userInformation | null;
}

export interface UserInfoByIdVariables {
  userInformationId?: string | null;
}
