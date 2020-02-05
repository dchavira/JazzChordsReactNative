import React, { Component } from 'react';
import * as Font from 'expo-font';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';
import { Platform, StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';
export default class ChordScreen extends React.Component {
    static navigationOptions = {
        title: 'Chords',
        
    headerShown: false,
    };
    componentDidMount() {
        Font.loadAsync({
          'ralewayLight': require('../assets/raleway/Raleway-Light.ttf'),
        });
      }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>

                <LinearGradient
                    colors={['#FF00DF', '#FFF']}
                    style={styles.gradient}>
                    <View styles={styles.topHalf}>
                        <Icon name='chevron-left' size={50} color='#FFF' style={styles.menu} onPress={() => {
                            navigate('Home');
                        }} />
                        <Text style={styles.landing}>{this.props.navigation.state.params.text}</Text>
                        <View style={styles.bar}>
                            <Icon name='search' size={30} color='#FFF' style={styles.search} />
                            <TextInput
                                style={styles.input}
                                placeholder={'Enter a chord'}
                                placeholderTextColor='#FFF'>

                            </TextInput>
                        </View>

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
    search: {
      marginLeft: 20,
      marginTop: 15
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
      marginTop: 120
    }
  });