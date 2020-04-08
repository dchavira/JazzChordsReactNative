import React, { version } from 'react';
import * as Font from 'expo-font';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';
import * as data from '../assets/Database/Data.json'

import updateData from '../functionLibrary/updateData'
import { StyleSheet, Text, View,  Dimensions } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
const {height}=Dimensions.get('window');
export default class UpdateLibrary extends React.Component {
  static navigationOptions = {
    title: 'UpdateLibrary',
    chord: '',
    headerShown: false,
  };
  state = {
    scale: '',
    chord:'',
    screenHeight:0,
    version:''
  }
  componentDidMount() {
    Font.loadAsync({
      'ralewayLight': require('../assets/raleway/Raleway-Light.ttf'),
    });
    this.getVersion()
    
  }
  getVersion(){
      this.setState({version:data.version})
  }
  checkUpdate(){
    updateData.update();
  }

  render() {
    const { navigate } = this.props.navigation;
    const scrollEnabled = this.state.screenHeight > height;
    return (
      <View style={styles.container}>

        <LinearGradient
          colors={['#09DEEE', '#004CFF']}
          style={styles.gradient}>
          
            <Icon name='chevron-left' size={50} color='#FFF' style={styles.menu} onPress={() => {
              this.props.navigation.goBack();
            }} />
            <Text style={styles.landing}>Update</Text>
            <View style={styles.buttonView}>
              <Text style={styles.list}>Current Version:</Text>
              <Text style={{fontSize:30,color:"#FFF",fontFamily:'ralewayLight'}}>{this.state.version}</Text>
              
                <TouchableOpacity
                  onPress={()=> this.checkUpdate()}
                  style={styles.buttons}
                >
                  <Text style={styles.buttonText}>Check for Updates</Text>
                </TouchableOpacity>
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
  buttonView:{
    flex: 1,
    alignItems: 'center',
  },
  buttonText:{
    fontSize:20,
    
    fontFamily:'ralewayLight'
  },
  buttons:{
    borderRadius:7,
    padding:10,
    backgroundColor:'#FFF',
    marginTop:20
    
  },
  list: {
    color: '#FFF',
    fontFamily: 'ralewayLight',
    fontSize: 30,
    marginLeft: 30,
    marginTop: 50,
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
    marginTop: 40,
  }
});