import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View,Button,Alert } from 'react-native';
import * as firebase from 'firebase';
try{
  // Initialize Firebase
  const firebaseConfig = {
    apiKey: "AIzaSyCm1TfUeYqSh-FNmQsCelX4vEup3vHpHao",
      authDomain: "jazz-chords-react.firebaseapp.com",
      databaseURL: "https://jazz-chords-react.firebaseio.com",
      projectId: "jazz-chords-react",
      storageBucket: "jazz-chords-react.appspot.com"
  };
  firebase.initializeApp(firebaseConfig);
}
catch (err) {
  // we skip the “already exists” message which is
  // not an actual error when we’re hot-reloading
  if (!/already exists/.test(err.message)) {
  console.error("Firebase initialization error raised", err.stack)
  }
}
const firebaseApp= firebase;
var ref=firebase.database().ref();
ref.on("value",function(snapshot){
  const scale=snapshot.val();
},function(error){
  console.error("error: ",error.stack)
});


export default class App extends Component {
  
  render() {
    return (
      <View style={styles.container}>
      {//<Text style={styles.instructions}>{scale}</Text>
      }<Button
          onPress={() => {
            alert('You tapped the button!');
          }}
          title="Press Me"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
