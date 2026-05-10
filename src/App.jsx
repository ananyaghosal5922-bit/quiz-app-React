import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import QuizApp from "./pages/QuizApp";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>

      <Link to="/quiz-app">
        <button>Go To Quiz App</button>
      </Link>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/quiz-app" element={<QuizApp />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;