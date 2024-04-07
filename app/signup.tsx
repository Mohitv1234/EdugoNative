import { useEffect, useState } from "react";
import type { SizeTokens } from "tamagui";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button, Form, H4, P,Spinner,Input,XStack, View,Image,Text } from "tamagui";
import { Link } from "expo-router";
import InputDemo from '../Component/InputDemo'


export default function FormsDemo() {
  const [status, setStatus] =useState("off")
  useEffect(() => {
    if (status === "submitting") {
      const timer = setTimeout(() => setStatus("off"), 2000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [status]);
  return (
    <View>
       <Image
      source={require("../assets/46.png")}
      width={"100%"}
      height={"42%"}
    />
    <Form
      alignItems="center"
      width={'100%'}
      height={'62%'}
      marginTop={"-4%"}
      gap="$3"
      onSubmit={() => setStatus("submitting")}
      borderWidth="$1"
      borderRadius="$8"
      backgroundColor="$background"
      borderColor="$borderColor"
      padding="$7"
      paddingTop="$3"
    >
      <H4>Signup Here</H4>
      <InputDemo name="Full Name" />
      <InputDemo name="Username" />
      <InputDemo name="Email" />
      <InputDemo name="Password" type="password" />
      <InputDemo name="Confirm Password" type="password" />
      <Form.Trigger asChild disabled={status !== "off"}>

        <Button backgroundColor={'$green3'} width={'100%'} fontWeight={800} icon={status === "submitting" ? () => <Spinner /> : undefined}>
          Sign up
        </Button>
      </Form.Trigger>
      <Text color={'gray'}>Have an account <Link style={{color:'#1d87de'}} href={'/login/student'}>Login</Link></Text>
    </Form>
    </View>

  );
}


