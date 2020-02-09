import React from 'react';
import { View } from 'react-native';
import OperationQuestion from '../components/OperationQuestion';
import OperationAnswer from '../components/OperationAnswer';

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
    if (val === base * number) {
      this.nextQuestion();
      return true;
    }
    return false;
  }

  render() {
    const { base, number } = this.state;
    return (
        <View>
          <OperationQuestion x={base} y={number}/>
          <OperationAnswer onAnswer={value => this.checkAnswer(value)}/>
        </View>
    )
  }
}
