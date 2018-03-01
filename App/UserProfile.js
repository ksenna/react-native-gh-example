import React from 'react'
import { ActivityIndicator, FlatList, View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Row from './Row';

export default class UserProfile extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    return fetch('https://api.github.com/users/<username>')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: [responseJson],
        })
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render () {
    if(this.state.isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Row {...item}/> }
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20
  },
})

