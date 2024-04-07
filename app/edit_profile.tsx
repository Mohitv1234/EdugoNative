import React from 'react'
import { H4, ScrollView,View, Text, Input, YStack, XStack } from 'tamagui'
import InputLabel from '../Component/InputLabel'

const Page = () => {
  return (
    <ScrollView padding={10}>
    <View backgroundColor={'#fff'} borderRadius={10} padding={10}>
      <H4 textAlign='center'>Update Profile</H4>
      <InputWithLabel title='Name'/>
      <InputWithLabel title="Father's name"/>
    </View>
    </ScrollView>
  )
}

export default Page


function InputWithLabel({title}){
  return(
    <InputLabel title={title}>
      <Input flex={1}   placeholder={`Enter Your ${title}`} />
      </InputLabel>
  )
}


