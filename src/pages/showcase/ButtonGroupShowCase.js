import React, { useState } from "react";
import { ButtonGroup } from "../../components/button_group";

const ButtonGroupOpts = ["Life", "Is", "Hard"];
const ButtonGroupShowCase = () => {
  const [selectedTxt, setSelectedTxt] = useState(ButtonGroupOpts[0]);
  return (
    <ButtonGroup
      options={ButtonGroupOpts}
      onSelect={setSelectedTxt}
      selectedTxt={selectedTxt}
    />
  );
};

export default ButtonGroupShowCase;
