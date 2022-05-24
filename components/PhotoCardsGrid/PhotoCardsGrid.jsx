import React, { Fragment, useState, useEffect } from "react";

import Button from "../Button/Button";
import PhotoCard from "../PhotoCard/PhotoCard";

import fetchApiData from "../../services/fetchApiData";

import b64toBlob from "../../services/base64toBlob.js";

const PhotoCardsGrid = () => {
  const [response, setResponse] = useState();
  const [isLoading, setIsLoading] = useState("idle");

  useEffect(() => {
    getPhotos();
  }, []);

  const getPhotos = async () => {
    try {
      setIsLoading("pending");
      const response = await fetchApiData();
      setResponse(response);
      setIsLoading("done");
    } catch (error) {
      setIsLoading("error");
    }
  };

  return (
    <Fragment>
      {isLoading === "done" &&
        response.map((photo) => {
          const blob = b64toBlob(photo.photo);
          const blobUrl = URL.createObjectURL(blob);
          return (
            <Button key={photo._id} path={`/gallery/${photo._id}`}>
              <PhotoCard
                key={photo._id}
                description=""
                link={blobUrl}
                title=""
              />
            </Button>
          );
        })}
      {isLoading === "pending" && <div>Loading...</div>}
    </Fragment>
  );
};

export default PhotoCardsGrid;
