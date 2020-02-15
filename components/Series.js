import React, { useEffect } from 'react';
import {Image, View} from "react-native";

import useOperationsSeries from '../hooks/useOperationsSeries';

import OperationQuestion from '../components/OperationQuestion';
import OperationAnswer from '../components/OperationAnswer';
import Feedback from '../components/Feedback';

import smile from '../assets/images/smile.png';
import frown from '../assets/images/frown.png';

function getFeedback(isCorrect) {
  if (isCorrect === null) {
    return null;
  }
  return isCorrect ? smile: frown;
}

export default function Series ({
  series,
  table,
  onStart = () => {},
  onEnd = () => {},
  onMistake = () => {},
}) {
  const {
    x,
    y,
    seriesComplete,
    checkAnswer,
    nextQuestion,
    isCorrectAnswer,
  } = useOperationsSeries({ series, table });
  useEffect(() => {
    if (!seriesComplete) {
      nextQuestion();
    } else {
      onEnd();
    }
  });
  const feedback = getFeedback(isCorrectAnswer);
  if (isCorrectAnswer === false) {
    onMistake();
  }
  useEffect(onStart, []);
  return(
    <View style={{
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <View style={{flex: 1}} />
        <OperationQuestion
          x={x}
          y={y}
          style={{ flex: 3, flexDirection: 'row', justifyContent: 'center'}}
        />
        <View style={{flex: 1}}>
          { (!seriesComplete) && (<Feedback
            style={{ width: 50, height: 50 }}
            source={feedback}
          />)}
        </View>
      </View>
      <OperationAnswer onAnswer={checkAnswer}/>
    </View>
  );
}
