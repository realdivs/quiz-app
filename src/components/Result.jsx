export const Result = ({ userAnswers, questions, resetQuiz = () => {} }) => {
  const correctAnswers = userAnswers.filter((answer) => answer).length;

  return (
    <div className="results">
      <h2>Results</h2>
      <p>
        You answered {correctAnswers} out of {questions.length} questions.
        <span onClick={resetQuiz} style={{ color: "blue" }}>
          Click here to retry.
        </span>
      </p>
      <ul>
        {questions.map((question, index) => {
          return (
            <div>
              <li
                key={index}
                style={{ color: userAnswers[index] ? "green " : "red" }}
              >
                Q{index + 1}. {question.question}
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
