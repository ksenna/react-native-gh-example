import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.sectionText}>
            GitHub React Native App
          </Text>

          <Text style={styles.sectionText}>
            Click a button to view more data
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  section: {
    margin: 25,
    padding: 10,
  },

  sectionText: {
    fontSize: 18,
    paddingVertical: 10,
    textAlign: 'center'
  },
})
