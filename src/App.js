import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import Header from "./Header";
import FlexWrapper from "./Atoms/FlexWrapper";
import TopicDetails from "./TopicDetails";

import "./styles.css";

export default function App() {
  const [activeTerm, setActiveTerm] = React.useState("chrome");

  const httpLink = createHttpLink({
    uri: "https://api.github.com/graphql"
  });

  const authLink = setContext((_, { headers }) => {
    const token = process.env.REACT_APP_GITHUB_API_TOKEN;
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : ""
      }
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  });

  const callbackToSetActiveTerm = (newActiveTerm) => {
    setActiveTerm(newActiveTerm);
  };

  return (
    <ApolloProvider client={client}>
      <FlexWrapper height="100%">
        <FlexWrapper
          flexDirection="column"
          height="100%"
          width="100%"
          justifyContent="normal"
          style={{ padding: "20px 0" }}
        >
          <Header heading={activeTerm} />
          <FlexWrapper margin="16px 0 0" width="100%">
            <TopicDetails
              activeTopicName={activeTerm}
              onTopicNameClick={callbackToSetActiveTerm}
            />
          </FlexWrapper>
        </FlexWrapper>
      </FlexWrapper>
    </ApolloProvider>
  );
}
