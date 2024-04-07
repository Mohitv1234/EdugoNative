import { View, Text, YStack, H4, XStack, Paragraph, Avatar, H5, ScrollView } from "tamagui";
import React from "react";
import { Separator } from "tamagui";

const Page = () => {
  return (
    <ScrollView padding={10}>
      <YStack gap={10}>
      <View borderRadius={10} backgroundColor={"#ffff"} padding={10}>
          <XStack alignItems="center" justifyContent="space-between">
            <H4 fontSize={15}>Reson</H4>
            <H4 fontSize={13}>23/04/2024- Half day</H4>
            </XStack>
          <YStack>
            <Paragraph>
              Respected Sir/Ma'am, I request you to grant me leave for one day
              as i am going to home for submitting documents and scholarship
              form to my college
            </Paragraph>
           
          </YStack>
      </View>


      </YStack>
    </ScrollView>
  );
};

export default Page;
