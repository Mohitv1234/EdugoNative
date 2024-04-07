import { useEffect, useMemo, useState } from "react";
import {
  Adapt,
  Button,
  FontSizeTokens,
  Form,
  H4,
  H5,
  H6,
  Label,
  Paragraph,
  RadioGroup,
  ScrollView,
  Select,
  Separator,
  Sheet,
  SizableText,
  Spinner,
  Tabs,
  Text,
  TextArea,
  View,
  XStack,
  YStack,
  getFontSize,
} from "tamagui";
import { RadioGroupItemWithLabel } from "../../Component/RadioGroup";
import {
  CalendarRange,
  Check,
  ChevronDown,
  ChevronUp,
  GitPullRequestArrow,
} from "@tamagui/lucide-icons";
import { LinearGradient } from "react-native-svg";
import DateTimePicker, {
  DateTimePickerAndroid,
} from "@react-native-community/datetimepicker";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { DatePick } from "../../Component/Datepicker";
import { SelectDemoItem } from "../../Component/SelectDemoItem";
import InputLabel from "../../Component/InputLabel";
import Calander from "../../Component/Calander";
// import DateTimePickerModal from "react-native-modal-datetime-picker";

export default () => (
  <ScrollView >
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
          <SizableText fontFamily="$body">Attendence</SizableText>
        </Tabs.Tab>
        <Tabs.Tab flex={1} value="tab2">
          <SizableText fontFamily="$body">Leave</SizableText>
        </Tabs.Tab>
      </Tabs.List>
      {/* <Separator /> */}
      <TabsContent value="tab1" height={'100%'}>
        <ScrollView width={'100%'} height={'100%'} padding={10} backgroundColor={"#fff"} nestedScrollEnabled>
        <H4 textAlign="center">Attendance</H4>
        <Calander />

        </ScrollView>
      </TabsContent>

      <TabsContent value="tab2">
        <LeavePage />
      </TabsContent>
    </Tabs>
  </ScrollView>
);




const TabsContent = (props: any) => {
  return (
    <Tabs.Content
      key={props.value}
      padding="$2"
      alignItems="center"
      justifyContent="center"
      flex={1}
      borderColor="$background"
      borderRadius="$2"
      borderTopLeftRadius={0}
      borderTopRightRadius={0}
      borderWidth="$2"
      minHeight={"100%"}
      overflow="scroll"
      {...props}
    >
      {props.children}
    </Tabs.Content>
  );
};

function LeavePage() {
  const [status, setStatus] = useState<"off" | "submitting" | "submitted">(
    "off"
  );
  const [numberDays, setNumberDays] = useState("singleday");
  useEffect(() => {
    if (status === "submitting") {
      const timer = setTimeout(() => setStatus("off"), 2000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [status]);
  return (
    <ScrollView height={"100%"} width={"100%"} backgroundColor={'#fff'} borderRadius={10} padding={'$2'} nestedScrollEnabled={true}>
      <XStack justifyContent="space-between" alignItems="center">
        <H4 fontSize={16} textAlign="center">Send Leave Request</H4>
        <GitPullRequestArrow
          onPress={() => router.navigate("/leavestatus")}
        />
      </XStack>
      <View height={1} marginVertical={10} backgroundColor={"$gray5"}></View>
      <Form
        // minWidth={'100%'}
        onSubmit={() => setStatus("submitting")}
        borderRadius="$4"
        display="flex"
        gap={15}
        
        padding="$2"
      >
        <InputLabel title={'Reason'}>
          <TextArea id="reason" width={"100%"} height={70} rows={2} overflow="scroll" placeholder="Enter Your Reason..." />
        </InputLabel>
        {/* <LabalFunc> */}

        <Paragraph textAlign="left" width={"100%"}>
          Number of Days
        </Paragraph>
        <RadioGroup
          width={"100%"}
          aria-labelledby="Select one item"
          defaultValue="3"
          name="days"
          value={numberDays}
          onValueChange={(e) => setNumberDays(e)}
        >
          <YStack alignItems="center" space="$0.25">
            <RadioGroupItemWithLabel
              size="$2"
              value="singleday"
              label="Single Day"
            />
            <RadioGroupItemWithLabel
              size="$2"
              value="multiday"
              label="Multiple days"
            />
          </YStack>
        </RadioGroup>
        {/* </LabalFunc> */}
        {numberDays === "singleday" ? <SingleDay /> : <Multidays />}
        <Form.Trigger asChild disabled={status !== "off"}>
          <Button
          backgroundColor={'$green5'}
            icon={status === "submitting" ? () => <Spinner /> : undefined}
          >
            Submit
          </Button>
        </Form.Trigger>
      </Form>
    </ScrollView>
  );
}

function LabalFunc(props: any) {
  return (
    <XStack gap={10} >
      {props.children}
    </XStack>
  );
}

function Multidays() {
  return (
    <>
      <InputLabel title={'From'} >
        <DatePick mode={"date"}/>
      </InputLabel>
      <InputLabel title={"To"}>
        <DatePick mode={"date"} />
      </InputLabel>
    </>
  );
}

function SingleDay() {
  const [daySingle, setDaySingle] = useState("half");
  return (
    <>
    <InputLabel title={'Select Date'}>
      <DatePick mode={"date"} />
    </InputLabel>

    <InputLabel title={'Half/Full Day :'}>
        <SelectDemoItem daySingle={daySingle} setDaySingle={setDaySingle}  />
    </InputLabel>
  
   
      {daySingle==='half'?
      <>
       <InputLabel title={'From Time'}>
        <DatePick mode={"time"} />
      </InputLabel>
    
      <InputLabel title={'To Time'}>
        <DatePick mode={"time"} />
      </InputLabel>
      
      </>:null}
    </>
  );
}





