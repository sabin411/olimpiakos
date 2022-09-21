/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UsersPermissionsRegisterInput } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: Registration
// ====================================================

export interface Registration_register_user {
  __typename: "UsersPermissionsMe";
  id: string;
  username: string;
  email: string | null;
}

export interface Registration_register {
  __typename: "UsersPermissionsLoginPayload";
  jwt: string | null;
  user: Registration_register_user;
}

export interface Registration {
  /**
   * Register a user
   */
  register: Registration_register;
}

export interface RegistrationVariables {
  input: UsersPermissionsRegisterInput;
}
