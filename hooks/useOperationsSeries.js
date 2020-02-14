import { useState } from 'react';

export default function ({ series = [], table }) {
  const [index, setIndex] = useState(0);
  const [random] = useState(typeof table !== 'number');
  const nextX = random ? () => Math.floor(Math.random() * 11) : () => table;
  const [x, setX] = useState(nextX());
  const seriesComplete = index >= series.length;
  const y = series[index % series.length];
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(null);
  const checkAnswer = (answer) => {
    setIsCorrectAnswer(answer === x * y);
  };
  const nextQuestion = () => {
    if (isCorrectAnswer === true) {
      setX(nextX());
      setIndex(index + 1);
    }
    setIsCorrectAnswer(null);
  };

  return {
    x,
    y,
    seriesComplete,
    checkAnswer,
    nextQuestion,
    isCorrectAnswer,
  }
}
