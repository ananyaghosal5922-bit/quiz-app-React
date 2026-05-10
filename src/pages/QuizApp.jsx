import questions from "../data/questions";

function QuizApp() {
  return (
    <div>
      <h1>Quiz App</h1>

      <h2>{questions[0].question}</h2>

      {questions[0].options.map((option, index) => (
        <button key={index}>
          {option}
        </button>
      ))}
    </div>
  );
}

export default QuizApp;