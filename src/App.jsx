import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>

      <Link to="/">Home</Link>
      <br />
      <Link to="/quiz-app">Quiz App</Link>

      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/quiz-app" element={<h1>Quiz App Page</h1>} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;