import { useState } from "react";
import questions from "../data/questions";

function QuizApp() {

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [selectedAnswer, setSelectedAnswer] = useState("");

  const nextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);

     setSelectedAnswer("");
  };

  return (
    <div>

      <h1>Quiz App</h1>

      <h2>{questions[currentQuestion].question}</h2>

      {questions[currentQuestion].options.map((option, index) => (
        <div key={index}>
          <button onClick={() => setSelectedAnswer(option)}

            style={{
              backgroundColor:
                selectedAnswer === option ? "lightgreen" : "white",
    color: "black",
    padding: "10px",
    margin: "5px",
    width: "200px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
            }}>{option}</button>
        </div>
      ))}
           <br />

      {currentQuestion < questions.length - 1 && (
        <button onClick={nextQuestion}>
          Next
        </button>
      )}

    </div>
  );
}

export default QuizApp;