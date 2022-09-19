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
  query LatestVideos($sort: [String]) {
    videos(sort: $sort) {
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

export const GET_ALL_PHOTOS = gql`
  query Photos {
    photos {
      data {
        attributes {
          imageUrl
          title
          description
          createdAt
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
