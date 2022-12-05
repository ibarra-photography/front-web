import React from "react";

import Button from "components/Button/Button";
import PhotoCard from "components/PhotoCard/PhotoCard";

import b64toBlob from "services/base64toBlob";

export const PhotoComponent = ({ photos }) =>
  photos?.map(({ photo, _id }) => {
    const blob = b64toBlob(photo);
    const blobUrl = window.URL.createObjectURL(blob);

    console.log("blobUrl", blobUrl);
    return (
      <Button key={_id} path={`/gallery/${_id}`}>
        <PhotoCard key={_id} description="" link={blobUrl} title="" />
      </Button>
    );
  });
