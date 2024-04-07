import { Avatar, Card, H2, H3, H4, H5, Paragraph, ScrollView, Separator, Text, View } from 'tamagui'
import { LineChart, PieChart, StackedBarChart } from "react-native-chart-kit"
import { Dimensions, StyleSheet } from 'react-native'
import Linechart from '../../Component/Linechart';
const screenWidth = Dimensions.get("window").width-40;
export default function TabOneScreen() {
  return (
    <ScrollView maxHeight={"90vh"} flex={1}  display='flex' padding={10}>
<View marginVertical={5} backgroundColor={'#ffff'} width={'100%'} padding={15} borderRadius={15}><H5>Good Morning Mohit!</H5><Text>All things are possible, if you believe.</Text></View>


<Linechart />
<View width={"100%"} display='flex' flexDirection='row' gap={9}>
 <HomeWork/>                           
  <Attendence/>
</View>
<WallOfFram/>
    </ScrollView>
  )
}



const styles = StyleSheet.create({
  text:{
    width:29,
    height:25,
    display:'flex',
    textAlign:'center',
    borderRadius:50,
    color:"#ffff",
  }
})

function HomeWork(){
  return (
    <View padding={15} marginVertical={5} width={"49%"} backgroundColor={'#ffff'} borderRadius={15}>
      <H4 textAlign='center' marginBottom={10}>Home Work</H4>
      <View display='flex' flexDirection='row' gap={10} flexWrap='wrap'>
        {[1,2,3,4,5,6,7,8,9,10].map(ele=>
        <Text style={styles.text} backgroundColor={'$green9'}>{ele}</Text>
          )}
        

      </View>
    </View>
  )}


  const chartConfigdd = {

    color: (opacity = 1) => `#008748`,
  };

  const datadd = [
    {
      name: "Seoul",
      population: 21500000,
      color: "rgba(61, 138, 80,0.6)",
      // legendFontColor: "#7F7F7F",
      
    },
    {
      name: "Toronto",
      population: 2800000,
      color: "rgba(255, 60, 25,.6)",
      
      // legendFontColor: "#7F7F7F",
    }
  ];
  function Attendence(){
    return(
      <View width={"49%"} backgroundColor={'#ffff'} marginVertical={5} padding={15} borderRadius={15} display='flex' justifyContent='center'>
        <H4 textAlign='center'>Attendence</H4>
<PieChart
  data={datadd}
  width={screenWidth/1.2}
  height={140}
  chartConfig={chartConfigdd}
  accessor={"population"}  
  backgroundColor={"transparent"}
/>
      </View>
    )
  }
function WallOfFram() {
  return (
    <View marginVertical={5} marginBottom={15} backgroundColor={'#ffff'} width={'100%'} height={270} borderRadius={15} padding={15}>
      <H4 textAlign='center'>Wall Of Frame</H4>
      <ScrollView width={'100%'} padding={0} maxHeight={300} nestedScrollEnabled>
      <Card height={90} marginVertical={5}  display='flex' flexDirection='row'  alignItems='center' padding={10} paddingBottom={15} gap={10}>
    <View  padding={0} marginTop={10}>
    <Avatar circular size="$7">
        <Avatar.Image
          accessibilityLabel="Cam"
          src="https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80"
        />
        <Avatar.Fallback backgroundColor="$blue10" />
      </Avatar>
    </View>
    <View display='flex'  height={'100%'} justifyContent='center' flexDirection='column'>
        <H5 fontSize={13} marginVertical={-5}>Mohit Vishwakarma</H5>
        <Paragraph theme="alt2" fontSize={12} marginVertical={-5}>ReactNative Developer</Paragraph>
        <Paragraph theme="alt2" fontSize={12}  marginVertical={-5}>09 Mar 2024</Paragraph>
        <Separator marginVertical={5} />
        <Paragraph theme="alt2" fontSize={12}  marginVertical={-8}>"Dedicated Developer"</Paragraph>
    </View>
  </Card>
  <Card height={90} marginVertical={5}  display='flex' flexDirection='row'  alignItems='center' padding={10} paddingBottom={15} gap={10}>
    <View  padding={0} marginTop={10}>
    <Avatar circular size="$7">
        <Avatar.Image
          accessibilityLabel="Cam"
          src="https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80"
        />
        <Avatar.Fallback backgroundColor="$blue10" />
      </Avatar>
    </View>
    <View display='flex'  height={'100%'} justifyContent='center' flexDirection='column'>
        <H5 fontSize={13} marginVertical={-5}>Mohit Vishwakarma</H5>
        <Paragraph theme="alt2" fontSize={12} marginVertical={-5}>ReactNative Developer</Paragraph>
        <Paragraph theme="alt2" fontSize={12}  marginVertical={-5}>09 Mar 2024</Paragraph>
        <Separator marginVertical={5} />
        <Paragraph theme="alt2" fontSize={12}  marginVertical={-8}>"Dedicated Developer"</Paragraph>
    </View>
  </Card>
  <Card height={90} marginVertical={5}  display='flex' flexDirection='row'  alignItems='center' padding={10} paddingBottom={15} gap={10}>
    <View  padding={0} marginTop={10}>
    <Avatar circular size="$7">
        <Avatar.Image
          accessibilityLabel="Cam"
          src="https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80"
        />
        <Avatar.Fallback backgroundColor="$blue10" />
      </Avatar>
    </View>
    <View display='flex'  height={'100%'} justifyContent='center' flexDirection='column'>
        <H5 fontSize={13} marginVertical={-5}>Mohit Vishwakarma</H5>
        <Paragraph theme="alt2" fontSize={12} marginVertical={-5}>ReactNative Developer</Paragraph>
        <Paragraph theme="alt2" fontSize={12}  marginVertical={-5}>09 Mar 2024</Paragraph>
        <Separator marginVertical={5} />
        <Paragraph theme="alt2" fontSize={12}  marginVertical={-8}>"Dedicated Developer"</Paragraph>
    </View>
  </Card>
  <Card height={90} marginVertical={5}  display='flex' flexDirection='row'  alignItems='center' padding={10} paddingBottom={15} gap={10}>
    <View  padding={0} marginTop={10}>
    <Avatar circular size="$7">
        <Avatar.Image
          accessibilityLabel="Cam"
          src="https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80"
        />
        <Avatar.Fallback backgroundColor="$blue10" />
      </Avatar>
    </View>
    <View display='flex'  height={'100%'} justifyContent='center' flexDirection='column'>
        <H5 fontSize={13} marginVertical={-5}>Mohit Vishwakarma</H5>
        <Paragraph theme="alt2" fontSize={12} marginVertical={-5}>ReactNative Developer</Paragraph>
        <Paragraph theme="alt2" fontSize={12}  marginVertical={-5}>09 Mar 2024</Paragraph>
        <Separator marginVertical={5} />
        <Paragraph theme="alt2" fontSize={12}  marginVertical={-8}>"Dedicated Developer"</Paragraph>
    </View>
  </Card>
      </ScrollView>
    </View>
  )
}