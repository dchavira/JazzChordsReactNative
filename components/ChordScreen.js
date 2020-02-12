import React, { Component } from 'react';
import * as Font from 'expo-font';
import * as firebase from 'firebase';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';
import firbaseConfig from '../ApiKeys';
import StaffSheet from './StaffSheet';
import firebaseFunctions from '../functionLibrary/firebaseFunctions';
import { Platform, StyleSheet, Text, View, ScrollView, Alert, TextInput, Dimensions } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
const {height}=Dimensions.get('window');
export default class ChordScreen extends React.Component {
  static navigationOptions = {
    title: 'Chords',
    chord: '',
    headerShown: false,
  };
  state = {
    scales: [],
    text: 'hello boi',
    screenHeight:0
  }
  componentDidMount() {
    Font.loadAsync({
      'ralewayLight': require('../assets/raleway/Raleway-Light.ttf'),
    });
    this.setState(this.scales = firebaseFunctions.request(this.props.navigation.state.params.text));
    if(this.scales.length===0){
      //alert('Sorry, the chord you have entered was not found. Please check your spelling and format.');
      this.props.navigation.navigate('Home')}
  }
  renderList() {
    return this.state.scales.map((index) => <Text style={styles.landing} key={index}>{this.state.scales[index]}</Text>);
  }
  
  onContentSizeChange = (contentWidth, contentHeight) => {

    // Save the content height in state

    this.setState({ screenHeight: contentHeight });

  };
  render() {
    const { navigate } = this.props.navigation;
    
    const scrollEnabled = this.state.screenHeight > height;
    return (
      <View style={styles.container}>

        <LinearGradient
          colors={['#FF00DF', '#6E00FF']}
          style={styles.gradient}>
          
            <Icon name='chevron-left' size={50} color='#FFF' style={styles.menu} onPress={() => {
              navigate('Home');
            }} />
            <Text style={styles.landing}>{this.props.navigation.state.params.text}</Text>
            <Text style={styles.landing}>Chord Image will go here</Text>
              <FlatList
                data={this.scales}
                renderItem={({ item }) => <Text style={styles.list}>{item}</Text>}
              />




          

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
    color: '#FFF',
    fontFamily: 'ralewayLight',
    fontSize: 30,
    marginLeft: 30,
    marginTop: 20,
    marginRight: 30,
    padding: 10,
    borderColor: "#000",
    borderRadius: 7,
    borderWidth: 0,

  },
  search: {
    marginLeft: 20,
    marginTop: 15,

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
    textAlign: 'center',
    marginTop: 40
  }
});