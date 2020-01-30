import React, { Component } from 'react';

import { Platform, StyleSheet, Text, View,Button,Alert } from 'react-native';
class Landing extends Component {
  styles=StyleSheet.create({
    landing:{
      backgroundColor: 'transparent',
      fontSize: 15,
      color: '#fff',
    }
  });
    render() {
      return (
        
            <Text style={this.styles.landing}>Hello</Text>
        
      );
    }
    
}
export default Landing;