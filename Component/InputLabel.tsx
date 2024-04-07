import { View, Text } from 'react-native'
import React from 'react'
import { Paragraph, XStack, YStack } from 'tamagui'
import { DatePick } from './Datepicker'

const InputLabel = ({title, children}) => {
  return (
    <YStack  gap={10}>
    <Paragraph width={'100%'} >{title}</Paragraph>
    {children}
  </YStack>

  )
}

export default InputLabel