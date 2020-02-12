import React from 'react';
import {ReactNativeSVGContext, NotoFontPack} from 'standalone-vexflow-context';
import {Stave} from 'vexflow/src/stave'
import { StyleSheet, View} from 'react-native';

export default class StaffSheet extends React.Component {
    
    render() {
        const context = new ReactNativeSVGContext(NotoFontPack, { width: 400, height: 400 });
        const stave = new Stave(100, 150, 200);
        stave.setContext(context);
        stave.setClef('treble');
        stave.setTimeSignature('4/4');
        stave.draw();
    
        return (
          <View>{ context.render() }</View>
        );
      }
}
const styles = StyleSheet.create({
    
  });