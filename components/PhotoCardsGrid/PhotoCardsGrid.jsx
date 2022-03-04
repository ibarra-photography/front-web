import React, { Fragment, useState, useEffect } from "react";

import PhotoCard from "../PhotoCard/PhotoCard";

import fetchApiData from "../../services/fetchApiData";

const PhotoCardsGrid = () => {
  const [photos, setPhotos] = useState(null);
  useEffect(() => {
    fetchApiData().then((response) => setPhotos(response));
  }, []);
  return (
    <Fragment>
      {photos?.map((photo) => {
        console.log("in");
        return (
          <PhotoCard
            key={photo._id}
            description=""
            link={`http://localhost:4000/api/v1/photos/${photo._id}.jpg`}
            title=""
          />
        );
      })}
      {!photos && <div>Loading...</div>}
    </Fragment>
  );
};

export default PhotoCardsGrid;
