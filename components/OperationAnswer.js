import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import BigButton from './BigButton';
import ImageButton from './ImageButton';
import styles from '../styles';
import variables from '../styles/variables';
import check from '../assets/images/check.png';
import backspace from '../assets/images/backspace.png';

export default class extends React.Component {

  constructor(props) {
    super(props);
    this.state = { answer: null };
  }

  input(val) {
    if (this.state.answer === null) {
      this.setState({ answer: val });
    } else {
      this.setState({ answer: 10 * this.state.answer + val});
    }
  }

  backspace() {
    const answer = Math.floor(this.state.answer / 10);
    if (answer === 0) {
      this.setState({answer: null});
    } else {
      this.setState({answer});
    }
  }

  checkAnswer() {
    this.props.onAnswer(this.state.answer);
    this.setState({ answer: null });
  }

  render () {
    const { answer } = this.state || '';
    return (
      <View style={{ display: 'flex', alignItems: 'stretch', justifyContent: 'space-between'}}>
        <Text style={{ fontSize: 40, textAlign: 'center' }}>{answer}</Text>
        <View style={styles.row}>
          {[7, 8, 9, 4, 5, 6, 1, 2, 3, '<', 0, 'v'].map((item, index) => (
              <View style={[styles.col, styles.col4, {flexDirection: 'row', justifyContent: 'center'}]} key={index}>
                { item === '<' && (<ImageButton
                    image={backspace}
                    backgroundColor="#ffffff"
                    onPress={() => this.backspace()}
                />) }
                { item === 'v' && (<ImageButton
                  image={check}
                  backgroundColor="#ffffff"
                  onPress={() => this.checkAnswer()}
                  />) }
                { typeof item === 'number' && (
                    <BigButton
                        text={item}
                        stretch
                        textSize={40}
                        textColor={variables.numbersColors[`num${item}`].fg}
                        backgroundColor={variables.numbersColors[`num${item}`].bg}
                        onPress={() => this.input(item)}
                    />
                )}
              </View>
          ))}
        </View>
      </View>
    )
  }
}
