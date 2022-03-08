import React, { useRef } from "react";

import Input from "../components/Input/Input";

const postImage = fetch("http://localhost:4000/api/v1/upload", {
  method: "POST",
  body: "",
});

const uploads = () => {
  return (
    <div>
      <Input />
    </div>
  );
};

export default uploads;
