import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import * as firebase from 'firebase';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Font from 'expo-font';
import firebaseConfig from '../ApiKeys';
import { DrawerNavigator } from 'react-navigation';
import AddChord from './AddChord';
import UpdateLibrary from './UpdateLibrary';

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Welcome',
    headerShown: false,
  };
  constructor(props) {
    super(props);
    this.state = { text: '' };
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
  };

  state = {
    fontLoaded: false
  };
  async componentDidMount() {
    await Font.loadAsync({
      'ralewayLight': require('../assets/raleway/Raleway-Light.ttf'),
      
      
    });
    
    this.setState({ fontLoaded: true })



  }

  render() {

    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        {this.state.fontLoaded ? (
          <LinearGradient
            colors={['#5AA7FF', '#0044B9']}
            style={styles.gradient}>
            <Icon name='bars' size={50} color='#FFF' style={styles.menu} onPress={() => {
              alert('menu')
            }} />
            <Text style={styles.landing}>Welcome</Text>
            <View style={styles.bar}>
              <Icon name='search' size={30} color='#FFF' style={styles.search} />
              <TextInput
                style={styles.input}
                placeholder={'Enter a chord'}
                placeholderTextColor='#FFF'
                onChangeText={text => this.setState({ text })}
                autoCorrect={false}
                onSubmitEditing={() => {
                  navigate('Chord', { text: this.state.text })
                }}
                value={this.state.text}>
              </TextInput>
              <Icon name='arrow-circle-right' size={30} color='#FFF' style={styles.send} onPress={() => {
                navigate('Chord', { text: this.state.text })
              }} />
            </View>
            <View style={styles.bottomHalf}>
              <View style={{ marginRight: 50 }}><Icon name='question-circle' size={50} color='#FFF' onPress={() => {
                navigate('Help');
              }} />
                <Text style={styles.label} >Help</Text>
              </View>
              <View><Icon name='database' size={50} color='#FFF' onPress={() => {
                navigate('Update');
              }} />
                <Text style={styles.label} onPress={() => {
                
              }}>Chords</Text>
              </View>
            </View>

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
  bottomHalf: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',


  },
  send: {
    marginRight: 20,
    marginTop: 15
  },

  help: {
    position: "absolute",
    bottom: 80,
    left: 125,

  },
  label: {
    color: '#FFF',
    marginTop: 5

  },
  database: {
    position: "absolute",
    bottom: 80,
    left: 250,

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
    textAlign: 'center',
    marginTop: 120
  }
});
