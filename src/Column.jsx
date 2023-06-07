/* eslint-disable react/prop-types */
import { images } from "./imgImport";

function Column({ gridScale, columnVar, activeImg, setActiveImg }) {
  return (
    <div
      className="column"
      style={
        activeImg
          ? { flex: "50%" }
          : { flex: `${gridScale[0] ? gridScale[1] : null}%` }
      }
    >
      {columnVar.map((element) => {
        return (
          <img
            onClick={() => {
              setActiveImg(element[0]);
            }}
            key={element[0]}
            src={images[`img${element[0]}`]}
            style={activeImg ? { display: "none" } : null}
          ></img>
        );
      })}
    </div>
  );
}

export default Column;
