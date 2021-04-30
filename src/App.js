import './styles/App.css';
import DrumPad from './components/DrumPad';
import React from 'react';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      display:'Click or Press Key'
    }

  }
  handleDisplay=display=>this.setState({display})
 
  render(){
    const SAMPLES=[
      {id:'Simmons SD-5', letter:'Q', src:'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Simmons%20SD-5/46[kb]sd-5-005.wav.mp3'},
      {id:'Roland R-8', letter:'W', src:'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Roland%20R-8/36[kb]R8-Conga.wav.mp3'},
      {id:'Linn Drum', letter:'E', src:'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Linn%20Drums/34[kb]linn-BDRUM13.wav.mp3'},
      {id:'Korg ER-1', letter:'A', src:'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Korg%20ER-1/80[kb]er1-bd2.wav.mp3'},
      {id:'Jomox MBase 01', letter:'S', src:'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Jomox%20MBase%2001/135[kb]jmox-MBase-16.wav.mp3'},
      {id:'Kawai R50', letter:'D', src:'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Kawai%20R50/42[kb]HIT_GATE.wav.mp3'},
      {id:'Visco Space Drum', letter:'Z', src:'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Visco%20Space%20Drum/21[kb]visco-12.wav.mp3'},
      {id:'Alesis HR16', letter:'X', src:'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Alesis%20HR16/11[kb]ZIP.wav.mp3'},
      {id:'808 Basic', letter:'C', src:'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/808%20Basic/35[kb]handclap.wav.mp3'},
  ];
    return(
      <div id='drum-machine'>
        <div id='display'>{this.state.display}</div>
          <div id='drum-pads'>
            {SAMPLES.map(s=>(
              <DrumPad id={s.id}
              letter={s.letter}
              src={s.src}
              handleDisplay={this.handleDisplay}
              />
            )) }
          </div>
      </div>
    )
  }
}