import { View, Text, Button } from "tamagui";
import React, { useState } from "react";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import { CalendarRange, Clock2 } from "@tamagui/lucide-icons";

export function DatePick({ mode }) {
  const [date, setDate] = useState(new Date(1598051730000));

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const showMode = () => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: mode,
      is24Hour: true,
    });
  };

  return (
    <View width={"100%"}>
      <Button onPress={showMode} display="flex" justifyContent="space-between">
        <Text>
          {mode == "time"
            ? date.toLocaleString().split(",")[1]
            : date.toLocaleString().split(",")[0]}
        </Text>{" "}
        {!(mode == "time") ? <CalendarRange /> : <Clock2 />}
      </Button>
    </View>
  );
}
