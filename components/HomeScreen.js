import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, Alert, TextInput,StatusBar } from 'react-native';
import * as firebase from 'firebase';
import Landing from "./landing";
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Font from 'expo-font';
import firbaseConfig from '../ApiKeys';
import firebaseConfig from '../ApiKeys';


export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Welcome',
    headerShown: false,
  };
  constructor(props) {
    super(props);
    this.state = {text: ''};
    if (!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
    }
  };
  
  state={
    fontLoaded:false
  };
  async componentDidMount() {
    await Font.loadAsync({
      'ralewayLight': require('../assets/raleway/Raleway-Light.ttf'),
    });
    this.setState({fontLoaded:true})
    
    
    
  }
  
  render() {
    
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        {this.state.fontLoaded ? (
        <LinearGradient
          colors={['#5AA7FF', '#0044B9']}
          style={styles.gradient}>
          <View styles={styles.topHalf}>
            <Icon name='bars' size={50} color='#FFF' style={styles.menu} onPress={()=>{
              alert('menu');
            }}/>
            <Text style={styles.landing}>Welcome</Text>
            <View style={styles.bar}>
              <Icon name='search' size={30} color='#FFF' style={styles.search} />
              <TextInput
                style={styles.input}
                placeholder={'Enter a chord'}
                placeholderTextColor='#FFF'
                onChangeText={text => this.setState({text})}
                onSubmitEditing={()=>{
                  navigate('Chord',{text: this.state.text})
                }}
                value={this.state.text}>
              </TextInput>
              
            </View>

          </View>
          <View styles={styles.bottomHalf}>
          </View>
            <Icon name='question-circle' size={50} color='#FFF' style={styles.help} onPress={() => {
                navigate('Help');
            }} />
            <Text style={styles.iconLabel}>Help</Text>
            <Icon name='database' size={50} color='#FFF' style={styles.database} onPress={() => {
                navigate('Home');
            }} />
            <Text style={styles.databaseLabel}>Chords</Text>
        </LinearGradient>
        ) : null}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  bottomHalf:{
    flex:1,
    justifyContent:"flex-end",
   
  },
  iconLabel:{
    color:'#FFF',
    position:"absolute",
    left:130,
    bottom:60
  },
  help:{ 
    position:"absolute",
    bottom:80,
    left:125,
    
  },
  databaseLabel:{
    color:'#FFF',
    position:"absolute",
    left:245,
    bottom:60
  },
  database:{
    position:"absolute",
    bottom:80,
    left:250,
    
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
