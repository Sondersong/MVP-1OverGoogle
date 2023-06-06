import { useState } from "react";
import "./css/App.css";
import Column from "./Column";

function App() {
  const [gridScale, setGridScale] = useState([false, 50]);
  const [activeImg, setActiveImg] = useState(false);
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
      <div id="titleBar">
        <h1>
          1/<sub>10</sub>
          <sup>100</sup>sec
        </h1>
      </div>
      <div id="scaleBar">
        <form>
          <label htmlFor="scale">- Photo Size -</label>
          <input
            type="range"
            name="scale"
            id="scale"
            min="0"
            max="50"
            step="25"
            defaultValue="25"
            onChange={changeScale}
          />
        </form>
      </div>
      <div id="photoGrid">
        <Column gridScale={gridScale} columnVar={column0} activeImg={activeImg} setActiveImg={setActiveImg}/>
        <Column gridScale={gridScale} columnVar={column2} activeImg={activeImg} setActiveImg={setActiveImg}/>
        <Column gridScale={gridScale} columnVar={column1} activeImg={activeImg} setActiveImg={setActiveImg}/>
        <Column gridScale={gridScale} columnVar={column3} activeImg={activeImg} setActiveImg={setActiveImg}/>
        <Column gridScale={gridScale} columnVar={column0} activeImg={activeImg} setActiveImg={setActiveImg}/>
        <Column gridScale={gridScale} columnVar={column2} activeImg={activeImg} setActiveImg={setActiveImg}/>
        <Column gridScale={gridScale} columnVar={column1} activeImg={activeImg} setActiveImg={setActiveImg}/>
        <Column gridScale={gridScale} columnVar={column3} activeImg={activeImg} setActiveImg={setActiveImg}/>
      </div>
    </div>
  );
}

export default App;
