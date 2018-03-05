import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    };
  }

  static navigationOptions = {
    title: 'Home'
  }

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

          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('UserProfile')}
          >
            <Text style={styles.buttonText}>
              User Profile
            </Text>
          </TouchableOpacity>
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
  button: {
    padding: 8,
    borderRadius: 5,
    backgroundColor: '#e73536',
    height: 45,
    justifyContent: 'center',
    marginHorizontal: 25,
    marginVertical: 10
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
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
