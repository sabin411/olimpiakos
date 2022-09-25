// PACKAGES
import { gql } from '@apollo/client';

// 1. Registration process starts with creating user and creating userInfo very important
export const CREATE_USER = gql`
  mutation Registration($input: UsersPermissionsRegisterInput!) {
    register(input: $input) {
      jwt
      user {
        id
        username
        email
      }
    }
  }
`;
// 1.1. creation user information // ! very important

export const CREATE_USER_INFO = gql`
  mutation CreateUserInformation($data: UserInformationInput!) {
    createUserInformation(data: $data) {
      data {
        id
        attributes {
          fullName
          Country
          phoneNumber
          isOnline
          createdAt
          users_permissions_user {
            data {
              id
              attributes {
                email
                username
              }
            }
          }
          profilePic {
            data {
              id
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

// 2. Login process
export const LOGIN = gql`
  mutation Login($input: UsersPermissionsLoginInput!) {
    login(input: $input) {
      jwt
      user {
        id
        username
        email
        confirmed
      }
    }
  }
`;

// 3. Create comments
export const CREATE_COMMENT = gql`
  mutation CreateComment($data: CommentInput!) {
    createComment(data: $data) {
      data {
        id
        attributes {
          comment
        }
      }
    }
  }
`;

// 4. Create report
export const CREATE_REPORT = gql`
  mutation CreateReport($data: ReportInput!) {
    createReport(data: $data) {
      data {
        id
        attributes {
          message
          video {
            data {
              id
            }
          }
          User {
            data {
              id
            }
          }
        }
      }
    }
  }
`;

// 4. mutate video
export const UPDATE_VIDEO = gql`
  mutation UpdateVideoUserInteraction($updateVideoId: ID!, $data: VideoInput!) {
    updateVideo(id: $updateVideoId, data: $data) {
      data {
        id
      }
    }
  }
`;

// 5. Update user permission
export const UPDATE_USER_PERMISSION = gql`
  mutation UpdateUserPermission(
    $updateUsersPermissionsUserId: ID!
    $data: UsersPermissionsUserInput!
  ) {
    updateUsersPermissionsUser(id: $updateUsersPermissionsUserId, data: $data) {
      data {
        id
        attributes {
          username
          email
        }
      }
    }
  }
`;

// 6. Update user information
export const UPDATE_USER_INFORMATION = gql`
  mutation UpdateUserInfo(
    $updateUserInformationId: ID!
    $data: UserInformationInput!
  ) {
    updateUserInformation(id: $updateUserInformationId, data: $data) {
      data {
        id
        attributes {
          fullName
          Country
          phoneNumber
          profilePic {
            data {
              attributes {
                url
              }
            }
          }
          users_permissions_user {
            data {
              id
            }
          }
        }
      }
    }
  }
`;

// 7. Change password
export const CHANGE_PASSWORD = gql`
  mutation ChangePassword(
    $currentPassword: String!
    $password: String!
    $passwordConfirmation: String!
  ) {
    changePassword(
      currentPassword: $currentPassword
      password: $password
      passwordConfirmation: $passwordConfirmation
    ) {
      jwt
      user {
        username
        email
      }
    }
  }
`;
