import React from 'react';
import { ReactNativeSVGContext, NotoFontPack } from 'standalone-vexflow-context';
import { Stave } from 'vexflow/src/stave'
import { Accidental } from 'vexflow/src/accidental';

import { StaveNote } from 'vexflow/src/stavenote';

import { Voice } from 'vexflow/src/voice';

import { Formatter } from 'vexflow/src/formatter';
import { StyleSheet, View } from 'react-native';

export default class StaffSheet extends React.Component {
  runVexFlowCode(context) {
    const stave = new Stave(100, 150, 400);
    stave.setContext(context);
    stave.setClef('bass');
    stave.setTimeSignature('4/4');
    stave.draw();
    const notes = [

      new StaveNote({ clef: "bass", keys: ["c/4", "e/4"], duration: "q" })

        .addAccidental(0, new Accidental("##")).addDotToAll(),

      new StaveNote({ clef: "bass", keys: ["d/4"], duration: "q" }),

      new StaveNote({ clef: "bass", keys: ["b/4"], duration: "qr" }),

      new StaveNote({ clef: "bass", keys: ["c/4", "e/4", "g/4"], duration: "q" })

    ];
    const voice = new Voice({ num_beats: 4, beat_value: 4 });

    voice.addTickables(notes);



    const formatter = new Formatter().joinVoices([voice]).formatToStave([voice], stave);

    voice.draw(context, stave);
  }
  render() {
    const context= new ReactNativeSVGContext(NotoFontPack,{width:400, height:400})
    this.runVexFlowCode(context)
    return (
      <View>{context.render()}</View>
    );
  }
}
const styles = StyleSheet.create({

});