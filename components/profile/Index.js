import React, { useState } from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { EditProfile } from "../helper/EditProfile";
import { PullDown } from "../pull-down/PullDown";
import { CradWrapper } from "./CradWrapper";
import { JarHeading } from "./JarHeading";
import { ProfileEdit } from "./ProfileEdit";
import { ProfileHeader } from "./ProfileHeader";
import { ProfileInfo } from "./ProfileInfo";

export const Index = () => {
  const [clickEditProfile, setclickEditProfile] = useState(false);
  return (
    <View>
      <PullDown clicked={clickEditProfile}>
        <EditProfile />
      </PullDown>
      <ScrollView>
        <ProfileHeader />
        <ProfileInfo />
        <ProfileEdit setclickEditProfile={setclickEditProfile} />
        <JarHeading />
        <CradWrapper />
      </ScrollView>
    </View>
  );
};
