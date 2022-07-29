import React from "react";
import { useQuery } from "@apollo/react-hooks";

import Button from "./Atoms/Button";
import Typography from "./Atoms/Typography";
import FlexWrapper from "./Atoms/FlexWrapper";
import { LOAD_TOPIC_STARGAZERS } from "./Graphql/Queries";
import StarsCountDisplay from "./StarsCountDisplay";

import RepositoryIcon from "./Images/RepositoryIcon";

const TopicDetails = ({ activeTopicName, onTopicNameClick }) => {
  const { error, data, loading, refetch } = useQuery(LOAD_TOPIC_STARGAZERS, {
    variables: { name: activeTopicName },
    fetchPolicy: "no-cache"
  });

  console.log({ data });

  if (error) {
    return (
      <FlexWrapper flexDirection="column" gap="16px">
        <Typography
          text="Something went wrong"
          fontSize="16px"
          fontWeight="400"
        />
        <Button
          buttonText="Retry"
          onButtonClick={() => refetch({ name: activeTopicName })}
          height="auto"
          width="auto"
          style={{ padding: "4px 8px", fontSize: "14px", fontWeight: 400 }}
        />
      </FlexWrapper>
    );
  }

  if (loading) {
    return (
      <FlexWrapper height="200px">
        <Typography text="Loading..." fontSize="16px" fontWeight="400" />
      </FlexWrapper>
    );
  }

  if (data == null || data?.topic?.relatedTopics?.length == 0) {
    return (
      <FlexWrapper flexDirection="column" gap="8px">
        <FlexWrapper height="60px">
          <Typography text="No data present" fontSize="16px" fontWeight="400" />
        </FlexWrapper>
        <Button
          buttonText="Try React"
          width="fit-content"
          style={{
            background: "transparent",
            padding: "4px 8px",
            borderRadius: "4px",
            border: "1px solid #d0d7de",
            color: "#0969da",
            textTransform: "capitalize",
            fontSize: "16px",
            fontWeight: 500
          }}
          onButtonClick={() => onTopicNameClick("react")}
        />
      </FlexWrapper>
    );
  }

  return (
    <FlexWrapper
      flexDirection="column"
      gap="12px"
      width="100%"
      style={{ padding: "0 20px" }}
    >
      {data.topic.relatedTopics.map((each) => {
        return (
          <FlexWrapper
            key={each.name}
            justifyContent="space-between"
            height="auto"
            style={{
              background: "#f6f8fa",
              borderRadius: "4px",
              border: "1px solid #d0d7de",
              padding: "16px",
              width: "100%",
              maxWidth: "360px"
            }}
          >
            <FlexWrapper flexDirection="row" gap="4px" width="fit-content">
              <RepositoryIcon />
              <Button
                buttonText={each.name}
                width="fit-content"
                style={{
                  background: "transparent",
                  border: "none",
                  color: "#0969da",
                  textTransform: "capitalize",
                  fontSize: "16px",
                  fontWeight: 500
                }}
                onButtonClick={() => onTopicNameClick(each.name)}
              />
            </FlexWrapper>

            <StarsCountDisplay starsCount={each.stargazers.totalCount} />
          </FlexWrapper>
        );
      })}
    </FlexWrapper>
  );
};

export default TopicDetails;
