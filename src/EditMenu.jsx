/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { images } from "./imgImport";

function EditMenu({ activeImg, setActiveImg }) {
  return (
    <div id="editMenu">
      <h1>Is this page rendering</h1>
      <img src={images[`img${activeImg}`]} />
    </div>
  );
}

export default EditMenu;
