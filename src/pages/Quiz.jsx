import React, { useState } from "react";
import QuestionList from "./QuestionList";
import "./Quiz.css";
export default function Quiz() {
  const Questions = [
    {
      question: "What is npm ?",
      options: ["node package manager", "error", "All of the above"],
      answers: "node package manager",
    },
    {
      question: "What is 2+2 ? ",
      options: ["4", "8", "10", "16"],
      answers: "4",
    },
    {
      question: "Which of the following are fruits ?",
      options: ["Apple", "Cabbage", "Raddish", "Ginger"],
      answers: "Apple",
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const handleClick = (option) => {
    // Only set answer once per question
    if (currentAnswer !== null) return;
    
    setCurrentAnswer(option);
    if (option === Questions[currentQuestionIndex].answers) {
      setScore(prev => prev + 1);
    }
  };
  const handleNextQuestion = () => {
    setCurrentQuestionIndex(prev => prev + 1);
    setCurrentAnswer(null);
  };
  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setCurrentAnswer(null);
  };
  return (
    <div className="quiz-container">
      {currentQuestionIndex < Questions.length ? (
        <div>
          <QuestionList
            question={Questions[currentQuestionIndex].question}
            options={Questions[currentQuestionIndex].options}
            handleClick={handleClick}
            currentAnswer={currentAnswer}
          />
          <button
            disabled={currentAnswer === null}
            className={currentAnswer === null ? "button-disable" : "button"}
            onClick={handleNextQuestion}
          >
            Next Question
          </button>
        </div>
      ) : (
        <div className="quiz-result">
          <h2>Quiz Finished!</h2>
          <p className="final-score">Your Final Score: {score} / {Questions.length}</p>
          <button className="button" onClick={restartQuiz}>
            Restart Quiz
          </button>
        </div>
      )}
    </div>
  );
}
