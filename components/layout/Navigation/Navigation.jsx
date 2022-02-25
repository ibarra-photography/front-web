import Link from "next/link";
import React, { Fragment } from "react";

const Navigation = () => {
  return (
    <Fragment>
      <Link href="/">Home</Link>
      <Link href="/gallery">Gallery</Link>
    </Fragment>
  );
};

export default Navigation;
