import React, { Component } from 'react';
import * as Font from 'expo-font';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';
import { Platform, StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import helpers from './helpFunctions';
export default class ChordScreen extends React.Component {
    static navigationOptions = {
        title: 'ScreenTutorial',

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

                <Icon name='chevron-left' size={50} color='#000' style={styles.menu} onPress={() => {
                    navigate('Help');
                }} />
                <Text style={styles.landing}>Search</Text>
                <ScrollView style={{marginBottom:20}}>
                    <Text style={styles.instructions}>So you have the app, now you want to learn something.
                    Great!</Text>
                    <Text style={styles.instructions}>To search, all you have to do is press the search bar in the home screen,
                    type in the chord you are trying to work on, and either press enter on your keypad or press the arrow in the search bar
                    </Text>
                    <Text style={styles.instructions}>There are some format limitations on how you can search these chords however,
                    for example:
                    to search AMaj7, you can type in these formats</Text>
                    <Text style={styles.instructions}> (AMaj7, AMAJ7, A MAJ 7, AMAJ7, AM7, A Major 7)</Text>
                    <Text style={styles.instructions}>If for some reason, you still can't find a chord, there is a good chance that the chord
                    you have searched isn't in our database yet. You can send a request to have your chord added to the database here.</Text>
                </ScrollView>


            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#FFF'
    },
    instructions: {
        marginLeft: 20,
        marginTop: 80,
        color: '#000',
        fontSize: 30,
        paddingLeft: 20,
        fontFamily: 'ralewayLight',
        marginRight: 20,
        overflow: "hidden",
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
        color: '#000',
        fontFamily: 'ralewayLight',
        fontSize: 50,
        textAlign: 'center',
        marginTop: 30
    }
});