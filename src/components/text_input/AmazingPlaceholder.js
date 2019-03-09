import React, { useState } from "react";

const AmazingPlaceholder = () => {
  const [value, setValue] = useState("");
  const [focused, setFocused] = useState(false);
  return (
    <div className="amazing-placeholder-container">
      <input
        className="amazing-placeholder-input"
        value={value}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={e => setValue(e.target.value)}
      />
      <label
        className={`amazing-placeholder ${value || focused ? "moved-top" : ""}`}
      >
        Username
      </label>
    </div>
  );
};

export default AmazingPlaceholder;
