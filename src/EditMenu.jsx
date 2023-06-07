/* eslint-disable react/prop-types */
import { images } from "./imgImport";

function EditMenu({ activeImg, setActiveImg}) {
  return (
    <div id="editMenu">
      <p>The quick brown fox</p>
      <img src={images[`img${activeImg}`]}></img>
      <i className="fa-solid fa-arrow-right fa-2xl" style={{color: 'lightgray'}}></i>
    </div>
  )
}

export default EditMenu