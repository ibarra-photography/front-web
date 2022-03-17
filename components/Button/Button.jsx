import React from "react";

import Link from "next/link";

const Button = (props) => {
  return (
    <div>
      <Link href={props.path}>
        <a>{props.children}</a>
      </Link>
    </div>
  );
};

export default Button;
