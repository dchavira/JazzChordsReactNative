import React, { Component } from 'react';
import * as Font from 'expo-font';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';
import { Platform, StyleSheet, Text, View, Button, TextInput } from 'react-native';
export default class ChordScreen extends React.Component {
    static navigationOptions = {
        title: 'Help',
        
    headerShown: false,
    };
    async componentDidMount() {
        await Font.loadAsync({
          'ralewayLight': require('../assets/raleway/Raleway-Light.ttf'),
        });
      }
    render() {
        const { navigate } = this.props.navigation;
        
        return (
            <View style={styles.container}>

                <LinearGradient
                    colors={['#ee0979', '#ff6a00']}
                    style={styles.gradient}>
                    <View styles={styles.topHalf}>
                        <Icon name='chevron-left' size={50} color='#FFF' style={styles.menu} onPress={() => {
                            navigate('Home');
                        }} />
                        <Text style={styles.landing} >Help</Text>
                        <Text style={styles.list}onPress={() => {
                            navigate('SearchTutorial');
                        }}>1. How to Search</Text>
                        <Text style={styles.list}>2. How to Add a Chord</Text>
                        <Text style={styles.list}>3. How to Update Chord Library</Text>
                        

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
    list: {
      marginLeft: 20,
      marginTop: 40,
      color: '#FFF',
      fontSize: 30,
      paddingLeft:20,
      fontFamily:'ralewayLight',
      marginRight:20,
      overflow:"hidden",
      textDecorationLine: 'underline'
    },
    input: {
      flex: 1,
      paddingLeft: 20,
      color: '#FFF',
      fontSize: 20,
    },
    bar: {
      borderColor: '#777',
      borderRadius: 30,
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
      marginRight: 20,
      marginLeft: 20,
      marginTop: 100,
      height: 60,
      flexDirection: 'row',
  
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
      fontFamily: 'ralewayLight',
      fontSize: 50,
      textAlign:'center',
      marginTop: 30
    }
  });