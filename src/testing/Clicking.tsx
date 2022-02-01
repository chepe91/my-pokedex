import React, { useState } from "react";

export const Clicking = () => {
    const [changedText, setChangedText] = useState(false);

    const changeTextHandler = () => {
      setChangedText(true);
    };
  
    return (
      <div>
        {!changedText && <label>hello world!</label>}
        {changedText && <label>Changed!</label>}
        <button onClick={changeTextHandler}>Change Text</button>
      </div>
    );
}