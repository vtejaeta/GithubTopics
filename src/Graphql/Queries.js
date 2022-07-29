import { gql } from "@apollo/client";

export const LOAD_TOPIC_STARGAZERS = gql`
  query get_topic($name: String!) {
    topic(name: $name) {
      relatedTopics {
        id
        name
        stargazers {
          totalCount
        }
      }
    }
  }
`;
