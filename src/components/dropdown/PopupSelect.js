import React, { useState, useRef, useEffect } from "react";

const OPTIONS = [
  { status: "Active", color: "green" },
  { status: "Pending", color: "yellow" },
  { status: "Cancel", color: "grey" }
];

const PopupSelect = props => {
  const [option, setOption] = useState(OPTIONS[0]);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownBtn = useRef();

  useEffect(() => {
    document.addEventListener("click", handleOutSideClick);
    return () => document.removeEventListener("click", handleOutSideClick);
  }, []);

  const handleOutSideClick = e => {
    if (!dropdownBtn.current.contains(e.target)) {
      setDropdownVisible(false);
    }
  };

  const buildOption = opt => {
    const { color, status } = opt;
    return (
      <div className="option-line">
        <div className={`circle ${color}`} />
        <div className={`text ${color}`}>{status}</div>
      </div>
    );
  };

  const buildExpendingButton = () => {
    return (
      <div
        className={`popup-select-btn ${option.color}`}
        onClick={() => setDropdownVisible(true)}
      >
        {buildOption(option)}
      </div>
    );
  };

  const buildDropdownList = () => {
    return (
      <div
        className={`popup-select-list ${dropdownVisible ? "" : "collapsed"}`}
      >
        {OPTIONS.map(opt => (
          <div
            className="option-row"
            key={opt.status}
            onClick={() => {
              setOption(opt);
              setDropdownVisible(false);
            }}
          >
            {buildOption(opt)}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="popup-select-container" ref={dropdownBtn}>
      {buildExpendingButton()}
      {buildDropdownList()}
    </div>
  );
};

export default PopupSelect;
