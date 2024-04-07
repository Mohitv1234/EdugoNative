import { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { Button, Input, XStack } from "tamagui";

export default function InputDemo(props) {
  const [showPass, setShowPass] = useState(true);
  return (
    <XStack alignItems="center" space="$2">
      <Input
        flex={1}
        name={props.name}
        id={props.name}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        error={props.error}
        helperText={props.helperText}
        secureTextEntry={showPass}
        size={props.size}
        placeholder={`${props.name}`}
      />
      {props.type == "password" ? (
        <Button
          onPress={() => {
            setShowPass(!showPass);
          }}
        >
          <Icon name={showPass ? "eye" : "eye-slash"} size={20} color="#000" />
        </Button>
      ) : (
        ""
      )}
    </XStack>
  );
}
