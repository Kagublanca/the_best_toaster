import "./index.css";
import ToasterLever from "../ToasterLever";
import ToasterFace from "../ToasterFace";

function Toaster() {
  return (
    <div>
      <div className="toasterbody" id="main">
        <div className="toasterbody" id="main_shade"></div>
        <div className="toasterbody" id="bottom"></div>
        <ToasterLever />
      </div>
      <ToasterFace />
    </div>
  );
}

export default Toaster;
