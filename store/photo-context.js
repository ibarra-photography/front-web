import React from "react";

export const PhotoContext = React.createContext({
  photos: [],
  setPhotos: () => {},
});

const PhotoContextProvider = ({ children }) => {
  const [photos, setPhotos] = React.useState([]);

  return (
    <PhotoContext.Provider value={{ photos: photos, setPhotos: setPhotos }}>
      {children}
    </PhotoContext.Provider>
  );
};

export default PhotoContextProvider;
