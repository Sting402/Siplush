import "../style/bom.css";
import bom from "../assets/video/BOM-clip.mp4"

const Bom = () => {
  return (
    <section className="bom-section" id="BOM">
      <div className="bom-media">
        <video
          src={bom}
          className="bom-video"
          alt="SIPLUSH Lifestyle - A lifestyle brand inspired by California"
          autoPlay
          loop
          muted
        ></video>
      </div>
    </section>
  );
};

export default Bom;
