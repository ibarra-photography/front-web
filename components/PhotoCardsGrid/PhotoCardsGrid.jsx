import React, { Fragment, useState, useEffect } from "react";

import PhotoCard from "../PhotoCard/PhotoCard";

import fetchApiData from "../../services/fetchApiData";

import b64toBlob from "../../services/base64toBlob.js";

const PhotoCardsGrid = () => {
  const [photos, setPhotos] = useState(null);
  useEffect(() => {
    fetchApiData().then((response) => setPhotos(response));
  }, []);
  if (photos) {
    console.log(photos);
  }

  return (
    <Fragment>
      {photos?.map((photo) => {
        const blob = b64toBlob(photo.data);
        const blobUrl = URL.createObjectURL(blob);
        return (
          <PhotoCard key={photo._id} description="" link={blobUrl} title="" />
        );
      })}
      {!photos && <div>Loading...</div>}
    </Fragment>
  );
};

export default PhotoCardsGrid;
