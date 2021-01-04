import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import { Button } from "@material-ui/core";

interface Props {
  to: string;
  children: string;
  color?: "default" | "inherit" | "primary" | "secondary";
  className?: string;
}

const MyLink = (props: Props) => {
  const { to, color, children } = props;
  return (
    <>
      {/* <Link to="/" component={ReactRouterLink}>
      czesc
    </Link> */}
      <Button
        {...props}
        color={color ? color : "inherit"}
        to={to}
        component={ReactRouterLink}
      >
        {children}
      </Button>
    </>
  );
};

export default MyLink;
