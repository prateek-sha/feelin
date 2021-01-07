import React from "react";
import { Index } from "../../components/profile/Index";
import { Wrapper } from "../../components/wrapper/Wrapper";

export const Profile = props => {
  return (
    <Wrapper navigation={props.navigation}>
      <Index />
    </Wrapper>
  );
};
