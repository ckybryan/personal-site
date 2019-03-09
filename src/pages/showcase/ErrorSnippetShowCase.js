import React, { useState } from "react";
import { ErrorSnippet } from "../../components/error";

const ErrorSnippetShowCase = () => {
  const [errors, setErrors] = useState([]);
  const [count, setCount] = useState(0);

  const generateError = () => {
    const options = [
      "Go to the washroom",
      "Take a shit",
      "point at the toilet",
      "say: 'eat that shit !'",
      "flush the toilet",
      "Hope you feel better",
      "No more",
      "I mean it, no more",
      "Still trying bro?",
      "K, you win"
    ];

    const newCount = count === options.length - 1 ? 0 : count + 1;
    const newErrors = errors;
    newErrors.push(options[count]);
    setErrors(newErrors);
    setCount(newCount);
  };

  return (
    <div>
      <ErrorSnippet
        error={errors}
        onHide={() => {
          setErrors([]);
          setCount(0);
        }}
      />
      <br />
      <button className="RE-error-gen-btn" onClick={generateError}>
        Done With Life?
      </button>
    </div>
  );
};

export default ErrorSnippetShowCase;
