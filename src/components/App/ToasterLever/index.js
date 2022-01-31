import "./index.css";
import { useEffect, useState } from "react";

function ToasterLever() {
  const [isDown, setIsDown] = useState(false);

  function handleClick() {
    setIsDown(true);
  }

  return <div className="lever" onClick={handleClick}></div>;
}

export default ToasterLever;
