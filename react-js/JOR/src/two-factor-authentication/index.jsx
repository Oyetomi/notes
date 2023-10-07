import { useState } from "react";

const CORRECT_CODE = "123456";

function TwoFactor() {
  const [code, setCode] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    const isCorrect = code === CORRECT_CODE;
    window.alert(isCorrect ? "Correct" : "Incorrect");
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="auth-code">Enter authorization code:</label>
        <div className="row">
          <input
            id="auth-code"
            type="text"
            required={true}
            maxLength={6}
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <button>Validate</button>
        </div>
      </form>
    </>
  );
}

export default TwoFactor;
