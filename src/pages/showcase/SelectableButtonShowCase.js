import React, { useState } from "react";
import { SelectableButton } from "../../components/button";

const SelectableButtonShowCase = () => {
  const [active, setActive] = useState([]);

  const handleClick = txt => {
    const newActive = JSON.parse(JSON.stringify(active));
    const index = newActive.indexOf(txt);
    if (index !== -1) {
      newActive.splice(index, 1);
    } else {
      newActive.push(txt);
    }
    setActive(newActive);
  };

  const options = ["one", "two", "three"];
  return options.map((txt, index) => {
    const selected = active.indexOf(txt) !== -1;
    return (
      <SelectableButton
        key={txt + index}
        active={selected}
        onClick={handleClick}
        text={txt}
      />
    );
  });
};

export default SelectableButtonShowCase;
