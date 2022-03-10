import React, { useState } from "react";

import axios from "axios";

const Input = () => {
  const [uploadedImage, setUploadedImage] = useState("");

  const handleInput = (event) => {
    console.log(event.target.files[0]);

    setUploadedImage(event.target.files[0]);
  };
  const formData = () => {
    if (uploadedImage) {
      const formData = new FormData();
      uploadedImage instanceof File;
      uploadedImage instanceof Blob;
      formData.append("MyPhoto.jpg", uploadedImage);
      console.log("Form Data", formData);
      return formData;
    }
  };

  const postImage = async () => {
    const res = await axios.post(
      "http://localhost:4000/api/v1/upload",
      formData(),
      {
        headers: {
          "Content-Type": "multipart/format-data",
        },
      }
    );
    console.log(res);
  };

  return (
    <div>
      <h2>Uploads</h2>
      <input type="file" name="image" onChange={handleInput} />
      <input type="button" value="Submit" onClick={() => postImage()} />
    </div>
  );
};

export default Input;
