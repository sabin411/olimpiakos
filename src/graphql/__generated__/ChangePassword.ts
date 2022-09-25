/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: ChangePassword
// ====================================================

export interface ChangePassword_changePassword_user {
  __typename: "UsersPermissionsMe";
  username: string;
  email: string | null;
}

export interface ChangePassword_changePassword {
  __typename: "UsersPermissionsLoginPayload";
  jwt: string | null;
  user: ChangePassword_changePassword_user;
}

export interface ChangePassword {
  /**
   * Change user password. Confirm with the current password.
   */
  changePassword: ChangePassword_changePassword | null;
}

export interface ChangePasswordVariables {
  currentPassword: string;
  password: string;
  passwordConfirmation: string;
}
