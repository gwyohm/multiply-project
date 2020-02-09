import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import BigButton from './BigButton';
import styles from '../styles';
import variables from '../styles/variables';

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
              <View style={[styles.col, styles.col4]} key={index}>
                { item === '<' && (<BigButton
                    text="<"
                    stretch
                    textSize={40}
                    textColor={variables.colors.lithium}
                    backgroundColor={variables.colors.raven}
                    onPress={() => this.backspace()}
                />) }
                { item === 'v' && (<BigButton
                  text="v"
                  stretch
                  textSize={40}
                  textColor={variables.colors.lithium}
                  backgroundColor={variables.colors.lime}
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
