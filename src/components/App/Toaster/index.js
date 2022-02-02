import "./index.css";
import ToasterLever from "../ToasterLever";

function Toaster({ isDown, setIsDown }) {
  return (
    <div>
      <div className="toasterbody" id="main">
        <div className="toasterbody" id="main_shade"></div>
        <div className="toasterbody" id="bottom"></div>
        <ToasterLever isDown={isDown} setIsDown={setIsDown} />
      </div>
    </div>
  );
}

export default Toaster;
