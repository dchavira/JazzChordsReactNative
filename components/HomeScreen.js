import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, Alert } from 'react-native';
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
          </View>
        </LinearGradient>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
  menu: {
    marginLeft: 30,
    marginTop: 30,
  },
  gradient: {
    flex: 1,
    alignItems: 'flex-start',

  },
  landing: {
    backgroundColor: 'transparent',
    color: '#fff',
    fontFamily: 'sans-serif',
    fontSize: 50,
    marginLeft:80,
    marginTop: 120
  }
});
