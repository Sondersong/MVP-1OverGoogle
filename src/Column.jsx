/* eslint-disable react/prop-types */
import { images } from "./imgImport";

function Column({ gridScale, columnVar, activeImg, setActiveImg }) {
  return (
    <div
      className="column"
      style={activeImg ? {flex: '50%'} : { flex: `${gridScale[0] ? gridScale[1] : null}%` }}
    >
      {columnVar.map((element) => {
        return (
          <img
            onClick={() => {
              setActiveImg(element[0]);
            }}
            key={element[0]}
            src={images[`img${element[0]}`]}
            style={
              activeImg
                ? activeImg === element[0]
                  ? {
                      opacity: "100%",
                      position: "fixed",
                      maxWidth: "80%",
                      maxHeight: "60%",
                      top: '50%',
                      left: '50%',
                      transform: "translate(-50%, -50%) scale(100%)",
                      zIndex: "21",
                      filter: "drop-shadow(0 0 .1rem orange)"
                    }
                  : { display: "none" }
                : null
            }
          ></img>
        );
      })}
    </div>
  );
}

export default Column;
