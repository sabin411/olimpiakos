import { gql } from '@apollo/client';

export const GET_ALL_VIDEOS = gql`
  query Videos {
    videos {
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
        }
      }
    }
  }
`;

export const GET_LATEST_VIDEOS = gql`
  query LatestVideos($pagination: PaginationArg, $sort: [String]) {
    videos(pagination: $pagination, sort: $sort) {
      data {
        id
        attributes {
          embedId
          title
          description
          likedBy {
            data {
              id
            }
          }
          thumbnail {
            data {
              attributes {
                url
              }
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
`;

export const GET_ALL_NEWS = gql`
  query AllNews($sort: [String]) {
    allNews(sort: $sort) {
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

export const GET_LIMITED_NEWS = gql`
  query LimitedNews(
    $pagination: PaginationArg
    $filters: NewsFiltersInput
    $sort: [String]
  ) {
    allNews(pagination: $pagination, filters: $filters, sort: $sort) {
      meta {
        pagination {
          total
          page
          pageSize
          pageCount
        }
      }
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

export const GET_ALL_PHOTOS = gql`
  query Photos($pagination: PaginationArg) {
    photos(pagination: $pagination) {
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

export const GET_LIMITED_PHOTOS = gql`
  query LimitedPhotos(
    $filters: PhotoFiltersInput
    $pagination: PaginationArg
    $sort: [String]
  ) {
    photos(filters: $filters, pagination: $pagination, sort: $sort) {
      data {
        id
        attributes {
          imageUrl
          title
          description
          publishedAt
        }
      }
    }
  }
`;

export const GET_COMMENTS = gql`
  query Comments($filters: CommentFiltersInput) {
    comments(filters: $filters) {
      data {
        id
        attributes {
          comment
          user {
            data {
              attributes {
                email
              }
            }
          }
        }
      }
    }
  }
`;

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

export const VIDEO_BY_CATEGORY = gql`
  query VideoByCategory($filters: VideoFiltersInput) {
    videos(filters: $filters) {
      data {
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
          viewedBy {
            data {
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
        }
      }
    }
  }
`;

export const GET_VIDEO_BY_ID = gql`
  query VideoById($videoId: ID) {
    video(id: $videoId) {
      data {
        id
        attributes {
          embedId
          title
          description
          likedBy {
            data {
              attributes {
                email
              }
            }
          }
          dislikedBy {
            data {
              attributes {
                email
              }
            }
          }
          comments {
            data {
              id
              attributes {
                publishedAt
                comment
                user {
                  data {
                    attributes {
                      email
                      name
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
          viewedBy {
            data {
              attributes {
                email
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
