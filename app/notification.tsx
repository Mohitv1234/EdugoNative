import {
  View,
  Text,
  ScrollView,
  YStack,
  XStack,
  Avatar,
  H4,
  Paragraph,
} from "tamagui";
import React from "react";
import { Book } from "@tamagui/lucide-icons";

const notification = () => {
  return (
    <ScrollView>
      <YStack gap={10} padding={10}>
        <XStack gap={10} borderRadius={10} backgroundColor={'#fff'} padding={10}>
          <View>
            <Avatar circular size="$6">
              <Avatar.Image src="http://picsum.photos/200/300" />
              <Avatar.Fallback bc="red" />
            </Avatar>
            <Avatar
              position="absolute"
              zIndex={9999}
              right={-7}
              bottom={-7}
              circular
              size="$3"
              backgroundColor={"$blue6"}
            >
              <Book />
            </Avatar>
          </View>
          <View>
            <H4  width={"85%"} lineHeight={17} fontSize={14}>Priyank Sahu has Share a Book With You</H4>
            <Paragraph color={'$gray8'}>4 Hours ago</Paragraph>
          </View>
        </XStack>
      </YStack>
    </ScrollView>
  );
};

export default notification;
