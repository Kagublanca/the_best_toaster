import "./index.css";

function ToasterLever({ isDown, setIsDown }) {
  function handleClick() {
    console.log(isDown);
    setIsDown(true);
  }

  return <div className="lever" onMouseDown={handleClick}></div>;
}

export default ToasterLever;
