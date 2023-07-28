/* eslint-disable react/prop-types */
function MenuBar({ changeScale }) {
  return (
    <div id="menuBar">
      <h3>one / googol sec.</h3>
      <form>
        <label htmlFor="searchBar">Search</label>
        <input name="searchBar" type="text"></input>
      </form>
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
      <div id="uploadSection">
        <h5>Upload</h5>
        <i className="fa-solid fa-upload fa-2xl" style={{ color: "white" }}></i>
      </div>
    </div>
  );
}

export default MenuBar;
