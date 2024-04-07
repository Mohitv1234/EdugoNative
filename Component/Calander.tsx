import * as React from "react";
import * as RN from "react-native";
import { Button, H4, Paragraph, Text, View, XStack } from "tamagui";

function Calander() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const changeMonth = (n) => {
    let newdate = new Date(
      state.activeDate.getFullYear(),
      state.activeDate.getMonth() + n
    );
    setState({ ...state, activeDate: newdate });
  };

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const nDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  const [state, setState] = React.useState({
    activeDate: new Date(),
  });

  function generateMatrix() {
    var matrix = [];
    // Create header
    matrix[0] = weekDays;

    var year = state.activeDate.getFullYear();
    var month = state.activeDate.getMonth();
    var firstDay = new Date(year, month, 1).getDay();

    var maxDays = nDays[month];
    if (month == 1) {
      // February
      if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        maxDays += 1;
      }
    }

    var counter = 1;
    for (var row = 1; row < 7; row++) {
      matrix[row] = [];
      for (var col = 0; col < 7; col++) {
        matrix[row][col] = -1;
        if (row == 1 && col >= firstDay) {
          // Fill in rows only after the first day of the month
          matrix[row][col] = counter++;
        } else if (row > 1 && counter <= maxDays) {
          // Fill in rows only if the counter's not greater than
          // the number of days in the month
          matrix[row][col] = counter++;
        }
      }
    }

    return matrix;
  }

  var matrix = generateMatrix();

  var rows = [];
  rows = matrix.map((row, rowIndex) => {
    var rowItems = row.map((item, colIndex) => {
      return (
        <Text
          style={{
            flex: 1,
            textAlign: "center",
            color: colIndex == 0 ? "#a00" : "#000",
          }}
        >
          {item != -1 ? item : ""}
        </Text>
      );
    });

    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          padding: 15,
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        {rowItems}
      </View>
    );
  });

  return (
    <View width={"100%"}>
      <H4 textAlign="center" fontSize={15}>
        {months[state.activeDate.getMonth()]} &nbsp;
        {state.activeDate.getFullYear()}
      </H4>
      <XStack justifyContent="space-between">
        <Paragraph>Total Days : 24</Paragraph>
        <Paragraph>Present Days : 20</Paragraph>
      </XStack>
      <View height={1} marginVertical={10} backgroundColor={"$gray5"}></View>
      {rows}
      <XStack justifyContent="space-between">
        <Button backgroundColor={"$green5"} onPress={() => changeMonth(-1)}>
          Previous
        </Button>

        <Button backgroundColor={"$green5"} onPress={() => changeMonth(+1)}>
          Next
        </Button>
      </XStack>
    </View>
  );
}

// Export for now to get rid of error and see preview:
export default Calander;
