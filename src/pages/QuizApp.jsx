import { useState } from "react";
import questions from "../data/questions";

function QuizApp() {

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [selectedAnswer, setSelectedAnswer] = useState("");

  const [score, setScore] = useState(0);

  const nextQuestion = () => {
     if (
      selectedAnswer ===
      questions[currentQuestion].correctAnswer
    ) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);

     setSelectedAnswer("");
  };

  return (
    <div>

      <h1>Quiz App</h1>
       {currentQuestion < questions.length ? (
      <div>

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
       <button onClick={nextQuestion}>
            Next
          </button>

        </div>

      ) : (

        <h2>
          Your Score: {score} / {questions.length}
        </h2>

      )}

    </div>
  );
}

      

export default QuizApp;