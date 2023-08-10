const ImageUpload = () => {
  return (
    <div className="ImageUpload">
      <h1>Choose a file to upload</h1>
      <div id="uploadSection">
        <form>
          <label htmlFor="fileUpload">Upload</label>
          <input type="file" name="fileUpload"></input>
        </form>
      </div>
    </div>
  )
}

export default ImageUpload