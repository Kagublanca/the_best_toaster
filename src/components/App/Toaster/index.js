import "./index.css";
import ToasterLever from "../ToasterLever";

function Toaster() {
  return (
    <div>
      <div className="toasterbody" id="main">
        <div className="toasterbody" id="main_shade"></div>
        <div className="toasterbody" id="bottom"></div>
        <ToasterLever />
      </div>
    </div>
  );
}

export default Toaster;
