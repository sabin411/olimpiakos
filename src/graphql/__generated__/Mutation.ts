/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UsersPermissionsUserInput } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: Mutation
// ====================================================

export interface Mutation_updateUsersPermissionsUser_data_attributes {
  __typename: "UsersPermissionsUser";
  username: string;
  email: string;
}

export interface Mutation_updateUsersPermissionsUser_data {
  __typename: "UsersPermissionsUserEntity";
  id: string | null;
  attributes: Mutation_updateUsersPermissionsUser_data_attributes | null;
}

export interface Mutation_updateUsersPermissionsUser {
  __typename: "UsersPermissionsUserEntityResponse";
  data: Mutation_updateUsersPermissionsUser_data | null;
}

export interface Mutation {
  /**
   * Update an existing user
   */
  updateUsersPermissionsUser: Mutation_updateUsersPermissionsUser;
}

export interface MutationVariables {
  updateUsersPermissionsUserId: string;
  data: UsersPermissionsUserInput;
}
