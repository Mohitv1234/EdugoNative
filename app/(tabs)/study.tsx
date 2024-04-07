import {
  View,
  Text,
  Tabs,
  SizableText,
  H5,
  XStack,
  Image,
  YStack,
  H4,
  ScrollView,
  Paragraph,
  Button,
} from "tamagui";
import React from "react";

const study = () => {
  return (
    <Tabs
      defaultValue="tab1"
      orientation="horizontal"
      flexDirection="column"
      width={"100%"}
      // height={150}
      borderRadius="$4"
      // borderWidth="$0.25"
      overflow="hidden"
      // borderColor="$borderColor"
    >
      <Tabs.List
        // separator={<Separator vertical />}
        disablePassBorderRadius="bottom"
        aria-label="Manage your account"
      >
        <Tabs.Tab flex={1} value="tab1">
          <SizableText fontFamily="$body">Study Material</SizableText>
        </Tabs.Tab>
        <Tabs.Tab flex={1} value="tab2">
          <SizableText fontFamily="$body">Classes</SizableText>
        </Tabs.Tab>
      </Tabs.List>
      {/* <Separator /> */}
      <Tabs.Content value="tab1">
        <ScrollView padding={10} height={'92.7%'}>
          <YStack gap={10}>
          <View borderRadius={10} backgroundColor={'#fff'}>
          <H4 paddingHorizontal={10}>Books</H4>
        <StudyContainer />
          </View>

          <View borderRadius={10} backgroundColor={'#fff'}>
          <H4 paddingHorizontal={10}>Videos</H4>
        <StudyContainer />
          </View>
          <View borderRadius={10} backgroundColor={'#fff'}>
          <H4 paddingHorizontal={10}>Pdfs</H4>
        <StudyContainer />
          </View>
          </YStack>
        </ScrollView>
      </Tabs.Content>

      <Tabs.Content value="tab2">
        <ScrollView padding={10}>
        <H4 marginVertical={10}>Classes</H4>
        <ClassContainer />
        </ScrollView>
      </Tabs.Content>
    </Tabs>
  );
};

export default study;


function ClassContainer(){
  return (
    <View backgroundColor={'#fff'} padding={10} borderRadius={10}>
      <Image source={{uri:'https://plus.unsplash.com/premium_photo-1710294630215-07ff290fecb3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}} width={'100%'} height={200}></Image>
      <Paragraph>Teacher: <Text>Dipika Meena</Text></Paragraph>
      <Paragraph>Subject: <Text>Science</Text></Paragraph>
      <Paragraph>Date: <Text>12/04/2024</Text></Paragraph>
      <Paragraph>Time: <Text>12:30 to 01:30</Text></Paragraph>
      <Button backgroundColor={"$green5"}>Join Now</Button>
    </View>
  )}


function StudyContainer() {
  return (
    <ScrollView horizontal={true} padding={10}>
      <XStack gap={10}  paddingRight={20}>
        <YStack alignItems="center" width={150} height={180} >
          <Image
            source={{
              uri: 'https://picsum.photos/200/300',
              width: '100%',
              height: 180,
            }}  
            borderRadius={10}
          />
          <Button backgroundColor={'$green5'}  bottom={6}  zIndex={99} position="absolute" width={"90%"} fontSize={12}>Click Here</Button>
        </YStack>
        <YStack alignItems="center" width={150} height={180} >
          <Image
            source={{
              uri: 'https://picsum.photos/200/300',
              width: '100%',
              height: 180,
            }}  
            borderRadius={10}
          />
          <Button backgroundColor={'$green5'}  bottom={6}  zIndex={99} position="absolute" width={"90%"} fontSize={12}>Click Here</Button>
        </YStack>
        <YStack alignItems="center" width={150} height={180} >
          <Image
            source={{
              uri: 'https://picsum.photos/200/300',
              width: '100%',
              height: 180,
            }}  
            borderRadius={10}
          />
          <Button backgroundColor={'$green5'}  bottom={6}  zIndex={99} position="absolute" width={"90%"} fontSize={12}>Click Here</Button>
        </YStack>
        <YStack alignItems="center" width={150} height={180} >
          <Image
            source={{
              uri: 'https://picsum.photos/200/300',
              width: '100%',
              height: 180,
            }}  
            borderRadius={10}
          />
          <Button backgroundColor={'$green5'}  bottom={6}  zIndex={99} position="absolute" width={"90%"} fontSize={12}>Click Here</Button>
        </YStack>
        <YStack alignItems="center" width={150} height={180} >
          <Image
            source={{
              uri: 'https://picsum.photos/200/300',
              width: '100%',
              height: 180,
            }}  
            borderRadius={10}
          />
          <Button backgroundColor={'$green5'}  bottom={6}  zIndex={99} position="absolute" width={"90%"} fontSize={12}>Click Here</Button>
        </YStack>
      </XStack>
    </ScrollView>
  );
}
