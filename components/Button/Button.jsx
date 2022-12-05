import React from "react";

import Link from "next/link";

const Button = (props) => {
  return (
    <div>
      <Link href={props.path}>{props.children}</Link>
    </div>
  );
};

export default Button;
