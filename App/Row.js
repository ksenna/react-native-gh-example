import React from "react";
import { Text, View } from "react-native";

export default class Row extends React.Component {
  render() {
    const items = this.props;
    const rowItems = Object.keys(items).map((key) => 
      <Text key={key}>
        {key}: {items[key]}
      </Text>
    );

    return (
      <View>
        {rowItems}
      </View>
    );
  }
}
