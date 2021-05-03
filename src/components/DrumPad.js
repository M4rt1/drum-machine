import React from 'react';
import '../styles/DrumPad.css';

export default class DrumPad extends React.Component{
    constructor (props){
        super(props);
        this.handleClick=this.handleClick.bind(this);
        this.componentDidMount=this.componentDidMount.bind(this);
        this.componentWillUnmount=this.componentWillUnmount.bind(this);
        this.handleClick=this.handleClick.bind(this);

    }
    handleClick=()=>{
        this.audio.play();
        this.audio.currentTime=0;
        this.props.handleDisplay(this.props.id);
    }

    componentDidMount(){
        document.addEventListener('keydown',this.handleKeyDown)
        window.focus();
    }

    componentWillUnmount(){
        document.removeEventListener('keydown',this.handleKeyDown)
    }

    handleKeyDown=e=>{
        if(e.keyCode==this.props.letter.charCodeAt()){
            this.audio.play()
            this.audio.currentTime=0
            this.props.handleDisplay(this.props.id)
        }
    }

    render(){
        return(
            <div className='drum-pad' id={this.props.id} onClick={this.handleClick}>
                <h1>{this.props.letter}</h1>
                <audio 
                ref={ref=>this.audio=ref}
                className='clip' 
                id={this.props.letter} 
                src={this.props.src}
                >

                </audio>
            </div>
        )
    }
}