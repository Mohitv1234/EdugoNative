import React from 'react'
import { H4,ScrollView,Text,View, XStack, YStack } from 'tamagui'
import Linechart from '../Component/Linechart'

const Page = () => {
  return (
    <ScrollView padding={10} marginBottom={10} >
    <View backgroundColor={'#fff'} borderRadius={10}>
      <H4 textAlign='center' padding={10}>My Progess Graph</H4>
      <Linechart/>
    </View>
    <View backgroundColor={'#fff'} padding={10} paddingBottom={20} marginTop={10} borderRadius={10}>
    <H4 textAlign='center' padding={10}>Weakly Mark</H4>
    <TableProgress />
    </View>

    </ScrollView>
  )
}

export default Page




function TableProgress(){
  return(
    <ScrollView horizontal={true} nestedScrollEnabled>

    <XStack>
      <YStack gap={5}  >
        <Text textAlign='center' padding={10} backgroundColor={'$gray7'} fontSize={13} >Weak</Text>
        <Text textAlign='center' padding={10} backgroundColor={'$gray7'} fontSize={13} >Home Work</Text>
        <Text textAlign='center' padding={10} backgroundColor={'$gray7'} fontSize={13} >Communication</Text>
        <Text textAlign='center' padding={10} backgroundColor={'$gray7'} fontSize={13} >Learning</Text>
        <Text textAlign='center' padding={10} backgroundColor={'$gray7'} fontSize={13} >Discipline</Text>
        <Text textAlign='center' padding={10} backgroundColor={'$gray7'} fontSize={13} >Average</Text>
      </YStack>
      
      <YStack gap={5}>
        <Text textAlign='center' padding={10} fontSize={13} width={80}>Second</Text>
        <Text textAlign='center' padding={10} fontSize={13} width={80}>8</Text>
        <Text textAlign='center' padding={10} fontSize={13} width={80}>6</Text>
        <Text textAlign='center' padding={10} fontSize={13} width={80}>9</Text>
        <Text textAlign='center' padding={10} fontSize={13} width={80}>8</Text>
        <Text textAlign='center' padding={10} fontSize={13} width={80}>8</Text>
      </YStack>
      
      <YStack gap={5}>
        <Text textAlign='center' padding={10} fontSize={13} width={80}>Second</Text>
        <Text textAlign='center' padding={10} fontSize={13} width={80}>8</Text>
        <Text textAlign='center' padding={10} fontSize={13} width={80}>6</Text>
        <Text textAlign='center' padding={10} fontSize={13} width={80}>9</Text>
        <Text textAlign='center' padding={10} fontSize={13} width={80}>8</Text>
        <Text textAlign='center' padding={10} fontSize={13} width={80}>8</Text>
      </YStack>

    </XStack>
    </ScrollView>
  )
}