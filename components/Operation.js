import React from 'react';
import { View, Image } from 'react-native';
import OperationQuestion from '../components/OperationQuestion';
import OperationAnswer from '../components/OperationAnswer';
import smile from '../assets/images/smile.png';
import frown from '../assets/images/frown.png';
function randomNumber(max = 10) {
  return Math.floor(Math.random() * (max + 1));
}

export default class extends React.Component {
  constructor(props) {
    super(props);
    const random = Number.isNaN(props.base);
    this.state = {
      base: random ? randomNumber() : props.base,
      number: randomNumber(),
      random,
      image: null,
    };
  }

  nextQuestion() {
    const { random, number, base } = this.state;
    let nextNumber = randomNumber();
    while(nextNumber === number) {
      nextNumber = randomNumber();
    }
    this.setState({
      number: nextNumber,
      base: random ? randomNumber() : base,
    })
  }

  checkAnswer(val) {
    const { base, number } = this.state;
    setTimeout(()=>this.setState({ image: null }), 1000);
    if (val === base * number) {
      this.setState({ image: smile });
      this.nextQuestion();
      return true;
    }
    this.setState({ image: frown });
    return false;
  }

  render() {
    const { base, number, image } = this.state;
    return (
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between'}}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{flex: 1}}></View>
            <OperationQuestion x={base} y={number} style={{ flex: 3, flexDirection: 'row', justifyContent: 'center'}}/>
            <View style={{flex: 1}}>
              { image && (
                <Image
                  source={image}
                  style={{width: 50, height: 50}}
                />
              ) }
            </View>
          </View>
          <OperationAnswer onAnswer={value => this.checkAnswer(value)}/>
        </View>
    )
  }
}
