// import { Tabs } from 'expo-router'
import QRCode  from 'react-native-qrcode-svg'
import { View,Tabs, Text, ScrollView, SizableText, H4, Avatar, Paragraph, XStack } from 'tamagui'

const profile = () => {
  return (
    <ScrollView>
          <Tabs
      defaultValue="tab1"
      orientation="horizontal"
      flexDirection="column"
      width={"100%"}
      height={"100%"}
      borderRadius="$4"
      
    >
      <Tabs.List
        // separator={<Separator paddingVertical />}
        // disablePassBorderRadius="bottom"
        borderBottomColor={'$green10'}
        
        aria-label="Manage your account"
      >
        <Tabs.Tab flex={1} value="tab1">
          <SizableText fontFamily="$body">Genral</SizableText>
        </Tabs.Tab>
        <Tabs.Tab flex={1} value="tab2" >
          <SizableText fontFamily="$body">Adminsion</SizableText>
        </Tabs.Tab>
        <Tabs.Tab flex={1} value="tab3" >
          <SizableText fontFamily="$body">QR Code</SizableText>
        </Tabs.Tab>
      </Tabs.List>
      {/* <Separator /> */}
      <Tabs.Content value="tab1" height={'100%'}>
        <ScrollView width={'100%'} height={'100%'} padding={10}  nestedScrollEnabled>
        <GenralDetails/>

        </ScrollView>
      </Tabs.Content>

      <Tabs.Content value="tab2">
        <AdmisionDetails/>
      </Tabs.Content>

      <Tabs.Content value="tab3">
        <View alignItems='center' backgroundColor={'#fff'} height={600} gap={15} display='flex' justifyContent='center' width={"100%"}>
       <QRCode  value="Just some string value" size={220}/>
          <Paragraph color={'$gray9'} width={'75%'}>Go to Scanner and Scan Your QR code for Attendance</Paragraph>

        </View>
      </Tabs.Content>
    </Tabs>
    </ScrollView>
  )
}

export default profile








function GenralDetails(){
  return (
    <View>
      <View marginTop={100} alignItems='center' borderRadius={10} backgroundColor={'#fff'}>
      <Avatar marginTop={-80} circular size="$12">
    <Avatar.Image src="http://picsum.photos/200/300" />
    <Avatar.Fallback bc="red" />
  </Avatar>
  <NameLabel name={'Name'} value={'Mohit Vishwakarma'}/>
  <NameLabel name={"Father's Name"} value={'Sitaram Vishwakarma'}/>
  <NameLabel name={'Aadhaar Number'} value={'338947643767'}/>
  <NameLabel name={'Birth Date'} value={'01 Nov 2002'}/>
  <NameLabel name={'Gender'} value={'Male'}/>
  <NameLabel name={'Contact Number'} value={'9589646969'}/>
  <NameLabel name={'Attendance Type'} value={'Card'}/>
  <NameLabel name={'Organization Type'} value={'Kamal Deep Public School'}/>
      </View>

    </View>
  )
}


function NameLabel({name, value}){
  return (
    <XStack width={'100%'} padding={10}>
  <Paragraph width={'45%'} fontSize={13}>{name}  :</Paragraph>
  {name==='Name'?
  <H4 width={'50%'} fontSize={13}>{value}</H4>
  : <Paragraph width={'55%'} fontSize={13}>{value}</Paragraph>
  }
  </XStack>
  )
}


function AdmisionDetails(){
  return (
    <View padding={10}>
    <View backgroundColor={"#fff"} padding={10} borderRadius={10}>
      <H4 textAlign='center'>Admision Details</H4>
      <NameLabel name={'Adminsion Date'} value={'01 Jan 2024'}/>      
      <NameLabel name={'Course Deuration'} value={'1'}/>
      <NameLabel name={'Course End Date'} value={'01 Jan 2024'}/>      

    </View>
    </View>
  )
}