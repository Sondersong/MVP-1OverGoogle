import { useState } from "react";
import "./css/App.css";
import Column from "./Column";
import EditMenu from "./EditMenu";
import MenuBar from "./MenuBar"

function GallaryView() {
  const [gridScale, setGridScale] = useState([false, 50]);
  const [activeImg, setActiveImg] = useState(0);
  let imgColumns = [];
  function assignPhotos() {
    let currentColumn = 0;
    for (var i = 0; i <= 23; i++) {
      if (currentColumn > 3) {
        currentColumn = 0;
      }
      imgColumns.push([i, currentColumn]);
      currentColumn++;
    }
  }
  assignPhotos();
  let column0 = imgColumns.filter((element) => element[1] === 0);
  let column1 = imgColumns.filter((element) => element[1] === 1);
  let column2 = imgColumns.filter((element) => element[1] === 2);
  let column3 = imgColumns.filter((element) => element[1] === 3);

  function changeScale(e) {
    let newScale = Number(e.target.value);
    if (newScale === 50) {
      setGridScale([true, 100]);
    } else {
      setGridScale([true, newScale + 25]);
    }
  }
  return (
    <div className="App">
      <MenuBar changeScale={changeScale} />
      {activeImg === 0 ? (
        <div id="photoGrid">
          <Column
            gridScale={gridScale}
            columnVar={column0}
            activeImg={activeImg}
            setActiveImg={setActiveImg}
          />
          <Column
            gridScale={gridScale}
            columnVar={column2}
            activeImg={activeImg}
            setActiveImg={setActiveImg}
          />
          <Column
            gridScale={gridScale}
            columnVar={column1}
            activeImg={activeImg}
            setActiveImg={setActiveImg}
          />
          <Column
            gridScale={gridScale}
            columnVar={column3}
            activeImg={activeImg}
            setActiveImg={setActiveImg}
          />
        </div>
      ) : (
        <div style={{ padding: "100px", height: "1000px" }}>
          <EditMenu activeImg={activeImg} setActiveImg={setActiveImg} />
        </div>
      )}
    </div>
  );
}

export default GallaryView;
