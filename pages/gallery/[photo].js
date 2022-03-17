import React, { useState, useEffect } from "react";

import { useRouter } from "next/router";

import fetchApiData from "../../services/fetchApiData";
import b64toBlob from "../../services/base64toBlob";

const Photo = () => {
  const router = useRouter();
  const [photos, setPhotos] = useState(null);
  useEffect(() => {
    fetchApiData().then((response) => setPhotos(response));
  }, []);
  if (photos) {
  }

  const renderPhoto = () => {
    return (
      <div>
        {photo &&
          photo.map((photo) => (
            <img
              key={photo.id}
              src={URL.createObjectURL(b64toBlob(photo.data))}
              alt=""
            />
          ))}
        {!photo && <p>Loading...</p>}
      </div>
    );
  };
  const id = router.query.photo;

  const photo = photos?.filter((photo) => photo._id == id);

  console.log("photo", photo);

  return <div>{renderPhoto()}</div>;
};

export default Photo;
