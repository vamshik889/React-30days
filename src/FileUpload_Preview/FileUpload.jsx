import React, { useState } from "react";

const FileUpload = () => {
  const [image, setImage] = useState(null);
  const handleChange = (e) => {
    const file = e.target.files[0];

    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImage(null);
    }
  };
  return (
    <div>
      <h1>Upload your image</h1>
      <input type="file" onChange={handleChange} accept="image" />
      {image ? (
        <div>
          <h1>Image preview</h1>
          <img
            src={image}
            alt="image"
            style={{ height: "100px", width: "100px" }}
          />
        </div>
      ) : (
        <div>No image to preview</div>
      )}
    </div>
  );
};

export default FileUpload;
