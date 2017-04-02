import React from 'react';

export default class Typewriter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      texts: [
        "Trainings", 
        "Web Applications", 
        'Web Hosting',
        "Android Applications",
        "iOS Applications"
      ],
      text: '',
      currentIndex: 0,
      direction: 'f' //f:forward, b:backward
    }
    this.getNextText = this.getNextText.bind(this);

  }

  componentDidMount() {
    this.getNextText();
  }

  getNextText() {
    let {texts, text, currentIndex, direction} = this.state;
    let nextTimeout = 100;

    if(direction === 'f') {
      if(text.length === texts[currentIndex].length) {
        direction = 'b';
        nextTimeout = 800;
      } else {
        text = texts[currentIndex].substring(0, text.length + 1);
      }
    } else {
      if(text.length > 0) {
        text = texts[currentIndex].substring(0, text.length - 1);
        nextTimeout = 50;
      }
      else if(text.length === 0) {
        direction = 'f';
        currentIndex++;

        if(currentIndex >= texts.length) {
          currentIndex = 0;
        }
      }

    }

    this.setState(function(state, props) {
      return {
        text: text,
        currentIndex: currentIndex,
        direction: direction
      }
    });

    //this.setState({text: texts[currentIndex], currentIndex: currentIndex, direction: direction});
    setTimeout(this.getNextText, nextTimeout);
  }



  render() {
    return <span>{this.state.text}|</span>
  }
}
