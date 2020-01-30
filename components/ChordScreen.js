import React, { Component } from 'react';
export default class ChordScreen extends React.Component{
    static navigationOptions = {
        title: 'Chords',
    };
    render(){
        const{navigate}=this.props.navigation;
        return(
            <Text>Chords</Text>
        );
    }
}