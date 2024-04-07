import { useEffect, useState } from "react";
import {
  Button, Form, H4, P, Spinner, Input, XStack, View, Image, Text,
} from "tamagui";
import { Link, router } from "expo-router";
import { Formik } from "formik";
import axios from "axios";


export default function FormsDemo() {
  const [status, setStatus] = useState("off");


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
      <View width={"100%"} height={"64%"} display="flex" justifyContent="center" >
        <Image
          source={require("../../assets/login.png")}
          width={"100%"} height={"64%"}
        />
      </View>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) =>
          fetch("http://localhost:3000/api/flippy/v1/user/auth/login", { method: "POST", body: values })
            .then((res) => {
              alert(res.data);
            })
            .catch((err) => {
              alert(err);
            })
        }
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <Form
            alignItems="center"
            width={"100%"}
            height={"40%"}
            marginTop={"-4%"}
            gap="$3"
            onSubmit={handleSubmit}
            borderWidth="$1"
            borderRadius="$8"
            backgroundColor="$background"
            borderColor="$borderColor"
            padding="$7"
            paddingTop="$3"
          >
            <H4>Login Here</H4>
            <XStack alignItems="center" space="$2">
              <Input
                flex={1}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                placeholder={`Enter Your Email...`}
              />
            </XStack>
            <XStack alignItems="center" space="$2">
              <Input
                flex={1}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                secureTextEntry={true}
                placeholder={`Enter Your Password...`}
              />
            </XStack>
            <Form.Trigger asChild disabled={status !== "off"}>
              <Button
                fontWeight={800}
                width={"100%"}
                backgroundColor={"$green3"}
                icon={status === "submitting" ? () => <Spinner /> : undefined}
              >
                Login Now
              </Button>
            </Form.Trigger>
            <Text color={"gray"}>
              Don't have an account{" "}
              <Link style={{ color: "#1d87de" }} href={"/signup"}>
                SignUp
              </Link>
            </Text>
          </Form>
        )}
      </Formik>
    </View>
  );
}
