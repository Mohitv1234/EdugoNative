import { Link, Tabs, useRouter } from "expo-router";
import { Pressable } from "react-native";
import { Text, XStack } from "tamagui";
import * as SecureStore from "expo-secure-store";
import {
  BellRing,
  ArrowRight,
  Home,
  CalendarCheck2,
  BookOpen,
  UserRound,
  ArrowLeft,
  Settings,
  Edit3,
  TrendingUp,
} from "@tamagui/lucide-icons";
import { useEffect } from "react";

export default function TabLayout() {
  const router = useRouter();

  useEffect(() => {
    SecureStore.getItemAsync("token").then((token) => {
      if (!token) {
        router.replace("/login");
      }
    });
  });
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "green",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Dashboard",
          tabBarIcon: ({ color }) => <Home color={color} />,

          headerRight: () => (
            <Link href="/notification" asChild>
              <Pressable style={{ position: "relative" }}>
                <BellRing paddingRight={60} />
                <Text
                  position="absolute"
                  top={-10}
                  right={8}
                  backgroundColor={"$green8"}
                  color={"white"}
                  paddingHorizontal={5}
                  paddingVertical={3}
                  borderRadius={50}
                  fontSize={8}
                >
                  12
                </Text>
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="attendance"
        options={{
          title: "Attendance",
          headerLeft: () => (
            <ArrowLeft
              marginLeft={15}
              onPress={() => {
                router.back();
              }}
            />
          ),

          tabBarIcon: ({ color }) => <CalendarCheck2 color={color} />,
          headerRight: ({ color }) => (
            <Text
              color={color}
              paddingRight={10}
              onPress={() => {
                router.navigate("/leavehistory");
              }}
            >
              History
            </Text>
          ),
        }}
      />
      <Tabs.Screen
        name="study"
        options={{
          title: "Study",
          headerLeft: () => (
            <ArrowLeft
              marginLeft={15}
              onPress={() => {
                router.back();
              }}
            />
          ),

          tabBarIcon: ({ color }) => <BookOpen color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerLeft: () => (
            <ArrowLeft
              marginLeft={15}
              onPress={() => {
                router.back();
              }}
            />
          ),

          tabBarIcon: ({ color }) => <UserRound color={color} />,
          headerRight: ({ color }) => (
            <XStack gap={20} marginRight={15}>
              <Pressable>
                <TrendingUp
                  color={color}
                  paddingRight={10}
                  onPress={() => {
                    router.navigate("/my_progess");
                  }}
                />
              </Pressable>
              <Pressable>
                <Edit3
                  color={color}
                  paddingRight={10}
                  onPress={() => {
                    router.navigate("/edit_profile");
                  }}
                />
              </Pressable>
            </XStack>
          ),
        }}
      />
    </Tabs>
  );
}
