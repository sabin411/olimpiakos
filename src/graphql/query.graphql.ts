import { gql } from '@apollo/client';

export const GET_ALL_VIDEOS = gql`
  query Videos(
    $pagination: PaginationArg
    $filters: VideoFiltersInput
    $sort: [String]
  ) {
    videos(pagination: $pagination, filters: $filters, sort: $sort) {
      data {
        id
        attributes {
          embedId
          title
          description
          likedBy {
            data {
              id
              attributes {
                email
              }
            }
          }
          thumbnail {
            data {
              attributes {
                url
              }
            }
          }
          category {
            data {
              id
              attributes {
                name
              }
            }
          }
          dislikedBy {
            data {
              id
            }
          }
          viewedBy {
            data {
              id
            }
          }
          comments {
            data {
              id
              attributes {
                comment
                user {
                  data {
                    id
                    attributes {
                      email
                      user_information {
                        data {
                          id
                          attributes {
                            fullName
                          }
                        }
                      }
                    }
                    id
                  }
                }
              }
            }
          }
          duration
          publishedAt
        }
      }
      meta {
        pagination {
          total
          page
          pageSize
          pageCount
        }
      }
    }
  }
`;

// ! deprecated
// export const GET_LATEST_VIDEOS = gql`
//   query LatestVideos($pagination: PaginationArg, $sort: [String]) {
//     videos(pagination: $pagination, sort: $sort) {
//       data {
//         id
//         attributes {
//           embedId
//           title
//           description
//           likedBy {
//             data {
//               id
//             }
//           }
//           thumbnail {
//             data {
//               attributes {
//                 url
//               }
//             }
//           }
//           viewedBy {
//             data {
//               id
//             }
//           }
//           duration
//         }
//       }
//     }
//   }
// `;
// ! deprecated

export const GET_ALL_NEWS = gql`
  query AllNews(
    $sort: [String]
    $filters: NewsFiltersInput
    $pagination: PaginationArg
  ) {
    allNews(sort: $sort, filters: $filters, pagination: $pagination) {
      data {
        id
        attributes {
          title
          imageUrl
          description
          createdAt
        }
      }
    }
  }
`;

// ! deprecated
// export const GET_LIMITED_NEWS = gql`
//   query LimitedNews(
//     $pagination: PaginationArg
//     $filters: NewsFiltersInput
//     $sort: [String]
//   ) {
//     allNews(pagination: $pagination, filters: $filters, sort: $sort) {
//       meta {
//         pagination {
//           total
//           page
//           pageSize
//           pageCount
//         }
//       }
//       data {
//         id
//         attributes {
//           title
//           imageUrl
//           description
//           createdAt
//         }
//       }
//     }
//   }
// `;
// ! deprecated

export const GET_ALL_PHOTOS = gql`
  query Photos(
    $pagination: PaginationArg
    $filters: PhotoFiltersInput
    $sort: [String]
  ) {
    photos(pagination: $pagination, filters: $filters, sort: $sort) {
      data {
        id
        attributes {
          title
          description
          imageUrl
          createdAt
        }
      }
    }
  }
`;

// ! deprecated
// export const GET_LIMITED_PHOTOS = gql`
//   query LimitedPhotos(
//     $filters: PhotoFiltersInput
//     $pagination: PaginationArg
//     $sort: [String]
//   ) {
//     photos(filters: $filters, pagination: $pagination, sort: $sort) {
//       data {
//         id
//         attributes {
//           imageUrl
//           title
//           description
//           publishedAt
//         }
//       }
//     }
//   }
// `;
// ! deprecated

// ! deprecated
// export const GET_COMMENTS = gql`
//   query Comments($filters: CommentFiltersInput) {
//     comments(filters: $filters) {
//       data {
//         id
//         attributes {
//           comment
//           user {
//             data {
//               attributes {
//                 email
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `;
// ! deprecated

export const GET_UPCOMING_EVENTS = gql`
  query UpcomingEvent($publicationState: PublicationState) {
    upcommingEvent(publicationState: $publicationState) {
      data {
        attributes {
          imageUrl
          text
          subText
          title
          Date
        }
      }
    }
  }
`;

// ! deprecated
// export const VIDEO_BY_CATEGORY = gql`
//   query VideoByCategory($filters: VideoFiltersInput) {
//     videos(filters: $filters) {
//       data {
//         attributes {
//           embedId
//           title
//           description
//           likedBy {
//             data {
//               id
//               attributes {
//                 email
//               }
//             }
//           }
//           viewedBy {
//             data {
//               attributes {
//                 email
//               }
//             }
//           }
//           thumbnail {
//             data {
//               attributes {
//                 url
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `;
// ! deprecated

export const GET_VIDEO_BY_ID = gql`
  query VideoById($videoId: ID, $pagination: PaginationArg, $sort: [String]) {
    video(id: $videoId) {
      data {
        id
        attributes {
          embedId
          title
          description
          likedBy {
            data {
              id
              attributes {
                email
                user_information {
                  data {
                    id
                  }
                }
              }
            }
          }
          dislikedBy {
            data {
              id
            }
          }
          viewedBy {
            data {
              id
            }
          }
          publishedAt
          comments(pagination: $pagination, sort: $sort) {
            data {
              id
              attributes {
                comment
                user {
                  data {
                    id
                    attributes {
                      user_information {
                        data {
                          id
                          attributes {
                            fullName
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
                  }
                }
                createdAt
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_FEATURED_EVENTS = gql`
  query FeaturedEvents {
    featuredVideos {
      data {
        attributes {
          videos {
            data {
              id
              attributes {
                embedId
                title
                thumbnail {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                description
                likedBy {
                  data {
                    id
                  }
                }
                viewedBy {
                  data {
                    id
                  }
                }
                duration
              }
            }
          }
        }
      }
    }
  }
`;

export const CREATE_UPLOAD_FILE = gql`
  mutation CreateUploadFile($data: UploadFileInput!) {
    createUploadFile(data: $data) {
      data {
        id
        attributes {
          url
        }
      }
    }
  }
`;

export const GET_USER_INFO = gql`
  query UserInfo($filters: UserInformationFiltersInput) {
    userInformations(filters: $filters) {
      data {
        id
        attributes {
          fullName
          users_permissions_user {
            data {
              attributes {
                email
              }
            }
          }
          profilePic {
            data {
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

export const GET_USER_INFO_BY_ID = gql`
  query UserInfoById($userInformationId: ID) {
    userInformation(id: $userInformationId) {
      data {
        id
        attributes {
          fullName
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
              attributes {
                email
                username
              }
            }
          }
        }
      }
    }
  }
`;
