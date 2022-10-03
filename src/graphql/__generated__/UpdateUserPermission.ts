/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UsersPermissionsUserInput } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateUserPermission
// ====================================================

export interface UpdateUserPermission_updateUsersPermissionsUser_data_attributes {
  __typename: "UsersPermissionsUser";
  username: string;
  email: string;
}

export interface UpdateUserPermission_updateUsersPermissionsUser_data {
  __typename: "UsersPermissionsUserEntity";
  id: string | null;
  attributes: UpdateUserPermission_updateUsersPermissionsUser_data_attributes | null;
}

export interface UpdateUserPermission_updateUsersPermissionsUser {
  __typename: "UsersPermissionsUserEntityResponse";
  data: UpdateUserPermission_updateUsersPermissionsUser_data | null;
}

export interface UpdateUserPermission {
  /**
   * Update an existing user
   */
  updateUsersPermissionsUser: UpdateUserPermission_updateUsersPermissionsUser;
}

export interface UpdateUserPermissionVariables {
  updateUsersPermissionsUserId: string;
  data: UsersPermissionsUserInput;
}
