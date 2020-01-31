import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';
import * as firebase from 'firebase';
import Landing from "./landing";

import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';




export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Welcome',
    headerShown: false,
  };

  render() {

    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        {//<Text style={styles.instructions}>{scale}</Text>
        }
        <LinearGradient
          colors={['#5AA7FF', '#0044B9']}
          style={styles.gradient}>
          <View styles={styles.topHalf}>
            <Icon name='bars' size={50} color='#FFF' style={styles.menu} />
            <Text style={styles.landing}>Welcome</Text>
            <View style={styles.bar}>
              <Icon name='search' size={30} color='#FFF' style={styles.search} />
              <TextInput
                style={styles.input}
                placeholder={'Enter a chord'}
                placeholderTextColor='#FFF'>

              </TextInput></View>

          </View>
        </LinearGradient>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  search:{
    marginLeft:20,
    marginTop:15
  },
  input:{
    flex:1,
    paddingLeft:20,
    color: '#FFF',
    fontSize: 20,
  },
  bar: {
    borderColor: '#777',
    borderRadius: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    marginRight: 20,
    marginLeft:20,
    marginTop:100,
    height: 60,
    flexDirection:'row',
    
  },
  menu: {
    marginLeft: 30,
    marginTop: 50,
  },
  gradient: {
    flex: 1,
    alignItems: 'stretch',

  },
  landing: {
    backgroundColor: 'transparent',
    color: '#fff',
    fontFamily: 'sans-serif',
    fontSize: 50,
    marginLeft: 80,
    marginTop: 120
  }
});
