import { View, Text, Image, H4, H6, RadioGroup, YStack, Button } from "tamagui";
import { RadioGroupItemWithLabel } from "../Component/RadioGroup";
import { router } from "expo-router";
// import React from 'react'

const index = () => {
  return (
    <View>
      <View
        width={"100%"}
        height={"70%"}
        display="flex"
        justifyContent="center"
      >
        <Image
          source={require("../assets/Learning-bro.png")}
          width="100%"
          height="70%"
        />
      </View>
      <View
        width={"100%"}
        height={"35%"}
        backgroundColor={"#fff"}
        marginTop={"-5%"}
        padding={30}
        borderTopLeftRadius={20}
        borderTopRightRadius={20}
      >
        <H4 textAlign="center">I'm a</H4>
        <RadioGroup
          aria-labelledby="Select one item"
          defaultValue="student"
          name="form"
        >
          <YStack width={300} alignItems="center" space="$2">
            <RadioGroupItemWithLabel
              size="$3"
              value="student"
              label="Student"
            />
            <RadioGroupItemWithLabel
              size="$3"
              value="teacher"
              label="Teacher"
            />
          </YStack>
        </RadioGroup>
        <Button
          backgroundColor={"$green3"}
          marginTop={15}
          onPress={() => {
            router.replace("/(tabs)/attendance");
          }}
        >
          Get Started
        </Button>
      </View>
    </View>
  );
};

export default index;
