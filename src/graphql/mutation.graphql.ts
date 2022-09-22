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
  mutation Mutation($data: ReportInput!) {
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
